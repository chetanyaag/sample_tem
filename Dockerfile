# Use an official Node.js runtime as the parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install create-next-app globally
# RUN npm init -y
# COPY . .
# RUN npx create-next-app . --use-npm --example "https://github.com/vercel/next-learn/tree/main/basics/learn-starter"
COPY . .
RUN npm install
# RUN rm -r package-lock.json
# Create a new Next.js app inside the container
# RUN npx create-next-app my-next-app

# Set the working directory to the new app
# WORKDIR /usr/src/app/my-next-app

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Define the command to start your Next.js app
CMD ["npm", "run", "dev"]
