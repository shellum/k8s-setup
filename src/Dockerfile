from --platform=linux/arm64/v8 node:slim
workdir /app
run npm init -y
run npm install
copy . .
expose 3000
cmd ["node","index.js"]
