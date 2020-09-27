FROM node:12-alpine3.9

# Define the working directory
WORKDIR /usr/src/app
# copy package.json and package-lock.json files to working directory
COPY package*.json ./

# install production dependencies
RUN yarn install --prod
# copy source code
COPY . .

# expose port 888
EXPOSE 	8888

CMD ["yarn", "run", "build"]
CMD ["rimraf", "./src"]

# define the command to run
CMD ["node", "build/server.js"]