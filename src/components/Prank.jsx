import { useEffect, useState } from "react";
import gif from '../assets/Cat Mocking GIF.gif'

export default function Prank({ onRestart }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // small delay so CSS transitions run on mount
    const t = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 to-violet-400 p-6 text-center transform transition-all duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
        <img src={gif} alt="" />
      <h1
        className={`text-5xl font-bold text-white mb-4 transform transition-all duration-700 ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-95"
        }`}
        style={{ transitionDelay: "120ms" }}
      >
        YOU JUST GOT GOT! HAHA!
      </h1>

      <p
        className={`text-white text-lg mb-2 transform transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        style={{ transitionDelay: "220ms" }}
      >
        You just told me your crush!
      </p>
      <p
        className={`text-white/80 text-sm mb-6 transform transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        style={{ transitionDelay: "320ms" }}
      >
        you really fell for ts lol, look at you rn, prolly scared shit 😂😂
      </p>

      <button
        onClick={onRestart}
        className={`bg-white text-pink-500 font-bold px-6 py-2 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "420ms" }}
      >
        Go Back
      </button>
    </div>
  );
}
