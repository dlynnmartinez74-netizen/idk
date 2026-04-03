import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I’m your landscaping assistant. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input) return;

    const userMsg = { role: "user", text: input };

    // simple AI logic (no API needed)
    let botReply = "I can help with pricing, booking, and services.";

    if (input.toLowerCase().includes("price")) {
      botReply = "Pricing starts at $99 for basic lawn care and $250+ for full landscaping.";
    }
    if (input.toLowerCase().includes("book")) {
      botReply = "You can book by filling out the form below.";
    }
    if (input.toLowerCase().includes("service")) {
      botReply = "We offer lawn care, garden design, tree trimming, and cleanups.";
    }

    setMessages([...messages, userMsg, { role: "bot", text: botReply }]);
    setInput("");
  }

  return (
    <div style={{ fontFamily: "Arial" }}>

      {/* HERO */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(120deg, #1b5e20, #43a047)",
        color: "white"
      }}>
        <h1>GreenScape Landscaping</h1>
        <p>Premium landscaping, design & outdoor transformation</p>
      </section>

      {/* PRICING */}
      <section style={{ padding: "50px", textAlign: "center" }}>
        <h2>Pricing</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>

          <div style={card}>
            <h3>Basic</h3>
            <p>$99</p>
            <p>Lawn mowing + edging</p>
          </div>

          <div style={card}>
            <h3>Standard</h3>
            <p>$199</p>
            <p>Lawn + garden cleanup</p>
          </div>

          <div style={card}>
            <h3>Premium</h3>
            <p>$399+</p>
            <p>Full landscaping redesign</p>
          </div>

        </div>
      </section>

      {/* BOOKING FORM */}
      <section style={{ padding: "50px", textAlign: "center", background: "#f5f5f5" }}>
        <h2>Book a Service</h2>
        <form style={{ maxWidth: 400, margin: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
          <input placeholder="Name" style={inputStyle} />
          <input placeholder="Email" style={inputStyle} />
          <input placeholder="Address" style={inputStyle} />
          <select style={inputStyle}>
            <option>Lawn Care</option>
            <option>Garden Design</option>
            <option>Tree Service</option>
          </select>
          <button type="button" style={btn}>Request Booking</button>
        </form>
      </section>

      {/* AI CHAT */}
      <section style={{ padding: "50px", textAlign: "center" }}>
        <h2>AI Assistant</h2>

        <div style={{
          border: "1px solid #ccc",
          padding: 10,
          maxWidth: 500,
          margin: "auto",
          height: 300,
          overflowY: "auto"
        }}>
          {messages.map((m, i) => (
            <p key={i} style={{ textAlign: m.role === "user" ? "right" : "left" }}>
              <b>{m.role === "user" ? "You" : "AI"}:</b> {m.text}
            </p>
          ))}
        </div>

        <div style={{ marginTop: 10 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ padding: 10, width: "60%" }}
            placeholder="Ask about pricing or booking..."
          />
          <button onClick={sendMessage} style={btn}>Send</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1b5e20", color: "white", textAlign: "center", padding: 20 }}>
        © 2026 GreenScape Landscaping
      </footer>

    </div>
  );
}

const card = {
  padding: 20,
  borderRadius: 10,
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  width: 200
};

const inputStyle = {
  padding: 10,
  borderRadius: 6,
  border: "1px solid #ccc"
};

const btn = {
  padding: 10,
  background: "#1b5e20",
  color: "white",
  border: "none",
  cursor: "pointer"
};
