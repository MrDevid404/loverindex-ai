const Hero = () => {
  return (
    <section className="mainsection">
      <div className="text-center flex flex-col gap-4">
        <h1 className="font-bold text-5xl">LoverIndex Ai</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maiores,
          dicta et praesentium fugiat mollitia!{" "}
        </p>
      </div>
      <a
        className="btn-primary my-4"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          try {
            // try to navigate via history API
            window.history.pushState({}, "", "/loading");
            // dispatch a popstate so Router can react if present
            window.dispatchEvent(new PopStateEvent("popstate"));
          } catch (err) {
            // fallback: full navigation
            window.location.href = "/loading";
          }
        }}
      >
        Get Your Love Index
      </a>
    </section>
  );
};

export default Hero;
