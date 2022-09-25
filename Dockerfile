FROM openjdk:17-alpine
RUN mkdir /srv/app
ARG JAR_FILE=target/*.jar
COPY ${JARFILE} /srv/app/app.jar
RUN addgroup -S spring && adduser -S medconsul -G spring
WORKDIR /srv/app
USER medconsul:spring
ENTRYPOINT ["java","-jar","/app.jar"]