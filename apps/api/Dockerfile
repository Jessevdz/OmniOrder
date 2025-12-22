FROM python:3.11-slim

WORKDIR /app

# Install system dependencies (netcat is required for prestart.sh)
RUN apt-get update && apt-get install -y netcat-openbsd gcc libpq-dev && rm -rf /var/lib/apt/lists/*

# Install python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Make prestart executable
COPY prestart.sh /prestart.sh
RUN chmod +x /prestart.sh

# Use prestart script as entrypoint, then run the command
ENTRYPOINT ["/prestart.sh"]
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]