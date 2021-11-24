FROM openjdk
WORKDIR /app
EXPOSE 6010
COPY target/showcase-0.0.1-SNAPSHOT.jar /app/showcase-app.jar
ENTRYPOINT [ "java", "-jar", "showcase-app.jar" ]