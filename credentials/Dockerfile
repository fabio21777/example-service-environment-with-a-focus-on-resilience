FROM openjdk
WORKDIR /app
EXPOSE 8000
COPY target/credentials-0.0.1-SNAPSHOT.jar /app/credentials-app.jar
ENTRYPOINT [ "java", "-jar", "credentials-app.jar" ]