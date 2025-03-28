import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { BarChart as BarChartIcon } from 'lucide-react';
import { DataPoint } from '../../types';

interface BarChartComponentProps {
    data: DataPoint[];
}

export const BarChartComponent: React.FC<BarChartComponentProps> = ({ data }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
                <BarChartIcon className="h-5 w-5 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900">Comparative Analysis</h3>
            </div>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
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
    );
};