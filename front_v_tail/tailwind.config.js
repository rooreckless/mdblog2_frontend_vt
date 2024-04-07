/** @type {import('tailwindcss').Config} */
export default {
  //↓のcontentの内容は、tailwindcssを使っているhtmlファイルやvueファイルなどが含まれるようにしないといけない。
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'selector',
  // ↓もともとのthemeオプション
  // theme: {
  //   extend: {},
  // },
  
  // ↓今回のフォントを追加するためのthemeオプション
  theme: {
    extend: {
      fontFamily: {
        // cssのfont-family「UDEV」を「font-udev」というクラス名で使えるようにする
        udev: ["UDEV"],
      },
    },
  },
  plugins: [],
}

