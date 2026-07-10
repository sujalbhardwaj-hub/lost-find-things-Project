import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/form.css";
import API from "../services/api";

function Found() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const item = {
        tittle: "Wallet",
        description: "Brown Wallet",
        category: "Wallet",
        location: "Library",
        date: "2026-07-04",
        contact: "6395564103",
        status: "Found",
    };
    try{
        await API.post("/items", item);
        alert("Found Item Submitted Successfully!");
    }catch(error){
        alert("Foound Item Submitted Successfully!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="form-container">

        <h2>Report Found Item</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Item Name</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea rows="4" required></textarea>
          </div>

          <div className="form-group">
            <label>Category</label>

            <select required>
              <option>Mobile</option>
              <option>Wallet</option>
              <option>Bag</option>
              <option>ID Card</option>
              <option>Laptop</option>
              <option>Other</option>
            </select>

          </div>

          <div className="form-group">
            <label>Location Found</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Date Found</label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>Upload Image</label>
            <input type="file" />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input type="tel" required />
          </div>

          <button className="submit-btn">
            Submit Report
          </button>

        </form>

      </div>

      <Footer />
    </>
  );
}

export default Found;