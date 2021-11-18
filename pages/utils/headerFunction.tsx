/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export function cambiaStatus() {
  const [status, setStatus] = useState("Tenemos el dinero");

  const CambiarStatus = (e) => {
    setStatus(e.target.value);
  };
  return (<>
    <p>Status</p>
    <select value={status} onChange={CambiarStatus}>
      <option value="Tenemos el dinero">Tenemos el dinero</option>
      <option value="Salvo buen cobro">Salvo buen cobro</option>
      <option value="Tenemos documento">Tenemos documento</option>
      <option value="Tenemos promesa de pago">
        Tenemos promesa de pago
      </option>
      <option value="Ejercimos garantia">Ejercimos garantia</option>
      <option value="Cancelado">Cancelado</option>
    </select>
  </>
  );
}
