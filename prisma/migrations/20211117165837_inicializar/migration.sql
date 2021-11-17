-- AlterTable
ALTER TABLE `pagos` MODIFY `fecha` VARCHAR(255) NULL,
    MODIFY `forma` VARCHAR(255) NULL,
    MODIFY `forma_pago_nombre` VARCHAR(255) NULL,
    MODIFY `receptor` VARCHAR(255) NULL,
    MODIFY `receptor_nombre` VARCHAR(255) NULL,
    MODIFY `monto` VARCHAR(255) NULL,
    MODIFY `monto_recibido` VARCHAR(255) NULL,
    MODIFY `num_operacion` VARCHAR(255) NULL,
    MODIFY `cuenta_bancaria_movimiento` VARCHAR(255) NULL,
    MODIFY `cuenta_bancaria_movimiento_nombre` VARCHAR(255) NULL,
    MODIFY `status_pago` VARCHAR(255) NULL,
    MODIFY `status_pago_nombre` VARCHAR(255) NULL,
    MODIFY `comprobante_pagado` VARCHAR(255) NULL,
    MODIFY `empresa` VARCHAR(255) NULL,
    MODIFY `empresa_nombre` VARCHAR(255) NULL,
    MODIFY `fecha_qn` VARCHAR(255) NULL,
    ADD PRIMARY KEY (`id`);
