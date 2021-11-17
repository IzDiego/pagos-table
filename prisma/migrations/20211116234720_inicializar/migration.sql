-- CreateTable
CREATE TABLE `Pagos` (
    `id` INTEGER NOT NULL,
    `fecha` DATETIME NOT NULL,
    `forma` INTEGER NOT NULL,
    `forma_pago_nombre` VARCHAR(255) NOT NULL,
    `receptor` INTEGER NOT NULL,
    `receptor_nombre` VARCHAR(255) NOT NULL,
    `monto` INTEGER NOT NULL,
    `monto_recibido` INTEGER NOT NULL,
    `num_operacion` VARCHAR(255) NOT NULL,
    `cuenta_bancaria_movimiento` INTEGER NOT NULL,
    `cuenta_bancaria_movimiento_nombre` VARCHAR(255) NOT NULL,
    `status_pago` INTEGER NOT NULL,
    `status_pago_nombre` VARCHAR(255) NOT NULL,
    `comprobante_pagado` VARCHAR(255) NOT NULL,
    `empresa` INTEGER NOT NULL,
    `empresa_nombre` VARCHAR(255) NOT NULL,
    `fecha_qn` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
