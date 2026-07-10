import { useEffect,useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import "../styles/items.css";
import API from "../services/api";

function Items() {
  const fetchItems = async () => {
    try {
       const res = await API.get("/items");

       setItems(res.data);

       setLoading(false);
    } catch (err) {
       console.log(err);
    }
    };

    useEffect(() => {
      fetchItems();
    }, []);
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
    {
      title: "Keys",
      location: "Parking Area",
      status: "Found",
      image: "https://picsum.photos/300/200?random=5",
    },
    {
      title: "Calculator",
      location: "Classroom A-102",
      status: "Lost",
      image: "https://picsum.photos/300/200?random=6",
    },
  ];

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const filteredItems = Items.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "All" || item.status === filter;

    return matchSearch && matchFilter;
  });

  return (
    <>
      <Navbar />

      <div className="items-page">

        <h1>Lost & Found Items</h1>

        <div className="filter-box">

          <input
            type="text"
            placeholder="Search item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Lost</option>
            <option>Found</option>
          </select>

        </div>

        <div className="card-grid">

          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <ItemCard
                key={index}
                title={item.title}
                location={item.location}
                status={item.status}
                image={item.image}
              />
            ))
          ) : (
            <h3>No Items Found</h3>
          )}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Items;