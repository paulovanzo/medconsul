FROM openjdk:17-alpine as dev
RUN mkdir /srv/app
COPY . /srv/app
RUN apk add --no-cache curl tar bash procps maven
WORKDIR /srv/app
RUN mvn clean install && ./mvnw clean install && mvn sprin-boot:run

FROM openjdk:17-alpine as builder
RUN mkdir /srv/app
COPY . /srv/app
RUN apk add --no-cache curl tar bash procps maven
WORKDIR /srv/app
RUN mvn clean install && ./mvnw clean install

FROM openjdk:17-alpine as app
RUN mkdir /srv/app
ENV JAR_FILE=target/*.jar
COPY --from=builder /srv/app/${JAR_FILE} /srv/app/app.jar
RUN addgroup -S spring && adduser -S medconsul -G spring
USER medconsul:spring
WORKDIR /srv/app
ENTRYPOINT ["java","-jar","app.jar"]