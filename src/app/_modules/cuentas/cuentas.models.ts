export interface TipoCuenta {
    id: string;
    nombre: string;
    allowTarjetaDebito: boolean;
    allowTarjetaCredito: boolean;
}

export interface Cuenta {
    id?: string;
    uid: string;
    nombre: string;
    capital: number;
    fechaAlta: Date;
    tipoCuenta?: TipoCuenta;
}

export interface CuentaRequest {
    nombre?: string;
    capital?: number;
    tipoCuentaId?: string;
}