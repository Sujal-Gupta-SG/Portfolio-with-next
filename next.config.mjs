/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(js|mjs)$/,
        include: /node_modules/,
        exclude: /(three|react-reconciler)/,
        use: {
          loader: "babel-loader",
          options: {
            compact: true,
          },
        },
      });
    }
    return config;
  },
  images: {
    domains: [
      'github-readme-stats.vercel.app', // Add the first domain
      'skillicons.dev',
      'github-readme-streak-stats.herokuapp.com' // Add the second domain
    ],
  },
};

export default nextConfig;
