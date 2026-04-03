# Stage 1: Build the application
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build site
COPY . .
RUN npm run build

# Stage 2: Serve the application with NGINX
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output from stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 8080 (Cloud Run default)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
