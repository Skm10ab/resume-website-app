from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from utils.pdf_parser import parse_pdf
import uvicorn

app = FastAPI()

# CORS setup to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

user_data = {}  # In-memory store (replace with database later)


@app.get("/")
def root():
    return {"message": "FastAPI backend is running"}

@app.post("/upload-resume/")
async def upload_resume(file: UploadFile = File(...)):
    contents = await file.read()

    resume_data = parse_pdf(contents)

    user_data['resume'] = resume_data
    return {"message": "Resume parsed", "data": resume_data}

@app.get("/get-resume/")
def get_resume():
    return user_data.get('resume', {})

@app.post("/update-resume/")
def update_resume(updated_data: dict):
    user_data['resume'] = updated_data
    return {"message": "Resume updated", "data": updated_data}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

