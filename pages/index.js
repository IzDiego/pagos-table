import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const columns = React.useMemo(
    () => [
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
        Header: "Status del pago",
        accessor: "status_pago_nombre"
      }
    ],
    []
  );
  
  return (
    
  )
}
