
FROM node

RUN npm install -g --silent nodal

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000
ENV DATABASE_HOST=db
ENV DATABASE_PORT=5432
ENV DATABASE_USER=nodal
ENV DATABASE_PASSWORD=nodal
ENV DATABASE_DB=server
ENV DATABASE_URL=postgres://nodal:nodal@db:5432/server

CMD ["nodal","db:bootstrap","&&","nodal","s"]
