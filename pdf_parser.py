import pdfplumber
import io

def parse_pdf(file_content):
    data = {
        "projects": [],
        "work_experience": [],
        "testimonials": [],
        "education": []
    }

    with pdfplumber.open(io.BytesIO(file_content)) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text() + '\n'

    # Mock data for now (replace with actual parsing logic later)
    data['projects'].append({"title": "Sample Project", "description": "Project extracted from resume."})
    data['work_experience'].append({"company": "Company XYZ", "role": "Developer"})
    data['testimonials'].append({"author": "Manager", "content": "Great team player!"})
    data['education'].append({"school": "ABC University", "degree": "BSc Computer Science"})

    return data

