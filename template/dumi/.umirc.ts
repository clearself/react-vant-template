import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dumi',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  dynamicImport: {
    loading: '@/components/Loader'
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'react-vant',
        libraryDirectory: 'es',
        style: true,
      }
    ],
  ],
  // more config: https://d.umijs.org/config
});
