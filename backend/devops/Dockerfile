FROM openjdk:17-alpine
RUN mkdir /srv/app
ARG JAR_FILE
COPY ${JAR_FILE} /srv/app/app.jar
RUN addgroup -S spring && adduser -S medconsul -G spring
USER medconsul:spring
WORKDIR /srv/app
ENTRYPOINT ["java","-jar","app.jar"]