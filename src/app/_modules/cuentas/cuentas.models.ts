export interface TipoCuenta {
    id: string;
    nombre: string;
    allowTarjetaDebito: boolean;
    allowTarjetaCredito: boolean;
    deuda: boolean;
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
    capital: number;
    fechaAlta: Date;
    tipoCuenta: TipoCuenta;
    mediosPago: Array<MedioPago>;
}

export interface MedioPago {
    id: string;
    uid: string;
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