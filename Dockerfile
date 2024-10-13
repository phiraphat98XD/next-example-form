# Use an official Node.js runtime as a parent image
FROM node:18 AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Development Stage
FROM base AS development
ENV NODE_ENV=development
# Install all dependencies (including devDependencies)
RUN npm install
# Copy the rest of your application code
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production Stage
FROM base AS production
ENV NODE_ENV=production
# Install only production dependencies
RUN npm install --omit=dev
# Copy the rest of your application code
COPY . .
# Build the application
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]