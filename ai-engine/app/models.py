from pydantic import BaseModel


class ErrorRequest(BaseModel):
    service_name: str
    error_message: str
    log_data: str = ""


class DiagnosisResponse(BaseModel):
    service_name: str
    problem: str
    root_cause: str
    recommended_action: str
    confidence: float