/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { useTable, usePagination } from "react-table";

import {
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

export default function PagosTable({
  setPerPage,
  setPage,
  columns,
  data,
  currentpage,
  perPage,
  totalPage,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups = [],
    prepareRow,
    page = [],
    pageOptions = [],
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      useControlledState: (state) => {
        return React.useMemo(
          () => ({
            ...state,
            pageIndex: currentpage,
          }),
          [state, currentpage]
        );
      },
      initialState: { pageIndex: currentpage },
      manualPagination: true,
      pageCount: totalPage / perPage,
    },
    usePagination
  );

  return (
    <>
      <Table {...getTableProps()} className="table-fixed">
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell
                      {...cell.getCellProps()}
                      className="truncate p-1 border-b-2"
                    >
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <br></br>
      <div className="flex justify-between bg-red-100 p-4">
        <Button
          variant="contained"
          onClick={() => {
            setPage(1);
          }}
          disabled={currentpage === 1}
        >
          Primera
        </Button>{" "}
        <Button
          variant="contained"
          onClick={() => {
            setPage((s) => (s === 0 ? 0 : s - 1));
          }}
          disabled={currentpage === 1}
        >
          Anterior
        </Button>{" "}
        <Button
          variant="contained"
          onClick={() => {
            setPage((s) => s + 1);
          }}
          disabled={currentpage === totalPage / perPage}
        >
          Siguiente
        </Button>{" "}
        <Button
          variant="contained"
          onClick={() => {
            setPage(totalPage / perPage);
          }}
          disabled={currentpage === totalPage / perPage}
        >
          Ultima
        </Button>{" "}
        <span>
          Pagina{" "}
          <strong>
            {pageIndex} de {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Ir a la pagina:{" "}
          <TextField
            label="Estas en la pagina"
            id="standard-number"
            color="secondary"
            size="small"
            defaultValue={pageIndex}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) : 1;
              setPage(page);
            }}
            InputProps={{ inputProps: { max: totalPage / perPage, min: 1 } }}
          />
        </span>{" "}
        <span>
          <InputLabel id="demo-simple-select-label">Muestra</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={perPage}
            label="Cinco"
            onChange={(e) => {
              // setPageSize(Number(e.target.value));
              setPerPage(Number(e.target.value));
            }}
          >
            <MenuItem value={5}>Cinco</MenuItem>
            <MenuItem value={10}>Diez</MenuItem>
            <MenuItem value={20}>Veinte</MenuItem>
          </Select>
        </span>
        {/* <select
          value={perPage}
          onChange={(e) => {
            // setPageSize(Number(e.target.value));
            setPerPage(Number(e.target.value));
          }}
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select> */}{" "}
        de {totalPage} registros totales
      </div>
    </>
  );
}
