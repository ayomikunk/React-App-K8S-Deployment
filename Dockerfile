FROM node:18-alpine
WORKDIR /task-tracker/
COPY public/ /task-tracker/public
COPY src /task-tracker/src
COPY package.json /task-tracker/
EXPOSE 3000
RUN npm install
CMD ["npm", "start"]