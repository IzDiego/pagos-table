import { prisma } from "../../lib/prisma";

export default async function handle(req, res) {
  const { cuenta } = req.query;
  try {
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
        cuenta_bancaria_movimiento: true,
      },
      where: {
        cuenta_bancaria_movimiento_nombre: {
          contains: cuenta,
        },        
      },
      distinct: ['cuenta_bancaria_movimiento_nombre'],
    });
    //console.log(misDatos)
    res.json({ misDatos });
  } catch (error) {
    res.status(400).json({ error });
  }
}
