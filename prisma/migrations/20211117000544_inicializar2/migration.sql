/*
  Warnings:

  - The primary key for the `pagos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Pagos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `pagos` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `fecha` VARCHAR(255) NOT NULL,
    MODIFY `forma` VARCHAR(255) NOT NULL,
    MODIFY `receptor` VARCHAR(255) NOT NULL,
    MODIFY `monto` VARCHAR(255) NOT NULL,
    MODIFY `monto_recibido` VARCHAR(255) NOT NULL,
    MODIFY `cuenta_bancaria_movimiento` VARCHAR(255) NOT NULL,
    MODIFY `status_pago` VARCHAR(255) NOT NULL,
    MODIFY `empresa` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Pagos_id_key` ON `Pagos`(`id`);
