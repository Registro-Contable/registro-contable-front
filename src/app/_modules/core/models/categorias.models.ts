export interface SubCategoriaResponse {
    id: string;
    nombre: string;
    parentId: string;
}

export interface CategoriaResponse {
    id: string;
    uid: string;
    tipoMovimiento: string;
    nombre: string;
    subCategorias?: Array<SubCategoriaResponse>;
}

export interface SubCategoriaRequest {
    nombre: string;
}

export interface CategoriaRequest {
    tipoMovimiento?: string;
    nombre?: string;
}
