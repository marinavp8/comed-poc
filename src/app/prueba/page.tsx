"use client"
import React, { useState } from 'react';
import type { NextPage } from 'next';

interface SearchResult {
    product_url: string;
    ingredients: string;
}

const Home: NextPage = () => {
    const [productName, setProductName] = useState<string>('');
    const [result, setResult] = useState<SearchResult | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch('/api/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product_name: productName }),
            });

            const data = await response.json();

            if (response.ok) {
                setResult(data as SearchResult);
            } else {
                setError((data as { error: string }).error || 'An error occurred');
            }
        } catch (error) {
            setError('An error occurred while fetching data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Product Ingredients Finder</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={productName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)}
                    placeholder="Enter product name"
                    className="border p-2 mr-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {error && <p className="text-red-500">{error}</p>}

            {result && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Results:</h2>
                    <p><strong>Product URL:</strong> <a href={result.product_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">{result.product_url}</a></p>
                    <p><strong>Ingredients:</strong> {result.ingredients}</p>
                </div>
            )}
        </div>
    );
};

export default Home;
