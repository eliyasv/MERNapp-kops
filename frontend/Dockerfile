# -------- Build Stage --------
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# -------- Serve Stage --------
FROM node:20-alpine

# Install a simple static file server
RUN npm install -g serve

WORKDIR /app
COPY --from=builder /app/build ./build

EXPOSE 80
CMD ["serve", "-s", "build", "-l", "80"]
