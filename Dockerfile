FROM node:16-alpine3.11

WORKDIR /home/ubuntu/domaindeploytest

ENV PORT 80

COPY . /home/ubuntu/domaindeploytest

RUN npm install

CMD ["npm", "run", "dev"]