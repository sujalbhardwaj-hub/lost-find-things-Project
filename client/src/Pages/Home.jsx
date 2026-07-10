import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";

function Home() {

  const items = [

    {
      title: "Laptop",
      location: "Computer Lab",
      status: "Lost",
      image: "https://picsum.photos/300/200?random=1",
    },

    {
      title: "Wallet",
      location: "Library",
      status: "Lost",
      image: "https://picsum.photos/300/200?random=2",
    },

    {
      title: "ID Card",
      location: "Main Gate",
      status: "Found",
      image: "https://picsum.photos/300/200?random=3",
    },

    {
      title: "Backpack",
      location: "Canteen",
      status: "Found",
      image: "https://picsum.photos/300/200?random=4",
    },

  ];

  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar />

      <section className="container">

        <h2 style={{ margin: "40px 0 20px" }}>
          Recent Items
        </h2>

        <div className="card-grid">

          {items.map((item, index) => (

            <ItemCard
              key={index}
              title={item.title}
              location={item.location}
              status={item.status}
              image={item.image}
            />

          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;