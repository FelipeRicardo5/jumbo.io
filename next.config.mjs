/** @type {import('next').NextConfig} */
const nextConfig = {};

import nextPWA from 'next-pwa';

// const nextConfig = nextPWA({
//     pwa: {
//       dest: 'public', // Destino do service worker (será gerado na pasta public)
//       disable: process.env.NODE_ENV === 'development',
//     },
//   });

export default nextConfig;
