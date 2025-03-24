import React from 'react';

function ResumeUploader({ setResumeData }) {
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:8000/upload-resume/', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    setResumeData(result.data);
  };

  return (
    <div>
      <h2>Upload Your Resume</h2>
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />
    </div>
  );
}

export default ResumeUploader;
