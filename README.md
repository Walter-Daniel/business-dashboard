# 🌟 **Dashboard Empresarial** 🌟

¡Bienvenido al **Dashboard Empresarial**! Este proyecto es una aplicación web diseñada para gestionar y visualizar datos empresariales con una interfaz intuitiva y atractiva. Utiliza Next.js para la creación de la aplicación, Clerk para la autenticación, Recharts para gráficos, FullCalendar para la gestión de calendarios, y muchas otras herramientas.

## 🚀 **Características del Proyecto**

- **Next.js 14**: Framework para aplicaciones React.
- **Clerk**: Gestión de autenticación y autorización de usuarios.
- **FullCalendar**: Solución completa de calendario y eventos.
- **React Hook Form**: Manejo avanzado de formularios.
- **Prisma**: ORM para gestionar la base de datos.
- **Recharts**: Biblioteca para la creación de gráficos interactivos.
- **Radix UI**: Componentes accesibles y personalizados.

## 🛠️ **Scripts Disponibles**

En el directorio del proyecto, puedes ejecutar:

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run start`: Inicia el servidor en modo producción.
- `npm run lint`: Verifica el código para asegurar calidad y consistencia.

## 📦 **Dependencias Principales**

- **@clerk/nextjs**: Autenticación y autorización.
- **@fullcalendar/core**: Motor principal de FullCalendar.
- **@radix-ui/react-accordion**: Componente accesible de acordeón.
- **@tanstack/react-table**: Librería para manejar tablas.
- **recharts**: Gráficos interactivos.
- **tailwindcss**: Framework de utilidades CSS para un diseño rápido.

## 📂 **Rutas y Middleware**

Este proyecto usa middleware de Clerk para proteger rutas privadas:

```javascript
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/api/uploadthing'])

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
```

## 🔑 **Variables de Entorno**

Asegúrate de configurar las siguientes variables de entorno en un archivo `.env` en la raíz del proyecto:

```bash
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# UploadThing Keys
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# Database URL
DATABASE_URL=

# API URL
NEXT_PUBLIC_API_URL=
```

## 💬 Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de walterdcarrizo.19@gmail.com.
