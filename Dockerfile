# Step 1: Set the Node.js version
FROM node:18-alpine as builder

# Step 2: Set working directory
WORKDIR /usr/src

# Step 3: Copy package json files
COPY package*.json ./

# Step 4: Install node modules
RUN yarn install --only=production

# Step 5: Copy all other source code to work directory
COPY . .

# Step 6: Build the application
RUN yarn run build

# Step 7: Remove development dependencies
RUN yarn prune --production

# Stage 2: Setup runtime environment
FROM node:18-alpine

# Step 8: Set working directory for the new stage
WORKDIR /usr/src

# Step 9: Copy from builder stage the node modules and build folders
COPY --from=builder /usr/src/node_modules ./node_modules
COPY --from=builder /usr/src/dist ./dist

# Step 10: Expose the port the app runs on
EXPOSE 3000

# Step 11: Define the command to run your app
CMD [ "node", "dist/src" ]
