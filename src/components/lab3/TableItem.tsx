import React from "react";
import { Product } from "./Product";

interface TableItemProps {
  item: Product;
  index: number;
}

const TableItem: React.FC<TableItemProps> = ({ item, index }) => {
  const { name, price, quantity } = item;

  const rowStyle = {
    backgroundColor: quantity === 0 ? "red" : quantity < 3 ? "yellow" : "white",
  };

  return (
    <tr style={rowStyle}>
      <td>{index}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  );
};

export default TableItem;
