import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/dashboard.css";

function Dashboard() {

  const [items, setItems] = useState([
    {
      id: 1,
      title: "Laptop",
      status: "Lost",
      location: "Computer Lab"
    },
    {
      id: 2,
      title: "Wallet",
      status: "Found",
      location: "Library"
    },
    {
      id: 3,
      title: "ID Card",
      status: "Found",
      location: "Main Gate"
    }
  ]);

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Admin Dashboard</h1>

        <div className="stats">

          <div className="stat-card">
            <h2>{items.length}</h2>
            <p>Total Reports</p>
          </div>

          <div className="stat-card">
            <h2>
              {items.filter(item => item.status === "Lost").length}
            </h2>
            <p>Lost Items</p>
          </div>

          <div className="stat-card">
            <h2>
              {items.filter(item => item.status === "Found").length}
            </h2>
            <p>Found Items</p>
          </div>

        </div>

        <table>

          <thead>

            <tr>
              <th>Item</th>
              <th>Status</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {items.map(item => (

              <tr key={item.id}>

                <td>{item.title}</td>

                <td>{item.status}</td>

                <td>{item.location}</td>

                <td>

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;