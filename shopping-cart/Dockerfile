FROM openjdk
WORKDIR /app
EXPOSE 9000
COPY target/shopping-cart-0.0.1-SNAPSHOT.jar /app/shopping-cart-app.jar
ENTRYPOINT [ "java", "-jar", "shopping-cart-app.jar" ]