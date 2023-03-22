###################
# BUILD FOR PRODUCTION
###################
FROM node:18-alpine as build-stage
WORKDIR /app

COPY package.json ./
COPY apps/backend/package.json apps/backend/
#COPY libs/dto/package.json libs/dto/
RUN npm install

COPY tsconfig.json .
COPY apps/backend apps/backend
#COPY libs libs

RUN npm run build -w @root/backend


###################
# PRODUCTION
###################
FROM node:18-alpine as production-stage

ENV NODE_ENV production
COPY --from=build-stage /app/node_modules ./node_modules
COPY --from=build-stage /app/apps/backend/node_modules ./node_modules
COPY --from=build-stage /app/apps/backend/dist ./dist

EXPOSE 3000
CMD [ "node", "dist/main" ]