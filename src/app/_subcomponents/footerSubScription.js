"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMdSend } from "react-icons/io";

export default function CompactSubscriptionForm({ maxw }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Thank you for subscribing! 🎉 You’re now part of the Carlo community. Expect updates on AI compliance, new features, and research straight to your inbox");
        setEmail("");
      } else {
        alert("❌ Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("⚠️ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center bg-black border border-gray-600 rounded-[10px] overflow-hidden max-w-[300px] pr-4 ${
        maxw && "mx-auto"
      }`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
        className="bg-black text-white text-sm px-4 py-3 outline-none w-full placeholder:font-medium placeholder:text-white"
        required
      />
     <button
  type="submit"
  disabled={loading}
  className={`flex-shrink-0 p-2 rounded-full transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
  aria-label="Send message"
  aria-busy={loading}
  title={loading ? "Sending..." : "Send message"}
>
  <IoMdSend color={loading ? "grey" : "#651FFF"} size={23} />
</button>
    </form>
  );
}
