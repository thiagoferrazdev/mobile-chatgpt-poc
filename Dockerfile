#FROM zffhuba1stiacr001.azurecr.io/zaffari/node-16 as deps
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN  npm install --production
#FROM zffhuba1stiacr001.azurecr.io/zaffari/node-16 as builder
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

#FROM zffhuba1stiacr001.azurecr.io/zaffari/node-16 AS runner
FROM node:16-alpine as runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
RUN chmod -R 755  ./.next


EXPOSE 8080

ENV PORT 8080

CMD ["npm", "start"]
