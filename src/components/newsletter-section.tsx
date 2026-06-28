"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleJoin = () => {
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsValid(e.target.validity.valid && e.target.value.length > 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    alert("OK");
    setEmail("");
    setIsValid(false);
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row sm:items-center gap-3 px-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        onClick={handleJoin}
        className="rounded-full px-8 py-4 font-bold text-white text-[15px] whitespace-nowrap w-full sm:w-auto sm:flex-shrink-0 cursor-pointer"
        style={{ backgroundColor: "#e5392a" }}
      >
        Join our newsletter
      </button>

      <form
        onSubmit={handleSubmit}
        className="w-full sm:flex-1 flex items-center gap-3"
        noValidate
      >
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Your email here"
          className="flex-1 rounded-full px-6 py-4 text-[14px] font-medium outline-none placeholder:text-black/45 text-black"
          style={{ backgroundColor: "#f5c500", border: "none" }}
        />
        <button
          type="submit"
          disabled={!isValid}
          className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity duration-200"
          style={{
            backgroundColor: "#000",
            opacity: isValid ? 1 : 0.3,
            cursor: isValid ? "pointer" : "not-allowed",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 11 11" fill="none">
            <path
              d="M7.17418 1.66471L0.574525 1.66471L0.589256 0L10.0173 0L10.0173 9.42815L8.3527 9.44288L8.3527 2.84322L1.17851 10.0174L0 8.8389L7.17418 1.66471Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </motion.div>
  );
}
