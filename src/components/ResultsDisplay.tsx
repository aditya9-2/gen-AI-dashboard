import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Bar, BarChart, Cell, Pie, PieChart } from 'recharts';
import { AlertCircle, BarChartIcon, PieChartIcon } from 'lucide-react';
import { COLORS } from "../config/config"

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
            <div className="w-full max-w-4xl mx-auto mt-8 p-8 space-y-8 bg-white rounded-lg shadow-md">
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


                {/* Bar */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-4">
                        <BarChartIcon className="h-5 w-5 text-green-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Comparative Analysis</h3>
                    </div>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={latestQuery.result.data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="name" stroke="#4b5563" />
                                <YAxis stroke="#4b5563" />
                                <Tooltip />
                                <Legend />
                                <Bar
                                    dataKey="value"
                                    name="Value"
                                    fill="#10b981"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pie */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-4">
                        <PieChartIcon className="h-5 w-5 text-orange-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Distribution Analysis</h3>
                    </div>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={latestQuery.result.data}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    label
                                >
                                    {latestQuery.result.data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-medium text-gray-900 mb-2">Analysis Summary</h4>
                    <p className="text-gray-600">{latestQuery.result.summary}</p>
                </div>
            </div>
        );
    }

    return null;
};