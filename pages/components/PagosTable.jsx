/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { useTable, usePagination } from 'react-table';

export default function PagosTable({ skips, setPerPage, setPage, columns, data, currentpage, perPage, totalPage }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
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
      pageCount: (totalPage/perPage),
    },
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} className="table-fixed">
        <thead>
          {headerGroups.map((headerGroup) => (<tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>                  
                    {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="truncate p-1 border-b-2">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between bg-red-100 p-4">
        <button
          onClick={() => {
            setPage(1);
          }}
          disabled={currentpage === 1}
        >
          Primera
        </button>{' '}
        <button
          onClick={() => {
            setPage((s) => (s === 0 ? 0 : s - 1));
          }}
          disabled={currentpage === 1}
        >
          Anterior
        </button>{' '}
        <button
          onClick={() => {
            setPage((s) => s + 1);
          }}
          disabled={currentpage === (totalPage/perPage)}
        >
          Siguiente
        </button>{' '}
        <button
          onClick={() => {
            setPage((totalPage/perPage));
          }}
          disabled={currentpage === (totalPage/perPage)}
        >
          Ultima
        </button>{' '}
        <span>
          Pagina{' '}
          <strong>
            {pageIndex} de {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Ir a la pagina:{' '}
          <input
            type="number"
            defaultValue={pageIndex}
            min="1"
            max={totalPage}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) : 1;
              setPage(page);
            }}
            className="w-20 border-2 rounded px-2"
          />
        </span>{' '}
        <select
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
        </select>
      </div>
    </>
  );
}
