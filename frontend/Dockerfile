# Use official Node.js 20 image as the base
FROM node:20

# Set working directory inside the container to /app
WORKDIR /app

# Copy only package.json and package-lock.json iitially (for caching npm install layer)
COPY package*.json ./

# Install dependencies listed in package.json
RUN npm install

# Copy the rest of the application source code into the container
COPY . .

# Expose port 3000 to the host (React dev server runs on 3000)
EXPOSE 3000

# Command to run the app when the container starts
CMD ["npm", "start"]
