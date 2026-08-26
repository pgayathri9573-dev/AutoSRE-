from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


@app.get("/")
def home():
    return {"message": "AutoSRE Backend is running!"}


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "AutoSRE Backend"
    }


class ErrorReport(BaseModel):
    service: str
    error: str
    severity: str = "high"


@app.post("/report-error")
def report_error(report: ErrorReport):
    return {
        "message": "Error received",
        "service": report.service,
        "error": report.error,
        "severity": report.severity
    }


@app.post("/diagnose")
def diagnose(report: ErrorReport):

    error = report.error.lower()

    if "database" in error or "sql" in error:
        diagnosis = "Database connection problem"
        solution = "Check database server, connection string and credentials."

    elif "timeout" in error:
        diagnosis = "Service timeout problem"
        solution = "Check network connection and increase timeout if required."

    elif "memory" in error:
        diagnosis = "Memory problem"
        solution = "Check memory usage and restart the affected service."

    elif "file not found" in error:
        diagnosis = "Missing file"
        solution = "Check whether the required file exists at the correct path."

    elif "connection refused" in error:
        diagnosis = "Service connection refused"
        solution = "Check whether the required service is running."

    else:
        diagnosis = "Unknown error"
        solution = "Check application logs for more details."

    return {
        "service": report.service,
        "error": report.error,
        "severity": report.severity,
        "diagnosis": diagnosis,
        "suggested_solution": solution
    }
