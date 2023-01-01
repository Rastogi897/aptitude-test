FROM node:16-alpine

# create an app directory and use it as working directory
RUN mkdir -p /examdumps
WORKDIR /examdumps

# setting up directory for node_modules to bin path so that containers folder can be used
ENV PATH /examdumps/node_modules/.bin:$PATH

COPY package.json /teemp/package.json

RUN apk add --no-cache --virtual .gyp

RUN apk add --no-cache --virtual python

RUN apk add --no-cache --virtual make

RUN apk add --no-cache --virtual g++

RUN apk add --no-cache autoconf automake

RUN apk add --no-cache nasm pkgconfig libtool build-base zlib-dev

RUN npm config set unsafe-perm true
RUN cd /teemp && npm install        

RUN npm install pm2@latest -g
RUN npm install db-migrate -g
RUN npm install cross-env -g

COPY . /examdumps
RUN cp -a /teemp/node_modules /examdumps/node_modules

RUN npm run build:css

# allow port 3006 to be publicly available
EXPOSE 7200

# run command
CMD pm2 start pm2.json && tail -f /dev/null