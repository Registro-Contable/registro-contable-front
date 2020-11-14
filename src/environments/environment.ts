// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    baseUrl: "http://192.168.1.5:8080",
    api_client: "test",
    api_secret: "12345",
    services_url: {
      auth_service: "/api/auth",
      cuentas_service: "/api/cuentas",
      categorias_service: "/api/categorias",
      movimientos_service: "/api/movimientos"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
