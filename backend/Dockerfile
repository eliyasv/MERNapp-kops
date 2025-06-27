# Use the official Node.js v20 image as the base image
FROM node:20

# Set the working directory inside the container to /app
WORKDIR /app

# Copy only package.json initially (for caching npm install layer)
COPY package.json .

# Install dependencies listed in package.json
RUN npm install

# Copy all remaining source code into the container
COPY . .

# Expose port 5000 (used by Express server)
EXPOSE 5000

# Command to start the backend server
CMD ["node", "server.js"]
