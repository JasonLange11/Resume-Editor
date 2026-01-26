import React, { useState } from 'react'
import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: ''
  })

  const [professionalSummary, setProfessionalSummary] = useState('')

  const [workExperience, setWorkExperience] = useState([
    {
      id: Date.now(),
      jobTitle: '',
      company: '',
      duration: '',
      description: ''
    }
  ])

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAddExperience = () => {
    setWorkExperience(prev => [
      ...prev,
      {
        id: Date.now(),
        jobTitle: '',
        company: '',
        duration: '',
        description: ''
      }
    ])
  }

  const handleRemoveExperience = (id) => {
    setWorkExperience(prev => prev.filter(exp => exp.id !== id))
  }

  const handleExperienceChange = (id, field, value) => {
    setWorkExperience(prev =>
      prev.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    )
  }

  return (
    <div className="app-container">
      <div className="editor-panel">
        <h1 className="editor-title">Resume Editor</h1>
        
        <div className="form-section">
          <h2 className="section-title">Personal Information</h2>
          <div className="form-group">
            <label htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={personalInfo.fullName}
              onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={personalInfo.email}
              onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={personalInfo.phone}
              onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">
            Professional Summary <span className="required">*</span>
          </h2>
          <div className="form-group">
            <textarea
              id="summary"
              value={professionalSummary}
              onChange={(e) => setProfessionalSummary(e.target.value)}
              placeholder="Enter your professional summary"
              rows="6"
            />
          </div>
        </div>

        <div className="form-section">
          <div className="section-header">
            <h2 className="section-title">Work Experience</h2>
            <button
              type="button"
              className="add-button"
              onClick={handleAddExperience}
            >
              Add Experience
            </button>
          </div>
          {workExperience.map((exp, index) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-number">Experience #{index + 1}</h3>
                {workExperience.length > 1 && (
                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => handleRemoveExperience(exp.id)}
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="form-group">
                <label htmlFor={`jobTitle-${exp.id}`}>Job Title</label>
                <input
                  type="text"
                  id={`jobTitle-${exp.id}`}
                  value={exp.jobTitle}
                  onChange={(e) => handleExperienceChange(exp.id, 'jobTitle', e.target.value)}
                  placeholder="Enter job title"
                />
              </div>
              <div className="form-group">
                <label htmlFor={`company-${exp.id}`}>Company</label>
                <input
                  type="text"
                  id={`company-${exp.id}`}
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                  placeholder="Enter company name"
                />
              </div>
              <div className="form-group">
                <label htmlFor={`duration-${exp.id}`}>Duration</label>
                <input
                  type="text"
                  id={`duration-${exp.id}`}
                  value={exp.duration}
                  onChange={(e) => handleExperienceChange(exp.id, 'duration', e.target.value)}
                  placeholder="e.g., Jan 2020 - Present"
                />
              </div>
              <div className="form-group">
                <label htmlFor={`description-${exp.id}`}>Description</label>
                <textarea
                  id={`description-${exp.id}`}
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                  placeholder="Enter job description"
                  rows="4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="preview-panel">
        <div className="preview-header">
          <h1 className="preview-title">Live Preview</h1>
          <p className="preview-subtitle">Your resume preview updates in real-time</p>
        </div>
        <div className="resume-preview">
          <div className="resume-header">
            <h1 className="resume-name">{personalInfo.fullName || 'Your Name'}</h1>
            <div className="resume-divider"></div>
            <div className="resume-contact">
              {personalInfo.email && <span>{personalInfo.email}</span>}
              {personalInfo.email && personalInfo.phone && <span className="contact-separator">•</span>}
              {personalInfo.phone && <span>{personalInfo.phone}</span>}
            </div>
          </div>

          {professionalSummary && (
            <div className="resume-section">
              <h2 className="resume-section-title">Professional Summary</h2>
              <p className="resume-text">{professionalSummary}</p>
            </div>
          )}

          {workExperience.some(exp => exp.jobTitle || exp.company || exp.duration || exp.description) && (
            <div className="resume-section">
              <h2 className="resume-section-title">Work Experience</h2>
              {workExperience.map((exp) => {
                if (!exp.jobTitle && !exp.company && !exp.duration && !exp.description) {
                  return null
                }
                return (
                  <div key={exp.id} className="resume-experience-item">
                    {exp.jobTitle && (
                      <h3 className="resume-job-title">
                        {exp.jobTitle}
                        {exp.company && ` at ${exp.company}`}
                      </h3>
                    )}
                    {exp.duration && (
                      <p className="resume-duration">{exp.duration}</p>
                    )}
                    {exp.description && (
                      <p className="resume-description">{exp.description}</p>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
