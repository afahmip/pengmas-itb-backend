VENV = source venv/bin/activate
MIGRATE = python3 migrate.py db migrate
UPGRADE = python3 migrate.py db upgrade
RUN = python3 run.py

all: migrate run

migrate:
	$(MIGRATE)
	$(UPGRADE)

activate:
	source venv/bin/activate

run:
	$(RUN)