FROM node:16.18.0
WORKDIR /usr/src/clean-node-api
COPY package.json /usr/src/clean-node-api/
RUN npm set-script prepare '' && npm install --omit=dev
COPY dist dist
EXPOSE 5000
CMD npm run start