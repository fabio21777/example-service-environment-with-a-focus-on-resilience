FROM openjdk
WORKDIR /app
COPY target/order-0.0.1-SNAPSHOT.jar /app/order-app.jar
EXPOSE 7000
ENTRYPOINT [ "java", "-jar", "order-app.jar" ]