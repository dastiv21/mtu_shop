FROM node:18-alpine

# Installing Yarn globally
RUN npm -v


# Creating the working directory named `app`
WORKDIR /app

# Copying all the tools and dependencies in the package.json and yarn.lock files to the working directory `app`
COPY package.json yarn.lock ./

# Installing all the tools and dependencies in the container using Yarn
RUN yarn install

# Copying all the application source code and files to the working directory `app`
COPY . .

# Exposing the container to run on this port 3000
EXPOSE 3000

RUN yarn build

# Command to start the Docker container for the frontend React.js application using Yarn
CMD ["yarn", "dev"]
