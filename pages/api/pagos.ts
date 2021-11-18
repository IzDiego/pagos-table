import { prisma } from "../../lib/prisma";

export default async function handle(req, res) {
  try {
    const { take, skip } = req.query;
    const takeInt = parseInt(take);
    const skipInt = parseInt(skip);
    const misDatos = await prisma.pagos.findMany({
      select: {
        id: true,
        fecha_qn: true,
        num_operacion: true,
        empresa_nombre: true,
        receptor_nombre: true,
        monto: true,
        monto_recibido: true,
        cuenta_bancaria_movimiento_nombre: true,
        status_pago_nombre: true,
      },
      skip: skipInt,
      take: takeInt,
    });
    const contador = await prisma.pagos.count();
    const resArray = {misDatos, contador};
    res.json(resArray);
  } catch (error) {
    res.status(400).json({ error });
  }
}
