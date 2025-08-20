// This is the code for your Cloudflare Worker
export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return handleOptions(request);
    }

    if (request.method !== 'POST') {
      return new Response('Expected POST request', { status: 405 });
    }

    const { limit, category, difficulty, tags } = await request.json();
    const geminiApiKey = env.GEMINI_API_KEY;

    if (!geminiApiKey) {
        return new Response('API key not configured', { status: 500 });
    }

    const prompt = `
        Generate ${limit} quiz questions with the following criteria:
        - Category: ${category}
        - Difficulty: ${difficulty}
        - Tags: ${tags.join(', ')}

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
        'Access-Control-Allow-Origin': '*', // Or your specific domain for better security
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
        'Access-Control-Allow-Origin': '*', // Or your specific domain
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
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