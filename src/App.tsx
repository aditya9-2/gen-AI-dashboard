
import { Provider } from "react-redux"
import { store } from './store';
import { Brain } from "lucide-react";
import { QueryHistory } from "./components/QueryHistory";
import { QueryInput } from "./components/QueryInput";
import { ResultsDisplay } from "./components/ResultsDisplay";
const App = () => {
  return (
    <Provider store={store}>


      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-900">Gen AI Analytics</h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <QueryInput />
          <ResultsDisplay />
          <QueryHistory />
        </main>


      </div>



    </Provider>
  )
}

export default App