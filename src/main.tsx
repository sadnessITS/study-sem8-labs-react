import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./Hello.tsx";
import StockTable from "./StockTable.tsx";
import ChessBoard from "./ChessBoard.tsx";
import Clock from "./Clock.tsx";
import JobMenu from "./JobMenu.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h1>LAB1:</h1>
    <Hello />
    <StockTable />
    <ChessBoard />

    <h1>LAB2:</h1>
    <Clock format="24" timezone="+3:00" />
    <Clock format="12" timezone="-5:00" />
    <Clock format="12" timezone="+5:30" />
    <Clock format="12" />
    <Clock timezone="+5:30" />

    <JobMenu />
  </React.StrictMode>
);
