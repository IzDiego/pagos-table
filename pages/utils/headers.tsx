import React from "react";
import { cambiaStatus } from "./headerFunction";

export const headers = [
    {
      Header: "id",
      accessor: "id" // accessor is the "key" in the data
    },
    {
      Header: "Fecha",
      accessor: "fecha_qn"
    },
    {
      Header: "Num Operación",
      accessor: "num_operacion"
    },
    {
      Header: "Empresa",
      accessor: "empresa_nombre"
    },
    {
      Header: "Receptor",
      accessor: "receptor_nombre"
    },
    {
      Header: "Monto",
      accessor: "monto"
    },
    {
      Header: "Monto Recibido",
      accessor: "monto_recibido "
    },
    {
      Header: "Movimiento",
      accessor: "cuenta_bancaria_movimiento_nombre"
    },
    {
      Header: ()=> {
        return (
          cambiaStatus()
        );
      },
      accessor: "status_pago_nombre"
    }
  ]