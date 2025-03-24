FROM node:18-alpine

# App directory
WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install 

COPY . .

EXPOSE 3000

ENV VITE_API_URL=http://localhost:5000/api

#Start the app using
CMD ["pnpm", "run", "dev", "--host", "--port", "3000"]


