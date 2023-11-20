# Use an official Node.js runtime as a parent image
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application code to the container
COPY . .

# Build the React app
RUN npm run build

# Use a smaller base image for the runtime environment
FROM nginx:alpine

# Copy the built React app from the build container to the nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Default command to run the NGINX server
CMD ["nginx", "-g", "daemon off;"]
