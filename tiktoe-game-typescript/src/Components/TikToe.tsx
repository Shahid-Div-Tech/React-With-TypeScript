import React, { useEffect, useState } from "react";

interface TikToeProps {
  tiktoe: string[];
  settiktoe: React.Dispatch<React.SetStateAction<string[]>>;
}

const TikToe = ({ tiktoe, settiktoe }: TikToeProps) => {
  const [select, setSelect] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [winner, setWinner] = useState<string>("");

  useEffect(() => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningPatterns) {
      if (
        tiktoe[a] !== "" &&
        tiktoe[a] === tiktoe[b] &&
        tiktoe[a] === tiktoe[c]
      ) {
        if (tiktoe[a] === select) {
          setWinner("User One Win The Match");
        } else {
          setWinner("User Two Win The Match");
        }
      }
    }
  }, [tiktoe, select]);

  return (
    <>
      <h1>{select}</h1>

      <button
        style={{
          padding: "5px",
          backgroundColor: "lightgray",
        }}
        onClick={() => {
          setSelect("X");
        }}
      >
        Select Sign User One X
      </button>

      <button
        style={{
          padding: "5px",
          backgroundColor: "lightgray",
          marginTop: "10px",
          marginLeft: "10px",
        }}
        onClick={() => {
          setSelect("O");
        }}
      >
        Select Sign User One O
      </button>

      {winner && <h1>{winner}</h1>}

      <br />

      <div
        style={{
          width: "190px",
          height: "190px",
          display: "flex",
          flexWrap: "wrap",
          border: "1px solid black",
          gap: "5px",
        }}
      >
        {tiktoe.map((item, index) => {
          return (
            <button
              key={index}
              style={{
                padding: "5px",
                width: "60px",
                height: "60px",
                backgroundColor: "lightgray",
              }}
              onClick={() => {
                if (tiktoe[index] !== "" || winner !== "" || select === "") {
                  return;
                }

                settiktoe((prev) => {
                  const newArray = [...prev];

                  if (count % 2 === 0) {
                    newArray[index] = select;
                  } else {
                    newArray[index] = select === "X" ? "O" : "X";
                  }

                  return newArray;
                });

                setCount((prev) => prev + 1);
              }}
            >
              {tiktoe[index]}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default TikToe;