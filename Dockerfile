FROM node:lts-alpine
WORKDIR /app

RUN npm install -g pnpm

COPY . .
RUN pnpm install --frozen-lockfile && pnpm build

USER node
CMD [ "node", "build/index.js" ]

EXPOSE 3000
