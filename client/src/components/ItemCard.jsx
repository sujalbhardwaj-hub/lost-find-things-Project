import "../styles/card.css";

function ItemCard({ title, location, status, image }) {
  return (
    <div className="card">

      <img src={image} alt={title} />

      <div className="card-body">

        <h3>{title}</h3>

        <p>
          <strong>Location:</strong> {location}
        </p>

        <span className={status === "Lost" ? "lost" : "found"}>
          {status}
        </span>

        <button
           onClick={() =>
             alert(
                `Item: ${title}\nLocation: ${location}\nStatus: ${status}`
            )
           }
        >
         View Details
        </button>

      </div>

    </div>
  );
}

export default ItemCard;