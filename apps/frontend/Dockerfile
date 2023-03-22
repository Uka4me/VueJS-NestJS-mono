###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine as build-stage
WORKDIR /app

COPY package.json ./
COPY apps/frontend/package.json apps/frontend/
#COPY libs/dto/package.json libs/dto/
RUN npm install

COPY tsconfig.json .
COPY apps/frontend apps/frontend
#COPY libs libs

RUN npm run build -w @root/frontend


###################
# PRODUCTION
###################

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/apps/frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]