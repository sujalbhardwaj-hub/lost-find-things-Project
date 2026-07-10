import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <h1>College Lost & Found</h1>

      <p>
        Report lost items, report found belongings,
        and help students reconnect with their valuables.
      </p>

     <button onClick={() => window.location.href="/lost"}>
         Report Lost Item
     </button>

    </section>
  );
}

export default Hero;