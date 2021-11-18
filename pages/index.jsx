import React from "react";
import { useState } from "react";
import styled from "styled-components";
import headers from "./utils/headers";
import PagosTable from "./components/pagosTable";
import usePagos from "./hooks/usePagos";

export default function Home() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const skips = (page - 1) * perPage;
  console.log("page=" + page + " perPage=" + perPage + " skips=" + skips);
  const { data, isLoading, error, isSuccess } = usePagos(skips, perPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lista = data ?? [];
  const pagos = lista.misDatos;
  const contador = lista.contador;

  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "Fecha",
        accessor: "fecha_qn",
      },
      {
        Header: "Num Operación",
        accessor: "num_operacion",
      },
      {
        Header: "Empresa",
        accessor: "empresa_nombre",
      },
      {
        Header: "Receptor",
        accessor: "receptor_nombre",
      },
      {
        Header: "Monto",
        accessor: "monto",
      },
      {
        Header: "Monto Recibido",
        accessor: "monto_recibido ",
      },
      {
        Header: "Movimiento",
        accessor: "cuenta_bancaria_movimiento_nombre",
      },
      {
        Header: "Status del pago",
        accessor: "status_pago_nombre",
      },
    ],
    []
  );

  const pagosMemo = React.useMemo(() => pagos, [pagos]);
  if (error) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isSuccess){
    return (
      <Styles>
        <PagosTable 
        data={pagosMemo}
        columns={columns}
        setPage={setPage}
        setPerPage={setPerPage}
        currentpage={page}
        perPage={perPage}
        totalPage={contador}
        skip={skips}
        />
      </Styles>
    );
  }
  
}

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;
