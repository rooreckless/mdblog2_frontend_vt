# FROM node:20.11.1-bullseye
FROM node:21.7.0-bullseye-slim
#bullseyeで採用のパッケージ管理ソフトをupdate
RUN apt-get update && apt-get upgrade -y
ENV TZ=Asia/Tokyo
#Vite開発サーバーはデフォルトでは5173で受け付けるのでこれに対応
EXPOSE 5173
#作業ディレクトリを指定し、カレントディレクトリをここに移動
WORKDIR /usr/src/app

#package.jsonにvue-router@4とpiniaをいれる
# RUN npm install vue-router@4
# RUN npm install pinia
#一度もnpm installを実行していないので実施
# RUN npm install