#!/bin/bash

# Load environment variables from .env file if it exists
if [ -f /.env ]; then
  export $(grep -v '^#' /.env | xargs -d '\n')
fi

# Run the Java application
exec java -jar /backend-java.jar