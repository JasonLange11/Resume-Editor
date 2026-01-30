import React, { useState } from 'react'
import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    website: ''
  })

  const [technicalSkills, setTechnicalSkills] = useState('')

  const [workExperience, setWorkExperience] = useState([
    {
      id: Date.now(),
      jobTitle: '',
      company: '',
      duration: '',
      location: '',
      description: ''
    }
  ])

  const [projects, setProjects] = useState([
    {
      id: Date.now(),
      projectName: '',
      description: ''
    }
  ])

  const [education, setEducation] = useState([
    {
      id: Date.now(),
      school: '',
      degree: '',
      graduationDate: ''
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
        location: '',
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

  const handleAddProject = () => {
    setProjects(prev => [
      ...prev,
      {
        id: Date.now(),
        projectName: '',
        description: ''
      }
    ])
  }

  const handleRemoveProject = (id) => {
    setProjects(prev => prev.filter(proj => proj.id !== id))
  }

  const handleProjectChange = (id, field, value) => {
    setProjects(prev =>
      prev.map(proj =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    )
  }

  const handleAddEducation = () => {
    setEducation(prev => [
      ...prev,
      {
        id: Date.now(),
        school: '',
        degree: '',
        graduationDate: ''
      }
    ])
  }

  const handleRemoveEducation = (id) => {
    setEducation(prev => prev.filter(edu => edu.id !== id))
  }

  const handleEducationChange = (id, field, value) => {
    setEducation(prev =>
      prev.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    )
  }

  const capitalizeWords = (str) => {
    if (!str) return str
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  const isValidEmail = (email) => {
    return email.includes('@') && email.includes('.')
  }

  const isValidPhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
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
          <div className="form-group">
            <label htmlFor="github">GitHub</label>
            <input
              type="text"
              id="github"
              value={personalInfo.github}
              onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
              placeholder="Enter your GitHub URL or username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="text"
              id="linkedin"
              value={personalInfo.linkedin}
              onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
              placeholder="Enter your LinkedIn URL or profile"
            />
          </div>
          <div className="form-group">
            <label htmlFor="website">Personal Website</label>
            <input
              type="text"
              id="website"
              value={personalInfo.website}
              onChange={(e) => handlePersonalInfoChange('website', e.target.value)}
              placeholder="Enter your personal website URL"
            />
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">TECHNICAL SKILLS</h2>
          <div className="form-group">
            <textarea
              id="skills"
              value={technicalSkills}
              onChange={(e) => setTechnicalSkills(e.target.value)}
              placeholder="Enter your technical skills (e.g., JavaScript, React, Python, etc.)"
              rows="6"
            />
          </div>
        </div>

        <div className="form-section">
          <div className="section-header">
            <h2 className="section-title">EXPERIENCE</h2>
            <button
              type="button"
              className="add-button"
              onClick={handleAddProject}
            >
              Add Project
            </button>
          </div>
          {projects.map((proj, index) => (
            <div key={proj.id} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-number">Project #{index + 1}</h3>
                {projects.length > 1 && (
                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => handleRemoveProject(proj.id)}
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="form-group">
                <label htmlFor={`projectName-${proj.id}`}>Project Name</label>
                <input
                  type="text"
                  id={`projectName-${proj.id}`}
                  value={proj.projectName}
                  onChange={(e) => handleProjectChange(proj.id, 'projectName', e.target.value)}
                  placeholder="Enter project name"
                />
              </div>
              <div className="form-group">
                <label htmlFor={`projectDescription-${proj.id}`}>Description</label>
                <textarea
                  id={`projectDescription-${proj.id}`}
                  value={proj.description}
                  onChange={(e) => handleProjectChange(proj.id, 'description', e.target.value)}
                  placeholder="Enter project description"
                  rows="4"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="form-section">
          <div className="section-header">
            <h2 className="section-title">PROJECTS</h2>
            <button
              type="button"
              className="add-button"
              onClick={handleAddEducation}
            >
              Add Education
            </button>
          </div>
          {education.map((edu, index) => (
            <div key={edu.id} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-number">Education #{index + 1}</h3>
                {education.length > 1 && (
                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => handleRemoveEducation(edu.id)}
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="form-group">
                <label htmlFor={`school-${edu.id}`}>School/University</label>
                <input
                  type="text"
                  id={`school-${edu.id}`}
                  value={edu.school}
                  onChange={(e) => handleEducationChange(edu.id, 'school', e.target.value)}
                  placeholder="Enter school name"
                />
              </div>
              <div className="form-group">
                <label htmlFor={`degree-${edu.id}`}>Degree</label>
                <input
                  type="text"
                  id={`degree-${edu.id}`}
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                  placeholder="Enter degree"
                />
              </div>
              <div className="form-group">
                <label htmlFor={`graduationDate-${edu.id}`}>Graduation Date</label>
                <input
                  type="text"
                  id={`graduationDate-${edu.id}`}
                  value={edu.graduationDate}
                  onChange={(e) => handleEducationChange(edu.id, 'graduationDate', e.target.value)}
                  placeholder="e.g., May 2020"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="form-section">
          <div className="section-header">
            <h2 className="section-title">EDUCATION</h2>
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
                <label htmlFor={`location-${exp.id}`}>Location</label>
                <input
                  type="text"
                  id={`location-${exp.id}`}
                  value={exp.location}
                  onChange={(e) => handleExperienceChange(exp.id, 'location', e.target.value)}
                  placeholder="e.g., New York, NY"
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
            <h1 className="resume-name">{capitalizeWords(personalInfo.fullName) || 'Your Name'}</h1>
            <div className="resume-contact">
              {personalInfo.email && isValidEmail(personalInfo.email) && <span>{personalInfo.email}</span>}
              {personalInfo.email && isValidEmail(personalInfo.email) && personalInfo.phone && isValidPhone(personalInfo.phone) && <span className="contact-separator">|</span>}
              {personalInfo.phone && isValidPhone(personalInfo.phone) && <span>{personalInfo.phone}</span>}
              {(personalInfo.email && isValidEmail(personalInfo.email) || personalInfo.phone && isValidPhone(personalInfo.phone)) && personalInfo.github && <span className="contact-separator">|</span>}
              {personalInfo.github && <span>{personalInfo.github}</span>}
              {(personalInfo.email && isValidEmail(personalInfo.email) || personalInfo.phone && isValidPhone(personalInfo.phone) || personalInfo.github) && personalInfo.linkedin && <span className="contact-separator">|</span>}
              {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
              {(personalInfo.email && isValidEmail(personalInfo.email) || personalInfo.phone && isValidPhone(personalInfo.phone) || personalInfo.github || personalInfo.linkedin) && personalInfo.website && <span className="contact-separator">|</span>}
              {personalInfo.website && <span>{personalInfo.website}</span>}
            </div>
          </div>

          {technicalSkills && (
            <div className="resume-section">
              <h2 className="resume-section-title">TECHNICAL SKILLS</h2>
              <p className="resume-text">{technicalSkills}</p>
            </div>
          )}

          {workExperience.some(exp => exp.jobTitle || exp.company || exp.duration || exp.description) && (
            <div className="resume-section">
              <h2 className="resume-section-title">EXPERIENCE</h2>
              {workExperience.map((exp) => {
                if (!exp.jobTitle && !exp.company && !exp.duration && !exp.description) {
                  return null
                }
                return (
                  <div key={exp.id} className="resume-experience-item">
                    <div className="resume-experience-header">
                      {exp.jobTitle && (
                        <h3 className="resume-job-title">{exp.jobTitle}</h3>
                      )}
                      {exp.duration && (
                        <p className="resume-duration">{exp.duration}</p>
                      )}
                    </div>
                    {exp.company && (
                      <p className="resume-company">{exp.company}</p>
                    )}
                    {exp.location && (
                      <p className="resume-location">{exp.location}</p>
                    )}
                    {exp.description && (
                      <p className="resume-description">{exp.description}</p>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {projects.some(proj => proj.projectName || proj.description) && (
            <div className="resume-section">
              <h2 className="resume-section-title">PROJECTS</h2>
              {projects.map((proj) => {
                if (!proj.projectName && !proj.description) {
                  return null
                }
                return (
                  <div key={proj.id} className="resume-project-item">
                    {proj.projectName && (
                      <h3 className="resume-project-title">{proj.projectName}</h3>
                    )}
                    {proj.description && (
                      <p className="resume-description">{proj.description}</p>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {education.some(edu => edu.school || edu.degree || edu.graduationDate) && (
            <div className="resume-section">
              <h2 className="resume-section-title">EDUCATION</h2>
              {education.map((edu) => {
                if (!edu.school && !edu.degree && !edu.graduationDate) {
                  return null
                }
                return (
                  <div key={edu.id} className="resume-education-item">
                    <div className="resume-education-header">
                      {edu.degree && (
                        <h3 className="resume-degree">{edu.degree}</h3>
                      )}
                      {edu.graduationDate && (
                        <p className="resume-graduation-date">{edu.graduationDate}</p>
                      )}
                    </div>
                    {edu.school && (
                      <p className="resume-school">{edu.school}</p>
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
