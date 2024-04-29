FROM python:3.12

WORKDIR /app

COPY . .
RUN pip install --no-cache-dir -r /app/requirements.txt

CMD ["python", "./app/manage.py", "runserver", "0.0.0.0:8000"]
