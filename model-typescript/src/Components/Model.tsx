import { type Dispatch, type SetStateAction } from "react";

interface ModelProp {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Model = ({ isOpen, setIsOpen }: ModelProp) => {
  return (
    <div
      style={{
        height: "200px",
        width: "300px",
        border: "1px solid black",
        backgroundColor: "beige",
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0)" : "translateY(-30px)",
        transition: "all 0.5s ease",
        // pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      <button
        style={{
          padding: "5px",
          marginRight: "7px",
          backgroundColor: "red",
          color: "white",
        }}
        onClick={() => setIsOpen(false)}
      >
        X
      </button>

      <h1 style={{ marginLeft: "7px", marginTop: "10px" }}>
        hello every one
      </h1>
    </div>
  );
};

export default Model;