# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy backend
COPY backend ./backend

# Copy frontend
COPY dashboard ./dashboard

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Install frontend dependencies and build
WORKDIR /app/dashboard
RUN npm install
RUN npm run build

# Install serve to serve React build
RUN npm install -g serve

# Expose ports
EXPOSE 5000 3000

# Start both backend and frontend using concurrently
WORKDIR /app
RUN npm install -g concurrently

# Create a command to run both servers
CMD ["concurrently", "npm --prefix backend start", "serve -s dashboard/build -l 3000"]

