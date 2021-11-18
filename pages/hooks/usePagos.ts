import { useQuery } from "react-query";

export default function usePagos(skip, take) {
  const link = `http://localhost:3000/api/pagos?skip=${skip}&take=${take}`;
  return useQuery(
    ["pagos", link],
    async () => {
      const res = await fetch(link);      
      return res.json();
    },
    { keepPreviousData: true }
  );
}
