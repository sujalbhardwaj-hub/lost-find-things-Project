import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/form.css";

function Lost() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Lost Item Report Submitted!");
  };

  return (
    <>
      <Navbar />

      <div className="form-container">

        <h2>Report Lost Item</h2>

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
            <label>Location Lost</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Date Lost</label>
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

export default Lost;