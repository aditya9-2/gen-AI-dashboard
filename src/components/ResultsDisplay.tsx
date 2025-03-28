import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { AlertCircle } from 'lucide-react'
import { PieChartComponent } from "./charts/PieChartComponent"
import { LineChartComponent } from './charts/LineChartComponent';
import { BarChartComponent } from './charts/BarChartComponent';


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


                <LineChartComponent data={latestQuery.result.data} />
                <BarChartComponent data={latestQuery.result.data} />
                <PieChartComponent data={latestQuery.result.data} />

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-medium text-gray-900 mb-2">Analysis Summary</h4>
                    <p className="text-gray-600">{latestQuery.result.summary}</p>
                </div>
            </div>
        );
    }

    return null;
};