import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle } from 'lucide-react';

export const ResultsDisplay: React.FC = () => {
    const { items, error } = useSelector((state: RootState) => state.queries);
    const latestQuery = items[0];

    if (!latestQuery) {
        return null;
    }

    if (latestQuery.status === 'error') {
        return (
            <div className="w-full max-w-4xl mx-auto mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 text-red-600">
                    <AlertCircle className="h-5 w-5" />
                    <p>Error processing query: {error}</p>
                </div>
            </div>
        );
    }

    if (latestQuery.status === 'pending') {
        return (
            <div className="w-full max-w-4xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center h-64">
                    <div className="animate-pulse text-gray-400">Processing query...</div>
                </div>
            </div>
        );
    }

    if (latestQuery.status === 'success' && latestQuery.result) {
        return (
            <div className="w-full max-w-4xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Analysis Results</h3>
                <div className="h-64 mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={latestQuery.result.data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-gray-600">{latestQuery.result.summary}</p>
            </div>
        );
    }

    return null;
};