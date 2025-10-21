#!/bin/bash

python ./app/manage.py flush --noinput

python ./app/manage.py migrate --fake-initial

python ./app/manage.py createsuperuser --noinput --username=admin --email "admin@example.org"

python ./app/manage.py runserver 0.0.0.0:8000
