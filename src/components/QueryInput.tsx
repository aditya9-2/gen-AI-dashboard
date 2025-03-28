import React, { useState } from 'react';
import { Search, Send } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { processQuery } from '../store/queriesSlice';

export const QueryInput: React.FC = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const { suggestions, isLoading } = useSelector((state: RootState) => state.queries);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim() && !isLoading) {
            dispatch(processQuery(query.trim()));
            setQuery('');
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
                <div className="relative">
                    <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask anything about your data..."
                        className="w-full pl-12 pr-16 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={!query.trim() || isLoading}
                        className="absolute right-2 top-2 p-2 rounded-md bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                    >
                        <Send className="h-4 w-4" />
                    </button>
                </div>
                {query && (
                    <div className="absolute w-full bg-white mt-1 rounded-lg shadow-lg border border-gray-200 z-10">
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => setQuery(suggestion)}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </form>
        </div>
    );
};