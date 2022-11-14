# FROM node:16-alpine AS dependencies
# RUN apk add --no-cache libc6-compat
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm ci --only=production

# FROM node:16-alpine AS builder
# WORKDIR /app
# COPY . .
# COPY --from=depenencies /app/node_modules ./node_modules
# RUN npm run build

# FROM node:16-alpine AS runner
# WORKDIR /app

# ENV NODE_ENV production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# USER nextjs
# EXPOSE 3000

# CMD ["npm", "start"]

# ------------------------------------------------------------

FROM node:16-alpine
WORKDIR /app
ENV AWS_ACCESS_KEY_ID AKIA6IY5JT23TVVTJVIM
ENV AWS_SECRET_ACCESS_KEY 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
ENV AWS_DEFAULT_REGION ap-northeast-2
COPY . .
RUN npm ci --only=production
RUN npm run build
CMD ["npm", "start"]