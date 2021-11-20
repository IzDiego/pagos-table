import { prisma } from "../../lib/prisma";

export default async function handle(req , res) {
    const { cuenta } = req.query;
    try{
    const misDatos = await prisma.pagos.findMany({
      
      select: {        
        cuenta_bancaria_movimiento_nombre: true
      },  
      where:{
          cuenta_bancaria_movimiento_nombre:{
            contains:cuenta,
          },
          
        },
      distinct: ['cuenta_bancaria_movimiento_nombre']
      })
      //console.log(misDatos)
      res.json(misDatos)
    }catch(error){
      res.status(400).json({error});
    }
  }