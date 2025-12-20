import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heart from "../../../assets/hearts.png";

const Calculator = () => {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "33feec7f-86d7-4cda-b4a4-17d96b792003");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
        navigate("/loading"); // go to loading page after success
      } else {
        setResult("Submission failed. Try again.");
      }
    } catch (err) {
      setResult("Network error. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-purple-50 p-8 gap-8 text-gray-800">
      {/* Header */}
      <div className="max-w-2xl text-center items-center flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-pink-500 flex items-center">
          <span className="flex gap-2 items-center">
            <img className="w-10" src={heart} alt="" />
          </span>
          LoverIndex AI
          <span className="flex gap-2 items-center">
            <img className="w-10" src={heart} alt="" />
          </span>
        </h1>
        <p className="text-lg text-gray-600">
          Discover your compatibility and have fun! Fill out the fields below
          and see what your LoverIndex says.
        </p>
      </div>{" "}
      <div className="text-justify max-w-2xl flex flex-col">
        {" "}
        <h1 className="font-bold text-4xl">How Does it Work?</h1>
        <p>
          Our playful LoverIndex blends lightweight heuristics with a touch of
          theatrical randomness to create an entertaining compatibility score.
          When you submit names and ages the input is anonymized in the client,
          then passed through a compact compatibility routine that considers
          simple signals — shared interests, phrasing patterns, timing cues and
          a handful of randomized adjustments so each result feels lively and
          surprising. The whole flow is designed for instant delight: short,
          animated progress, a dramatic reveal, and nothing that should be taken
          as serious relationship advice. It's all for fun and conversation.
        </p>
        <h1 className="font-bold text-4xl">What does your Index Mean?</h1>
        <p>
          The LoverIndex is a friendly score from 0 to 100 that represents a
          blended, entertainment-oriented measure of 'romantic resonance.' A
          higher number indicates the interface detected more alignment in the
          playful signals it examines; a lower number means fewer matching cues.
          Importantly, the index is intentionally lightweight and subjective —
          it is meant to spark conversation and smiles rather than provide any
          factual assessment. Treat the result as a fun prompt: compare with
          friends, laugh at the quirks, and enjoy the moment.
        </p>
      </div>
      {/* Form Card */}
      <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-6 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-purple-500">
          Calculate Your Index
        </h2>

        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          {/* Your Info */}
          <div className="flex flex-col gap-4">
            <label className="font-semibold">Your Name</label>
            <div className="flex gap-4">
              <input
                type="text"
                name="your_name"
                placeholder="Full Name"
                required
                className="flex-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
              />
              <input
                type="number"
                name="your_age"
                placeholder="Age (Optional)"
                className="w-24 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
              />
            </div>
          </div>

          {/* Crush Info */}
          <div className="flex flex-col gap-4">
            <label className="font-semibold">Your Crush</label>
            <div className="flex gap-4">
              <input
                type="text"
                name="crush_name"
                placeholder="Full Name"
                required
                className="flex-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              />
              <input
                type="number"
                name="crush_age"
                placeholder="Age (Optional)"
                className="w-24 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              />
            </div>
          </div>

          {/* Note */}
          <p className="text-sm text-gray-500 italic text-center">
            Age is optional but improves results.
          </p>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 focus:bg-pink-400 text-white font-bold py-3 rounded-xl transition shadow-md hover:shadow-lg"
          >
            Get Your Index
          </button>

          {/* Result */}
          {result && (
            <p className="text-center text-sm text-gray-600">{result}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Calculator;
