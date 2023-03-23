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
COPY --from=build-stage /app/apps/frontend/docker/nginx.conf    /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/apps/frontend/docker/expires.conf  /etc/nginx/conf.d/expires.conf
COPY --from=build-stage /app/apps/frontend/docker/entrypoint.sh /usr/local/bin/entrypoint.sh
COPY --from=build-stage /app/apps/frontend/dist                 /usr/share/nginx/html
RUN chmod +x /usr/local/bin/entrypoint.sh

# Set default variables
ENV DEFAULT_NGINX_BACKEND_HOST=http://backend:3000

EXPOSE 80
ENTRYPOINT ["sh", "/usr/local/bin/entrypoint.sh"]