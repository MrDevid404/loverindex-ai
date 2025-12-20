import { useEffect, useState } from "react";

const steps = [
  "🔍 Scanning emotional wavelengths...",
  "🤖 Running neural love model...",
  "💞 Matching heart frequencies...",
  "📊 Consulting romance database...",
  "✨ Finalizing compatibility..."
];

export default function LoadingScreen({ onDone }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // rotate fake AI steps
    const stepInterval = setInterval(() => {
      setIndex((i) => (i + 1) % steps.length);
    }, 700);

    // progress counter
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 2;
      });
    }, 70);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // when progress hits 100, finish
  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onDone();
      }, 500); // tiny pause at 100%
      return () => clearTimeout(timeout);
    }
  }, [progress, onDone]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-xl text-center w-80">
        
        <div className="text-5xl animate-pulse mb-4">❤️</div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Analyzing Compatibility
        </h2>

        <p className="text-sm text-gray-600 mb-3">{steps[index]}</p>

        <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden mb-2">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-violet-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-gray-500">{progress}%</p>
      </div>
    </div>
  );
}
