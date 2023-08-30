# FROM node:slim
# ENV db_url="mongodb://127.0.0.1:27017/products"
# WORKDIR /app
# COPY . .
# RUN npm install
# EXPOSE 3000
# CMD ["node", "server.js"]
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install  
COPY . .
CMD ["node", "server.js"]
