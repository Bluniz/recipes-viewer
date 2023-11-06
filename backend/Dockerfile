FROM postgres
ENV POSTGRES_DB recipes_db
ENV POSTGRES_PASSWORD root

COPY ./src/database/schema.sql /docker-entrypoint-initdb.d/
