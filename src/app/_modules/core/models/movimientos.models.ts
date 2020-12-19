export interface MovimientoRequest {
    fecha?: string;
    tipoMovimientoId?: string;
    categoriaId?: string;
    subCategoriaId?: string;
    cuentaId?: string;
    medioPagoId?: string;
    cantidad?: number;
    concepto?: string;
    nota?: string;
}

export interface MovimientoResponse {
    id: number;
    uid: string;
    fecha: string;
    tipoMovimientoId: string;
    categoria: CategoriaMovimientoResponse;
    cuenta: CuentaMovimientoResponse;
    cantidad: number;
    concepto?: string;
    nota?: string;
    isMovimientoContable: boolean;
    capitalAnterior: number;
    capitalPosterior: number;
}

export interface CategoriaMovimientoResponse {
    categoriaId: string;
    nombre: string;
    subCategoria?: SubCategoriaMovimientoResponse;
}

export interface SubCategoriaMovimientoResponse {
    subCategoriaId: string;
    parentId: string;
    nombre?: string;
}

export interface CuentaMovimientoResponse {
    cuentaId: string;
    nombre?: string;
    medioPago?: MedioPagoMovimientoResponse;
}

export interface MedioPagoMovimientoResponse {
    medioPagoId: string;
    nombre?: string;
}

export enum TipoMovimiento {
    INGRESO, GASTO, TRASPASO, AJUSTE_CAPITAL
}

export const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
export const DIA_SEMANA = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
