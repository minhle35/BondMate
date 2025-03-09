FROM node:18-alpine

# App directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./
COPY . .

RUN npm install -g pnpm
RUN pnpm install 

EXPOSE 3000


#Start the app using
CMD ["pnpm", "start"]


