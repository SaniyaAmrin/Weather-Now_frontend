# Build stage: build the frontend assets
FROM node:lts-alpine3.20 AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy all frontend source code and build
COPY . .
RUN npm run build

# Production stage: serve built files with nginx
FROM nginx:1.29.1-alpine

# Upgrade Alpine packages to reduce vulnerabilities
RUN apk update && apk upgrade -q

# Copy built frontend files from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
