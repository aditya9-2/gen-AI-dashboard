import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { LineChart as LineChartIcon } from 'lucide-react';
import { DataPoint } from '../../types';

interface LineChartComponentProps {
    data: DataPoint[];
}

export const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
                <LineChartIcon className="h-5 w-5 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-900">Trend Analysis</h3>
            </div>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="name" stroke="#4b5563" />
                        <YAxis stroke="#4b5563" />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="value"
                            name="Trend"
                            stroke="#3b82f6"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};