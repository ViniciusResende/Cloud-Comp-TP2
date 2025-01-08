# Use an official Python runtime as a base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Installs git to download updated dataset
RUN apt-get update && apt-get install -y git && apt-get clean

# Copy the rest of the application code into the container
COPY . .

# Command to run the application
CMD ["sh", "setup.sh"]
