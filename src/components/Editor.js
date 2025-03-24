import React, { useState } from 'react';

function Editor({ resumeData, setResumeData }) {
  const [localData, setLocalData] = useState(resumeData);

  const handleChange = (section, index, key, value) => {
    const updated = { ...localData };
    updated[section][index][key] = value;
    setLocalData(updated);
  };

  const saveUpdates = async () => {
    const response = await fetch('http://localhost:8000/update-resume/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(localData),
    });

    const result = await response.json();
    setResumeData(result.data);
  };

  return (
    <div>
      <h2>Edit Your Resume Sections</h2>
      {Object.keys(localData).map((section) => (
        <div key={section}>
          <h3>{section.toUpperCase()}</h3>
          {localData[section].map((item, index) => (
            <div key={index}>
              {Object.keys(item).map((key) => (
                <div key={key}>
                  <label>{key}:</label>
                  <input
                    type="text"
                    value={item[key]}
                    onChange={(e) => handleChange(section, index, key, e.target.value)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      <button onClick={saveUpdates}>Save Changes</button>
    </div>
  );
}

export default Editor;
