import React from 'react';
import {
    PieChart, Pie, Cell, Tooltip,
    ResponsiveContainer, Legend
} from 'recharts';
import { PieChart as PieChartIcon } from 'lucide-react';
import { DataPoint } from '../../types/index';
import { COLORS } from "../../config/config"


interface PieChartComponentProps {
    data: DataPoint[];
}

export const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
                <PieChartIcon className="h-5 w-5 text-orange-500" />
                <h3 className="text-lg font-semibold text-gray-900">Distribution Analysis</h3>
            </div>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label
                        >
                            {data.map((_entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};