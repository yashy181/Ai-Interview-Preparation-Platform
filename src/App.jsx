import { useState } from "react";
import axios from "axios";

function App() {

  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {

    if (!topic) {
      alert("Please enter a topic");
      return;
    }

    setLoading(true);

    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

    try {

      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Generate 5 interview questions with answers about ${topic} for software engineering interviews.`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const result =
        response.data.choices[0].message.content;

      setQuestions(result);

    } catch (error) {

      console.log(error);

      setQuestions(
        "API Error: " +
        (error.response?.data?.error?.message || error.message)
      );
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #000000, #1e1b4b)",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >

      <h1
        style={{
          fontSize: "60px",
          color: "#a855f7",
          marginBottom: "10px",
        }}
      >
        InterviewAI
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#d1d5db",
          marginBottom: "40px",
        }}
      >
        AI Powered Interview Preparation Platform
      </p>

      <input
        type="text"
        placeholder="Enter topic like React, DSA, Java..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{
          padding: "15px",
          width: "350px",
          borderRadius: "12px",
          border: "none",
          fontSize: "18px",
          outline: "none",
        }}
      />

      <br />

      <button
        onClick={generateQuestions}
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          background: "#9333ea",
          border: "none",
          borderRadius: "12px",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Questions"}
      </button>

      <div
        style={{
          marginTop: "50px",
          background: "#111827",
          padding: "25px",
          borderRadius: "15px",
          width: "75%",
          marginInline: "auto",
          textAlign: "left",
          whiteSpace: "pre-wrap",
          lineHeight: "1.8",
          fontSize: "18px",
        }}
      >
        {questions}
      </div>

    </div>
  );
}

export default App;