ARG IMAGE_REPO
FROM ${IMAGE_REPO:-amazeeio}/nginx

COPY . /app/