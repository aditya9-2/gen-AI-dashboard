import { Brain } from "lucide-react"

export const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center gap-2">
                    <Brain className="h-8 w-8 text-blue-500" />
                    <h1 className="text-2xl font-bold text-gray-900">Gen AI Analytics</h1>
                </div>
            </div>
        </header>


    )

}