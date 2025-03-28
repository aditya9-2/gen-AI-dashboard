import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Clock, CheckCircle, XCircle, Loader2 } from 'lucide-react';

export const QueryHistory: React.FC = () => {
    const { items } = useSelector((state: RootState) => state.queries);

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'success':
                return <CheckCircle className="h-5 w-5 text-green-500" />;
            case 'error':
                return <XCircle className="h-5 w-5 text-red-500" />;
            case 'pending':
                return <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Query History
            </h2>
            <div className="space-y-4">
                {items.map((query) => (
                    <div
                        key={query.id}
                        className="bg-white p-4 rounded-lg shadow border border-gray-200"
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-gray-800">{query.text}</p>
                            <div className="flex items-center gap-2">
                                {getStatusIcon(query.status)}
                                <span className="text-sm text-gray-500">
                                    {new Date(query.timestamp).toLocaleTimeString()}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};