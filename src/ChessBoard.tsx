import React from "react";
import "./styles/chess.css";

type ChessBoardProps = {};

const ChessBoard: React.FC<ChessBoardProps> = () => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const numbers = [8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <div className="chessboard">
      {/* Заголовок */}
      <div className="row">
        <div className="cell"></div>
        {letters.map((letter) => (
          <div className="cell" key={letter}>
            {letter}
          </div>
        ))}
      </div>

      {/* Клетки */}
      {numbers.map((number, rowIndex) => (
        <div className="row" key={number}>
          <div className="cell">{number}</div>
          {letters.map((letter, colIndex) => (
            <div
              className={`cell ${
                rowIndex % 2 === colIndex % 2 ? "white" : "black"
              }`}
              key={`${letter}${number}`}
            >
              {`${letter}${number}`}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
