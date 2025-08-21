export default {
  async fetch(request, env, ctx) {
    const allowedOriginsString = env.ALLOWED_ORIGINS || 'http://localhost:5173';
    const allowedOrigins = allowedOriginsString.split(',');

    const origin = request.headers.get('Origin');
    const isAllowedOrigin = allowedOrigins.includes(origin);

    const corsHeaders = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': isAllowedOrigin ? origin : null,
    };

    if (request.method === 'OPTIONS') {
      return handleOptions(request, isAllowedOrigin, origin);
    }

    if (request.method !== 'GET') {
      return new Response('Expected GET request', {
        status: 405,
        headers: corsHeaders,
      });
    }

    // Parse query parameters
    const url = new URL(request.url);
    const limit = url.searchParams.get('limit') || '10';
    const difficulty = url.searchParams.get('difficulty') || '';
    const quizType = url.searchParams.get('quizType') || null;

    if (!quizType || quizType === 'defaultType' || quizType === 'DefaultType') {
      return new Response('Quiz type is required', {
        status: 400,
        headers: corsHeaders,
      });
    }

    const geminiApiKey = env.GOOGLE_GEMINI_API_KEY;

    if (!geminiApiKey) {
      return new Response('API key not configured', {
        status: 500,
        headers: corsHeaders,
      });
    }

    const prompt = `
        Generate ${limit} coding quiz questions with the following criteria:
        - Language: ${quizType}
        - Difficulty: ${difficulty}

        Provide the output as a valid JSON array of objects. Do not include any text outside of the JSON array. Each object in the array should have the following structure:
        {
            "question": "The question text",
            "answers": {
                "answer_a": "Answer A",
                "answer_b": "Answer B",
                "answer_c": "Answer C",
                "answer_d": "Answer D"
            },
            "multiple_correct_answers": "false",
            "correct_answers": {
                "answer_a_correct": "true",
                "answer_b_correct": "false",
                "answer_c_correct": "false",
                "answer_d_correct": "false"
            }
        }
    `;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`;

    try {
      const geminiResponse = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      if (!geminiResponse.ok) {
        const errorText = await geminiResponse.text();
        console.error("Gemini API Error:", errorText);
        return new Response(`Gemini API Error: ${errorText}`, {
          status: geminiResponse.status,
          headers: corsHeaders,
        });
      }

      const geminiData = await geminiResponse.json();
      const text = geminiData.candidates[0].content.parts[0].text;
      const jsonText = text.replace(/```json/g, '').replace(/```/g, '').trim();

      return new Response(jsonText, { 
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': isAllowedOrigin ? origin : null,
        }
      });

    } catch (error) {
      console.error("Worker Error:", error);
      return new Response('An internal error occurred', {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};

function handleOptions(request, isAllowedOrigin, origin) {
  if (
    request.headers.get('Origin') !== null &&
    request.headers.get('Access-Control-Request-Method') !== null &&
    request.headers.get('Access-Control-Request-Headers') !== null
  ) {
    // Handle CORS preflight requests.
    const headers = {
      'Access-Control-Allow-Origin': isAllowedOrigin ? origin : null,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    return new Response(null, {
      headers,
    });
  } else {
    return new Response(null, {
      headers: {
        Allow: 'GET, OPTIONS',
      },
    });
  }
}