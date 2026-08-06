import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')]
  }
};

export default nextConfig;
