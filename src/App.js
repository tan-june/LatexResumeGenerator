// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: ''
  });

  const [objective, setObjective] = useState('');

  const [workExperiences, setWorkExperiences] = useState([]);
  const [workExpCount, setWorkExpCount] = useState(0);

  const [educations, setEducations] = useState([]);
  const [eduCount, setEduCount] = useState(0);

  const [technicalSkills, setTechnicalSkills] = useState([]);

  // Function to handle changes in personal information
  const handlePersonalInfoChange = (e) => {
    const { id, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value
    }));
  };

  // Function to handle changes in objective
  const handleObjectiveChange = (e) => {
    setObjective(e.target.value);
  };

  // Function to add a new work experience box
  const addWorkExperience = () => {
    setWorkExpCount(workExpCount + 1);
    const newWorkExp = {
      id: workExpCount + 1,
      companyName: '',
      jobTitle: '',
      location: '',
      startDate: '',
      endDate: '',
      descriptions: [''] // Initial description
    };
    setWorkExperiences([...workExperiences, newWorkExp]);
  };

  // Function to handle changes in work experience fields
  const handleWorkExpChange = (id, field, value) => {
    const updatedWorkExps = workExperiences.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setWorkExperiences(updatedWorkExps);
  };

  // Function to delete a work experience
  const deleteWorkExperience = (id) => {
    const updatedWorkExps = workExperiences.filter((exp) => exp.id !== id);
    setWorkExpCount(workExpCount - 1);
    setWorkExperiences(updatedWorkExps);
  };

  // Function to add a new education box
  const addEducation = () => {
    setEduCount(eduCount + 1);
    const newEducation = {
      id: eduCount + 1,
      schoolName: '',
      degree: '',
      location: '',
      startDate: '',
      endDate: '',
      descriptions: [''] // Initial description
    };
    setEducations([...educations, newEducation]);
  };

  // Function to handle changes in education fields
  const handleEducationChange = (id, field, value) => {
    const updatedEducations = educations.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    setEducations(updatedEducations);
  };

  // Function to delete an education
  const deleteEducation = (id) => {
    setEduCount(eduCount - 1);
    const updatedEducations = educations.filter((edu) => edu.id !== id);
    setEducations(updatedEducations);
  };

  // Function to add a new category of technical skills
  const addTechnicalSkillCategory = () => {
    if (technicalSkills.length < 5) {
      const newCategory = {
        id: technicalSkills.length + 1,
        category: '',
        values: ''
      };
      setTechnicalSkills([...technicalSkills, newCategory]);
    }
  };

  // Function to handle changes in technical skills category
  const handleTechnicalSkillChange = (id, field, value) => {
    const updatedSkills = technicalSkills.map((skill) =>
      skill.id === id ? { ...skill, [field]: value } : skill
    );
    setTechnicalSkills(updatedSkills);
  };

  // Function to delete a technical skill category
  const deleteTechnicalSkillCategory = (id) => {
    const updatedSkills = technicalSkills.filter((skill) => skill.id !== id);
    setTechnicalSkills(updatedSkills);
  };

  // Function to download resume data as JSON
  const downloadResume = () => {
    const resumeData = {
      personalInfo,
      objective,
      workExperiences,
      educations,
      technicalSkills
    };
    const json = JSON.stringify(resumeData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const loadSampleData = () => {
    const sampleData = {
        "personalInfo": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "123-456-7890",
            "linkedin": "https://www.linkedin.com/in/johndoe",
            "github": "https://github.com/johndoe"
        },
        "objective": "Experienced software engineer passionate about building robust web applications and solving complex technical challenges.",
        "workExperiences": [
            {
                "id": 1,
                "companyName": "ABC Tech Solutions",
                "jobTitle": "Senior Software Engineer",
                "location": "New York, NY",
                "startDate": "2018-06-01",
                "endDate": "2022-12-31",
                "descriptions": [
                    "Led development of a microservices architecture using Docker and Kubernetes",
                    "Managed a team of 5 developers, ensuring adherence to coding standards and project timelines"
                ]
            },
            {
                "id": 2,
                "companyName": "XYZ Innovations",
                "jobTitle": "Software Developer",
                "location": "San Francisco, CA",
                "startDate": "2015-09-01",
                "endDate": "2018-05-31",
                "descriptions": [
                    "Designed and implemented RESTful APIs for a scalable backend infrastructure",
                    "Integrated third-party APIs for payment processing and user authentication"
                ]
            }
        ],
        "educations": [
            {
                "id": 1,
                "schoolName": "University of Example",
                "degree": "Master of Science in Computer Science",
                "location": "Example City, CA",
                "startDate": "2012-09-01",
                "endDate": "2014-05-31",
                "descriptions": [
                    "Focused on distributed systems and cloud computing",
                    "Thesis on optimization algorithms for large-scale data processing"
                ]
            },
            {
                "id": 2,
                "schoolName": "Example State College",
                "degree": "Bachelor of Science in Computer Engineering",
                "location": "Example Town, CA",
                "startDate": "2008-09-01",
                "endDate": "2012-05-31",
                "descriptions": [
                    "Graduated with highest honors",
                    "Coursework in computer architecture, embedded systems, and digital signal processing"
                ]
            }
        ],
        "technicalSkills": [
            {
                "id": 1,
                "category": "Frontend Development",
                "values": "React, Angular, Vue.js, JavaScript, HTML, CSS, Sass"
            },
            {
                "id": 2,
                "category": "Backend Development",
                "values": "Node.js, Python, Ruby on Rails, Express, MongoDB, PostgreSQL"
            },
            {
                "id": 3,
                "category": "DevOps",
                "values": "Docker, Kubernetes, AWS, Azure, Jenkins"
            },
            {
                "id": 4,
                "category": "Database Systems",
                "values": "MySQL, PostgreSQL, MongoDB, Redis"
            }
        ]
    };

    // Assuming setPersonalInfo, setObjective, setWorkExperiences, setEducations, and setTechnicalSkills are functions to set data in your application state
    setPersonalInfo(sampleData.personalInfo);
    setObjective(sampleData.objective);
    setWorkExperiences(sampleData.workExperiences);
    setEducations(sampleData.educations);
    setTechnicalSkills(sampleData.technicalSkills);
};


  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Resume Builder</h1>

 {/* Buttons Section */}
 <div className="text-center mb-4">
        <button
          className="btn btn-primary mr-3"
          onClick={loadSampleData}
        >
          Load Sample Data
        </button>
        <button
          className="btn btn-success"
          onClick={downloadResume}
        >
          Download Resume
        </button>
      </div>



      {/* Personal Information Section */}
      <div className="section-container" style={{ backgroundColor: '#fff', border: '1px solid #dee2e6', borderRadius: '5px', padding: '20px', marginBottom: '20px' }}>
        
        <div className="section-heading" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>Personal Information</div>
        <form>
          <div className="form-row" style={{ marginBottom: '15px' }}>
            <div className="form-group col-md-6">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                value={personalInfo.name}
                onChange={handlePersonalInfoChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                required
              />
            </div>
          </div>
          <div className="form-row" style={{ marginBottom: '15px' }}>
            <div className="form-group col-md-6">
              <label htmlFor="inputPhone">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="inputPhone"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputLinkedIn">LinkedIn</label>
              <input
                type="url"
                className="form-control"
                id="inputLinkedIn"
                value={personalInfo.linkedin}
                onChange={handlePersonalInfoChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputGithub">GitHub</label>
            <input
              type="url"
              className="form-control"
              id="inputGithub"
              value={personalInfo.github}
              onChange={handlePersonalInfoChange}
            />
          </div>
        </form>
      </div>

      {/* Objective Section */}
      <div className="section-container" style={{ backgroundColor: '#fff', border: '1px solid #dee2e6', borderRadius: '5px', padding: '20px', marginBottom: '20px' }}>
        <div className="section-heading" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>Objective</div>
        <form>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <textarea
              className="form-control"
              id="inputObjective"
              rows="3"
              placeholder="Enter your objective..."
              value={objective}
              onChange={handleObjectiveChange}
              style={{ width: '100%' }}
            ></textarea>
          </div>
        </form>
      </div>

      {/* Work Experience Section */}
      <div className="section-container" style={{ backgroundColor: '#fff', border: '1px solid #dee2e6', borderRadius: '5px', padding: '20px', marginBottom: '20px' }}>
        <div className="section-heading" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>Work Experience</div>
        <div id="work-experiences">
          {workExperiences.map((exp) => (
            <div className="work-experience-box mb-4" key={exp.id} style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '20px' }}>
              <form>
                <h5 className="mb-3">
                  Work {exp.id}{' '}
                  <button
                    type="button"
                    className="btn btn-danger btn-sm btn-delete"
                    onClick={() => deleteWorkExperience(exp.id)}
                    style={{ marginTop: '10px', fontSize: '0.75rem', padding: '0.15rem 0.3rem', lineHeight: '1.5' }}
                  >
                    Delete
                  </button>
                </h5>
                <div className="form-row mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      value={exp.companyName}
                      onChange={(e) => handleWorkExpChange(exp.id, 'companyName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job Title"
                      value={exp.jobTitle}
                      onChange={(e) => handleWorkExpChange(exp.id, 'jobTitle', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                      value={exp.location}
                      onChange={(e) => handleWorkExpChange(exp.id, 'location', e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Start Date"
                          value={exp.startDate}
                          onChange={(e) => handleWorkExpChange(exp.id, 'startDate', e.target.value)}
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="End Date"
                          value={exp.endDate}
                          onChange={(e) => handleWorkExpChange(exp.id, 'endDate', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Descriptions:</label>
                  {exp.descriptions.map((description, index) => (
                    <div key={index} className="description-item-container mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={`Description ${index + 1}`}
                        value={description}
                        onChange={(e) => {
                          const updatedDescriptions = [...exp.descriptions];
                          updatedDescriptions[index] = e.target.value;
                          handleWorkExpChange(exp.id, 'descriptions', updatedDescriptions);
                        }}
                        style={{ flex: '1', marginRight: '10px', marginBottom: '5px' }}
                      />
                      {index === exp.descriptions.length - 1 && (
                        <button
                          type="button"
                          className="btn btn-success btn-sm btn-add-description"
                          onClick={() => {
                            const updatedDescriptions = [...exp.descriptions, ''];
                            handleWorkExpChange(exp.id, 'descriptions', updatedDescriptions);
                          }}
                          style={{ marginTop: '5px', fontSize: '0.75rem', padding: '0.15rem 0.3rem', lineHeight: '1.5' }}
                        >
                          Add Description
                        </button>
                      )}
                      {index !== exp.descriptions.length - 1 && (
                        <button
                          type="button"
                          className="btn btn-danger btn-sm btn-delete-description"
                          onClick={() => {
                            const updatedDescriptions = exp.descriptions.filter((_, idx) => idx !== index);
                            handleWorkExpChange(exp.id, 'descriptions', updatedDescriptions);
                          }}
                          style={{ marginTop: '5px', fontSize: '0.75rem', padding: '0.15rem 0.3rem', lineHeight: '1.5' }}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </form>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-primary btn-block btn-center"
            onClick={addWorkExperience}
            style={{ display: 'block', margin: 'auto', marginTop: '20px' }}
          >
            Add Work Experience
          </button>
        </div>
      </div>

{/* Education Section */}
<div className="section-container" style={{ backgroundColor: '#fff', border: '1px solid #dee2e6', borderRadius: '5px', padding: '20px', marginBottom: '20px' }}>
  <div className="section-heading" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>Education</div>
  <div id="educations">
    {educations.map((edu) => (
      <div className="education-box mb-4" key={edu.id} style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '20px' }}>
        <form>
          <h5 className="mb-3">
            Education {edu.id}{' '}
            <button
              type="button"
              className="btn btn-danger btn-sm btn-delete"
              onClick={() => deleteEducation(edu.id)}
              style={{ marginTop: '10px', fontSize: '0.75rem', padding: '0.15rem 0.3rem', lineHeight: '1.5' }}
            >
              Delete
            </button>
          </h5>
          <div className="form-row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="School Name"
                value={edu.schoolName}
                onChange={(e) => handleEducationChange(edu.id, 'schoolName', e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Location"
                value={edu.location}
                onChange={(e) => handleEducationChange(edu.id, 'location', e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <div className="form-row">
                <div className="col">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Start Date"
                    value={edu.startDate}
                    onChange={(e) => handleEducationChange(edu.id, 'startDate', e.target.value)}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="End Date"
                    value={edu.endDate}
                    onChange={(e) => handleEducationChange(edu.id, 'endDate', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Descriptions:</label>
            {edu.descriptions.map((description, index) => (
              <div key={index} className="description-item-container mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder={`Description ${index + 1}`}
                  value={description}
                  onChange={(e) => {
                    const updatedDescriptions = [...edu.descriptions];
                    updatedDescriptions[index] = e.target.value;
                    handleEducationChange(edu.id, 'descriptions', updatedDescriptions);
                  }}
                  style={{ flex: '1', marginRight: '10px', marginBottom: '5px' }}
                />
                {index === edu.descriptions.length - 1 && (
                  <button
                    type="button"
                    className="btn btn-success btn-sm btn-add-description"
                    onClick={() => {
                      const updatedDescriptions = [...edu.descriptions, ''];
                      handleEducationChange(edu.id, 'descriptions', updatedDescriptions);
                    }}
                    style={{ marginTop: '5px', fontSize: '0.75rem', padding: '0.15rem 0.3rem', lineHeight: '1.5' }}
                  >
                    Add Description
                  </button>
                )}
                {index !== edu.descriptions.length - 1 && (
                  <button
                    type="button"
                    className="btn btn-danger btn-sm btn-delete-description"
                    onClick={() => {
                      const updatedDescriptions = edu.descriptions.filter((_, idx) => idx !== index);
                      handleEducationChange(edu.id, 'descriptions', updatedDescriptions);
                    }}
                    style={{ marginTop: '5px', fontSize: '0.75rem', padding: '0.15rem 0.3rem', lineHeight: '1.5' }}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        </form>
      </div>
    ))}
    <button
      type="button"
      className="btn btn-primary btn-block btn-center"
      onClick={addEducation}
      style={{ display: 'block', margin: 'auto', marginTop: '20px' }}
    >
      Add Education
    </button>
  </div>
</div>


      {/* Technical Skills Section */}
      <div className="section-container" style={{ backgroundColor: '#fff', border: '1px solid #dee2e6', borderRadius: '5px', padding: '20px', marginBottom: '20px' }}>
        <div className="section-heading" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>Technical Skills</div>
        <div id="technical-skills">
          {technicalSkills.map((skill) => (
            <div className="technical-skill-box mb-4" key={skill.id} style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '20px' }}>
              <form>

                <h5 className="mb-3">
                  Category {skill.id}{' '}
                  <button
                    type="button"
                    className="btn btn-danger btn-sm btn-delete"
                    onClick={() => deleteTechnicalSkillCategory(skill.id)}
                    style={{ marginTop: '10px', fontSize: '0.75rem', padding: '0.15rem 0.3rem', lineHeight: '1.5' }}
                  >
                    Delete
                  </button>
                </h5>
                <div className="form-row mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Category Name"
                      value={skill.category}
                      onChange={(e) => handleTechnicalSkillChange(skill.id, 'category', e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Skills (comma separated)"
                      value={skill.values}
                      onChange={(e) => handleTechnicalSkillChange(skill.id, 'values', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          ))}

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
          {technicalSkills.length < 5 && (
            <button
              type="button"
              className="btn btn-primary btn-block btn-center"
              onClick={addTechnicalSkillCategory}
              style={{ display: 'block', margin: 'auto', marginTop: '20px' }}
            >
              Add Technical Skill Category
            </button>
          )}
        </div>
      </div>

      {/* Download Resume Section */}
      <div className="text-center">
        <button
          className="btn btn-success"
          onClick={downloadResume}
          style={{ fontSize: '1rem', padding: '10px 30px', marginBottom: '20px' }}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default App;
