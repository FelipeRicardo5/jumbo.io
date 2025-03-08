/** @type {import('next').NextConfig} */

import nextPWA from 'next-pwa';

const nextConfig = nextPWA({
    pwa: {
      dest: 'public', // Destino do service worker (será gerado na pasta public)
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
    },
  });

export default nextConfig;
