FROM alpine
WORKDIR /usr/bin/app/
COPY bin/backend .
RUN ./backend
EXPOSE 8080