import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fitformotion.app',
  appName: 'fitformotion-native',
  webDir: 'out',
  server: {
    url: 'http://localhost:3000',
    cleartext: true
  }
};

export default config;
