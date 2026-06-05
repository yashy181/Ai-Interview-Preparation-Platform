import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">

      <nav className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold text-purple-400">
          InterviewAI
        </h1>

        <div className="space-x-6">
          <Link to="/interview">Generator</Link>
          <Link to="/chatbot">Chatbot</Link>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">

        <h1 className="text-6xl font-bold max-w-4xl">
          Crack Technical Interviews Using AI
        </h1>

        <p className="text-gray-300 mt-6 max-w-2xl text-lg">
          AI-powered interview preparation platform.
        </p>

        <Link
          to="/interview"
          className="mt-8 bg-purple-600 px-8 py-4 rounded-2xl"
        >
          Start Preparing
        </Link>

      </div>
    </div>
  );
}