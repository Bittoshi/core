FROM node:18
WORKDIR /app
ARG DB_USER
ARG DB_PASSWORD
ARG DB_NAME
SHELL ["bash", "-c"]

COPY package*.json ./

RUN npm install --global pnpm \
    && SHELL=bash pnpm setup \
    && source /root/.bashrc

RUN pnpm install --silent

COPY . ./

ENV SHELL=bash
ENV PORT=3010
ENV NODE_ENV=production
ENV DATABASE_URL=postgres://$DB_USER:DB_PASSWORD@$DB_NAME:5432/postgres

RUN ls -l && sleep 5
RUN pnpm run build

EXPOSE 3010

CMD ["npm", "start"]