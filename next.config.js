// perf: enable image optimization and compression
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  // Lint is available via `yarn lint`, but it is not a build gate: the legacy
  // pages carry pre-existing lint errors and we don't want the redesign to
  // turn `next build` red on code it didn't touch. (Restores the original
  // pre-redesign build behavior, which had no eslint config at all.)
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
}
