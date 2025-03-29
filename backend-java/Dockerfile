# Use the Amazon Corretto 21 base image
FROM amazoncorretto:21-al2023-jdk

# Install bash and coreutils with --allowerasing option to resolve conflicts
RUN yum update -y && yum install -y bash coreutils findutils --allowerasing

# Set the working directory
WORKDIR /

# Copy the .env file to the container
COPY .env /.env

# Use ADD to copy the JAR file to the container
ADD target/backend-java.jar /backend-java.jar

# Add an entrypoint script to load environment variables from the .env file
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Specify the command to run the application
ENTRYPOINT ["/entrypoint.sh"]
CMD ["java", "-jar", "/backend-java.jar"]