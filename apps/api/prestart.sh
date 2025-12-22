#! /usr/bin/env bash

# Let the DB start
echo "Waiting for database connection..."
while ! nc -z db 5432; do
  sleep 0.1
done
echo "Database started"

# Run migrations (Optional if create_all handles it, but good practice)
# alembic upgrade head

# Run Data Seeder
echo "Running Initial Data Seeding..."
python -m app.initial_data

# Start Application
echo "Starting Uvicorn..."
exec "$@"