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
};

export default nextConfig;
