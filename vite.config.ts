import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//配置路径
import * as path from 'path';
//按需引入El
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
//按需引入icon
import PurgeIcons from 'vite-plugin-purge-icons';

const resolve = (p: string) => {
  return path.resolve(__dirname, p);
};
// https://vitejs.dev/config/
export default defineConfig({
  //@路径
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  plugins: [
    vue(),
    //按需加载EL和Icon
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    PurgeIcons({
      /* PurgeIcons Options */
      content: [
        '**/*.html',
        '**/*.js',
        '**/*.vue', // scan for .vue file as well
      ],
    }),
  ],
});
