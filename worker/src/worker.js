// This is the code for your Cloudflare Worker
export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight requests
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return handleOptions(request);
    }

    if (request.method !== 'GET') {
      return new Response('Expected GET request', { status: 405 });
    }

    // Parse query parameters from URL instead of JSON body
    const url = new URL(request.url);
    const limit = url.searchParams.get('limit') || '10';
    const category = url.searchParams.get('category') || '';
    const difficulty = url.searchParams.get('difficulty') || '';
    const quizType = url.searchParams.get('quizType') || null;

    // Fix the early return to include CORS headers
    if (!quizType || quizType === 'defaultType' || quizType === 'DefaultType') {
      return new Response('Quiz type is required', { 
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
    }

    console.log('Query params:', { limit, category, difficulty, quizType });

    const geminiApiKey = env.GOOGLE_GEMINI_API_KEY || process.env.GOOGLE_GEMINI_API_KEY;

    if (!geminiApiKey) {
      return new Response('API key not configured', { status: 500 });
    }

    const prompt = `
        Generate ${limit} quiz questions with the following criteria:
        - Category: ${quizType}
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

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`;

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
        return new Response('Error fetching from Gemini API', { status: geminiResponse.status });
      }

      const geminiData = await geminiResponse.json();
      const text = geminiData.candidates[0].content.parts[0].text;
      const jsonText = text.replace(/```json/g, '').replace(/```/g, '').trim();

      const headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });

      return new Response(jsonText, { headers });

    } catch (error) {
      console.error("Worker Error:", error);
      return new Response('An internal error occurred', { status: 500 });
    }
  },
};

function handleOptions(request) {
  const headers = request.headers;
  if (
    headers.get('Origin') !== null &&
    headers.get('Access-Control-Request-Method') !== null &&
    headers.get('Access-Control-Request-Headers') !== null
  ) {
    // Handle CORS preflight requests.
    return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    });
  } else {
    return new Response(null, {
      headers: {
        Allow: 'POST, OPTIONS',
      },
    });
  }
}