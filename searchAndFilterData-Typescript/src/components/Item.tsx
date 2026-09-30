import type { DataType } from "../items/data"

interface itemProps{
 item:DataType
}

const Item = ({item}:itemProps) => {
  return (
    <div
  style={{
    width: "280px",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    border: "1px solid #eee"
  }}
>
  <img
    src={item.imageUrl}
    alt="Chicken Biryani"
    style={{
      width: "100%",
      height: "190px",
      objectFit: "cover"
    }}
  />

  <div style={{ padding: "16px" }}>
    <h2
      style={{
        margin: "0 0 10px",
        fontSize: "20px",
        color: "#222"
      }}
    >
     {item.name}
    </h2>

    <p
      style={{
        margin: "6px 0",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#324f8c"
      }}
    >
      Rs:{item.price}
    </p>

    <p
      style={{
        margin: "6px 0",
        fontSize: "14px",
        color: "#666"
      }}
    >
      Stock: {item.stock}
    </p>

    <button
      style={{
        width: "100%",
        marginTop: "12px",
        padding: "10px",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#324f8c",
        color: "#fff",
        fontSize: "15px",
        cursor: "pointer"
      }}
    >
      Add to Cart
    </button>
  </div>
</div>
  )
}

export default Item