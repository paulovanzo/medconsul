FROM openjdk:17-alpine as base
RUN mkdir /srv/app
COPY . /srv/app
RUN apk add --no-cache curl tar bash procps maven
WORKDIR /srv/app
RUN mvn clean install

FROM openjdk:17-alpine as app
RUN mkdir /srv/app
ENV JAR_FILE=target/*.jar
COPY --from=base /srv/app/${JAR_FILE} /srv/app/app.jar
RUN addgroup -S spring && adduser -S medconsul -G spring
USER medconsul:spring
WORKDIR /srv/app
ENTRYPOINT ["java","-jar","app.jar"]

FROM base as dev
COPY . /srv/app
WORKDIR /srv/app
ENTRYPOINT ["/bin/sh","-c", "mvn spring-boot:run"]