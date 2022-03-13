FROM alpine:3.14
WORKDIR /usr/bin/app/
COPY bin/backend .
#RUN ./backend
EXPOSE 8080