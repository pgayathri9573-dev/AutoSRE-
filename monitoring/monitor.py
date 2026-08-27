import requests
import time

URL = "http://127.0.0.1:8000/health"

while True:
    try:
        response = requests.get(URL)

        if response.status_code == 200:
            print("✅ Backend is healthy")
        else:
            print("⚠️ Backend is unhealthy")

    except requests.exceptions.RequestException:
        print("❌ Backend is down")

    time.sleep(5)