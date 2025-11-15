/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./lib/i18n/config.ts');

const nextConfig = {
  output: 'export',
  basePath: '/andong-esg-beauty',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
