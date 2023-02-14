### Stage 1: Build ###
FROM node:18.14-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm set strict-ssl false && npm install -g npm@9.4.2 && npm install
COPY . .
RUN npm run build

### Stage 2: Run ###
FROM nginx:1.17.1-alpine AS prod-stage
COPY --from=build /app/dist/frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]