import type { NextConfig } from "next";

const withTM = require('next-transpile-modules')([
  '@ionic/react',
  '@ionic/core',
  '@stencil/core',
  'ionicons',
]);

const nextConfig: NextConfig = {
  output: 'export',
};

export default withTM(nextConfig);
