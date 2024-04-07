import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'   

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //以下のserverを追加
  // 開発サーバー起動+待ち受けるポート+ホットリロード設定
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  // resolve: {                                // ・・・・追加
  //   alias: {                                // ・・・・追加
  //     '@': path.resolve(__dirname, '/src') // ・・・・追加
  //     // '@': '/src' // ・・・・追加
  //   }                                       // ・・・・追加
  // },
})
