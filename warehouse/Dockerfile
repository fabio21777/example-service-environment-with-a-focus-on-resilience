FROM openjdk
WORKDIR /app
EXPOSE 5000
COPY target/warehouse-0.0.1-SNAPSHOT.jar /app/warehouse-app.jar
ENTRYPOINT [ "java", "-jar", "warehouse-app.jar" ]