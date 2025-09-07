FROM node:18

# Set working dir
WORKDIR /app

# Copy package.json และติดตั้ง dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Run backend
EXPOSE 3000
CMD ["npm", "start"]
