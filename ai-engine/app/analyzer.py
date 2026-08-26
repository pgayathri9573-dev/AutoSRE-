def analyze_error(error_message: str, log_data: str = ""):
    text = (error_message + " " + log_data).lower()

    if "connection refused" in text:
        return {
            "problem": "Service connection failure",
            "root_cause": "The target service may be down or the port may not be available.",
            "recommended_action": "Check whether the service is running and restart it if necessary.",
            "confidence": 0.90
        }

    if "timeout" in text:
        return {
            "problem": "Request timeout",
            "root_cause": "The service may be slow, overloaded, or unreachable.",
            "recommended_action": "Check service health, network connectivity, and resource usage.",
            "confidence": 0.85
        }

    if "out of memory" in text or "memoryerror" in text:
        return {
            "problem": "Memory exhaustion",
            "root_cause": "The application may be consuming excessive memory.",
            "recommended_action": "Check memory usage and restart or scale the service.",
            "confidence": 0.92
        }

    if "500 internal server error" in text:
        return {
            "problem": "Internal server error",
            "root_cause": "The application encountered an unexpected server-side failure.",
            "recommended_action": "Check application logs and restart the affected service if required.",
            "confidence": 0.80
        }

    return {
        "problem": "Unknown error",
        "root_cause": "The available rules could not identify the exact root cause.",
        "recommended_action": "Collect more logs and perform deeper analysis.",
        "confidence": 0.40
    }