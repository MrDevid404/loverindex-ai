const TermsAndConditions = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col p-8 justify-center items-center text-center w-96 gap-4 backdrop-blur-2xl bg-slate-800 text-white rounded-3xl shadow-2xl">
        <h1 className="font-bold text-4xl">Terms and Conditions</h1>
        <p>
          By accessing LoveLens AI, you agree that: Love is unpredictable and
          may or may not exist. Our advanced algorithms are powered by vibes,
          coincidence, and absolutely no science. Results may vary depending on
          mood, Wi-Fi strength, and alignment of fictional stars. You
          acknowledge that hearts are fragile and memes are forever. Any
          resemblance to real compatibility is purely accidental and slightly
          impressive. Continued use of this service means you accept these
          totally serious terms.
        </p>
        <p className="italic text-text-secondary">
            This app is for entertainment purposes only. No real analysis is performed and no data is stored.
        </p>
        <div className="flex gap-2">
           <a href="#" className="btn-primary">Accept</a>
           <a href="#" className="btn-outline">Decline</a>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
