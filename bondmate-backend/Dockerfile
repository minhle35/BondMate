FROM node:18-alpine

# App directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./
COPY . .

RUN npm install -g pnpm
RUN pnpm install 

EXPOSE 5000

# Set environment variables
ENV PORT=5000
ENV NODE_ENV=development

#Start the app using
CMD ["npx","nodemon","--verbose", "server.js"]


