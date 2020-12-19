export const environment = {
  production: true,
  api: {
    baseUrl: 'http://192.168.1.5:8080',
    api_client: 'test',
    api_secret: '12345',
    services_url: {
      auth_service: '/api/auth',
      cuentas_service: '/api/cuentas',
      categorias_service: '/api/categorias',
      movimientos_service: '/api/movimientos'
    }
  }
};