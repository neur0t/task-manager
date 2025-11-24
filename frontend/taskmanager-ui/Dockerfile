# ====== BUILD STAGE ======
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build Angular in browser (static) mode
RUN npm run build

# ====== RUNTIME STAGE ======
FROM nginx:alpine

# Clean default HTML files
RUN rm -rf /usr/share/nginx/html/*

# Copy browser build output
COPY --from=build /app/dist/taskmanager-ui/browser /usr/share/nginx/html

# Add nginx config for Angular SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
