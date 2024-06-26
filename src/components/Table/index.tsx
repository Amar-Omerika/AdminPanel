import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
const columns1: GridColDef[] = [
  { field: "id", headerName: "OrderID", width: 70 },
  { field: "orderName", headerName: "Order name", width: 130 },
  { field: "amount", headerName: "Amount", width: 130 },
  {
    field: "date",
    headerName: "Date",
    type: "string",
    width: 120,
  },
];

const rows1 = [
  { id: 1, orderName: "1x Phone case", amount: "20$", date: "22.02.2023" },
  { id: 2, orderName: "4x Phone case", amount: "30$", date: "22.02.2023" },
  { id: 3, orderName: "2x Phone case", amount: "20$", date: "22.02.2023" },
  { id: 4, orderName: "2x Phone case", amount: "5$", date: "22.02.2023" },
  { id: 5, orderName: "1x Phone case", amount: "20$", date: "22.02.2023" },
  { id: 6, orderName: "3x Phone case", amount: "20$", date: "22.02.2023" },
  { id: 7, orderName: "1x Phone case", amount: "10$", date: "22.02.2023" },
];
interface Props {
  content: string;
}
export default function Table({ content }: Props) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      {content === "clients" ? (
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      ) : (
        <DataGrid
          rows={rows1}
          columns={columns1}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      )}
    </div>
  );
}
