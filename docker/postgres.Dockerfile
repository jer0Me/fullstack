FROM postgres:10.5

EXPOSE 5432

COPY postgres_extensions.sql /docker-entrypoint-initdb.d
