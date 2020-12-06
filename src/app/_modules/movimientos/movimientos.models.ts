export interface MovimientoRequest {
    fecha?: string;
    tipoMovimientoId?: string;
    categoriaId?: string;
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
	categoriaId: string;
	cuentaId: string;
	medioPagoId: string;
	cantidad: number;
	concepto?: string;
    nota?: string;
    isMovimientoContable: boolean;
	capitalAnterior: number;
	capitalPosterior: number;
}

export enum TipoMovimiento {
    INGRESO, GASTO, TRASPASO, AJUSTE_CAPITAL
}

export const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];