import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Omeal Driver App',
    short_name: 'Omeal Driver',
    description: 'Progressive Web App for Omeal delivery drivers',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#10b981',
    orientation: 'portrait',
    icons: [
      {
        src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%2310b981' viewBox='0 0 256 256'%3E%3Cpath d='M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a16,16,0,0,0-16-16H24A16,16,0,0,0,8,64V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32,32,0,0,0-62,0H103a32,32,0,0,0-62,0H24V64H168v8a16,16,0,0,0,16,16h48Z'/%3E%3C/svg%3E",
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' fill='%2310b981' viewBox='0 0 256 256'%3E%3Cpath d='M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a16,16,0,0,0-16-16H24A16,16,0,0,0,8,64V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32,32,0,0,0-62,0H103a32,32,0,0,0-62,0H24V64H168v8a16,16,0,0,0,16,16h48Z'/%3E%3C/svg%3E",
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  }
}
