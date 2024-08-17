import { NextResponse } from 'next/server';

const PYTHON_SERVER_URL = process.env.PYTHON_SERVER_URL || 'https://lookfantastic-scraper.onrender.com/search';

export async function POST(request: Request) {
    const body = await request.json();
    const { product_name } = body;

    console.log('Sending request to Python server with product name:', product_name);
    console.log('Python server URL:', PYTHON_SERVER_URL);

    try {
        const response = await fetch(`${PYTHON_SERVER_URL}/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product_name }),
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers));

        const text = await response.text();
        console.log('Response text:', text);

        if (!response.ok) {
            return NextResponse.json({ error: `Server responded with status ${response.status}: ${text}` }, { status: response.status });
        }

        let data;
        try {
            data = JSON.parse(text);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            return NextResponse.json({ error: 'Invalid JSON response from server', details: text }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error: unknown) {
        console.error('Fetch error:', error);
        if (error instanceof Error) {
            return NextResponse.json({ error: 'An error occurred while fetching data', details: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred while fetching data' }, { status: 500 });
        }
    }
}
