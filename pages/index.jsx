import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { headers } from "../lib/utils/headers";
import PagosTable from "./components/PagosTable";
import usePagos from "./hooks/usePagos";
import CuentaBancaria from "./components/CuentaBancaria"

export default function Home() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const skips = (page - 1) * perPage;

  const { data, isLoading, error, isSuccess } = usePagos(skips, perPage);

  const lista = data ?? [];
  const pagos = lista.misDatos;
  const contador = lista.contador;

  const columns = React.useMemo(
    () => headers,[headers]
  );
  const pagosMemo = React.useMemo(() => pagos, [pagos]);

  if (error) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (isSuccess){
    return (
      <Styles>
        <CuentaBancaria/>
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
      height: 4.5rem;
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`
