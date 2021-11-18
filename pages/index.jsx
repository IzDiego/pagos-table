import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {headers} from "./utils/headers";
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
    () => headers,[]
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
      height: 3.5rem;
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
  .myButton {
    box-shadow: 3px 4px 0px 0px #1564ad;
    background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
    background-color:#79bbff;
    border-radius:5px;
    border:1px solid #337bc4;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:17px;
    font-weight:bold;
    padding:12px 44px;
    text-decoration:none;
    text-shadow:0px 1px 0px #528ecc;
  }
  .myButton:hover {
    background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
    background-color:#378de5;
  }
  .myButton:active {
    position:relative;
    top:1px;
  }
`;
