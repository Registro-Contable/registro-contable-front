export interface TipoCuenta {
    id: string;
    nombre: string;
    deuda: boolean;
    tiposMedioPago: Array<TipoMedioPago>;
}

export interface TipoMedioPago {
    id: string;
    nombre: string;
    movimientoContable: boolean;
}

export interface Cuenta {
    id: string;
    uid: string;
    nombre: string;
    fechaAlta: Date;
    tipoCuenta: TipoCuenta;
    mediosPago: Array<MedioPago>;
    capitalCuenta?: CapitalCuenta;
}

export interface CapitalCuenta {
    cuentaId: string;
    uid: string;
    capital: number;
}

export interface MedioPago {
    id: string;
    uid: string;
    cuentaId: string;
    nombre: string;
    fechaAlta: Date;
    tipoMedioPago: TipoMedioPago;
}

export interface CuentaRequest {
    nombre?: string;
    capital?: number;
    tipoCuentaId?: string;
}

export interface MedioPagoRequest {
    tipoMedioPagoId?: string;
    nombre?: string;
}
