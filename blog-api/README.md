## Request

| Command                        | Description                                                                                                                                   |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| npm init -y                    | Crea un archivo package.json con la configuración básica:                                                                                     |
| npm install express cors       | express → crea el servidor web, cors → permite que tu frontend (por ejemplo, un HTML o React) haga peticiones al backend sin errores de CORS. |
| npm install --save-dev nodemon | Nodemon recarga automáticamente el servidor cuando guardas cambios (solo para desarrollo).                                                    |
| npm install mysql2             | Es para interactuar con bases de datos MySQL de manera eficiente                                                                              |
| npm install bcrypt             | bcrypt se utiliza para hash seguro de contraseñas                                                                                             |
| npm install dotenv             | Se utiliza para variables de entorno en el proyecto                                                                                           |
| npm install zod                | Brinda procesos y estructura de validación de datos                                                                                           |
| npm install json web token     | Se utiliza para procesos de autenticación por medio de tokens                                                                                 |

## Config

Configuración del package.json

```
"type": "module",
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
}
```
