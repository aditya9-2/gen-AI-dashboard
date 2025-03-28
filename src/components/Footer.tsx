import React from 'react';
import { Brain } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-white shadow-sm mt-20">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center gap-2">
                        <Brain className="h-6 w-6 text-blue-500" />
                        <span className="text-lg font-semibold text-gray-900">Gen AI Analytics</span>
                    </div>
                    <div className="text-sm text-gray-600 text-center">
                        <p>© All rights reserved 2025</p>
                        <p>Made by <span className='text-green-400'>Aditya</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};