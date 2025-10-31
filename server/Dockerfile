# Stage 1: Build the JAR with Maven (no Maven installed locally required)
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /build

# Cache dependencies first
COPY pom.xml .
RUN mvn -B -q -e -DskipTests dependency:go-offline

# Copy sources and build
COPY src ./src
RUN mvn -B -DskipTests clean package

# Stage 2: Run the Spring Boot app
FROM eclipse-temurin:17-jre
WORKDIR /app

# Copy built JAR from builder stage
COPY --from=build /build/target/*.jar /app/app.jar

EXPOSE 8083
ENTRYPOINT ["java","-jar","/app/app.jar"]
 
