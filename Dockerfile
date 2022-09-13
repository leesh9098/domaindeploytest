FROM node:14.18.0
WORKDIR /domaindeploytest
ENV PORT 80
COPY . /domaindeploytest
RUN npm install
CMD ["npm", "run", "dev"]