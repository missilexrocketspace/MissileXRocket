import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')]
  }
};

export default nextConfig;
