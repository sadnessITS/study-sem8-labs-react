import React, { useState } from "react";
import TableItem from "./TableItem";
import { Product } from "./Product";

type SortDirection = "asc" | "desc";

interface TableColumn {
  label: string;
  field: keyof Product;
}

interface SortTableProps {
  data: Product[];
}

const SortTable: React.FC<SortTableProps> = ({ data }) => {
  const [sortColumn, setSortColumn] = useState<keyof Product | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const columns: TableColumn[] = [
    { label: "#", field: "id" },
    { label: "Название товара", field: "name" },
    { label: "Цена", field: "price" },
    { label: "Количество", field: "quantity" },
  ];

  const handleSort = (column: keyof Product) => {
    if (column === sortColumn) {
      // Если уже сортируется по этому столбцу, изменить направление сортировки
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Если выбран новый столбец для сортировки, установить направление сортировки по умолчанию
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = sortColumn
    ? [...data].sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (typeof aValue === "string" && typeof bValue === "string") {
          // Сортировка строк
          return sortDirection === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        } else {
          // Сортировка чисел
          return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
        }
      })
    : data;

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.field} onClick={() => handleSort(column.field)}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <TableItem key={item.id} item={item} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default SortTable;
