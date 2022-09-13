FROM node:16-alpine3.11
WORKDIR ./domaindeploytest
ENV PORT 80
COPY . /domaindeploytest
RUN npm install
CMD ["npm", "run", "dev"]