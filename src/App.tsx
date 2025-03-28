
import { Provider } from "react-redux"
import { store } from './store';
import { QueryHistory } from "./components/QueryHistory";
import { QueryInput } from "./components/QueryInput";
import { ResultsDisplay } from "./components/ResultsDisplay";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="max-w-7xl mx-auto px-4 py-8">
          <QueryInput />
          <ResultsDisplay />
          <QueryHistory />
        </main>

        <div className="mt-28">
          <Footer />
        </div>
      </div>
    </Provider>
  )
}

export default App