import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./components/lab1/Hello.tsx";
import StockTable from "./components/lab1/StockTable.tsx";
import ChessBoard from "./components/lab1/ChessBoard.tsx";
import Clock from "./components/lab2/Clock.tsx";
import JobMenu from "./components/lab2/JobMenu.tsx";
import Phone from "./components/lab3/Phone.tsx";
import { Product } from "./components/lab3/Product.ts";
import SortTable from "./components/lab3/SortTable.tsx";
import Calendar from "./components/lab4/Calendar.tsx";
import SignUpForm from "./components/lab5/SignUpForm.tsx";
import StudentInfo from "./components/lab6/StudentInfo.tsx";
import Notes from "./components/lab6/Notes.tsx";

const products: Product[] = [
  { id: 1, name: "Товар 1", price: 10, quantity: 5 },
  { id: 2, name: "Товар 2", price: 20, quantity: 0 },
  { id: 3, name: "Товар 3", price: 15, quantity: 2 },
  { id: 4, name: "Товар 4", price: 5, quantity: 10 },
];

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

    <h1>LAB3:</h1>
    <div style={{ width: `calc(100% / 5)` }}>
      <Phone />
    </div>
    <SortTable data={products} />

    <h1>LAB4:</h1>
    <Calendar />

    <h1>LAB5:</h1>
    <div style={{ width: `calc(100% / 5)` }}>
      <SignUpForm />
    </div>

    <h1>LAB6:</h1>
    <StudentInfo />
    <div style={{ width: `calc(100% / 5)`, marginTop: "20px" }}>
      <Notes />
    </div>
  </React.StrictMode>
);
