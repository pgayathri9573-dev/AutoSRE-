from fastapi import FastAPI

from .models import ErrorRequest, DiagnosisResponse
from .analyzer import analyze_error


app = FastAPI(
    title="AutoSRE AI Engine",
    description="AI Engine for automated incident diagnosis",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "AutoSRE AI Engine is running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/analyze", response_model=DiagnosisResponse)
def analyze(request: ErrorRequest):

    result = analyze_error(
        request.error_message,
        request.log_data
    )

    return {
        "service_name": request.service_name,
        **result
    }