FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY webapp/ .
RUN chmod -R 755 /usr/share/nginx/html
EXPOSE 80
CMD["nginx", "-g", "daemon off;"]