import { useQuery } from "react-query";

export default function useCuentas(cuenta) {
  const link = `http://localhost:3000/api/obtenerCuenta?cuenta=${cuenta}`;
  return useQuery(
    ["cuenta", link],
    async () => {
      const res = await fetch(link);
      return res.json();
    },
    { keepPreviousData: true }
  );
}