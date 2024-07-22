import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function BluesResume({ toggle }) {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  const [objective, setObjective] = useState("");
  const [workExperiences, setWorkExperiences] = useState([]);
  const [workExpCount, setWorkExpCount] = useState(0);
  const [educations, setEducations] = useState([]);
  const [eduCount, setEduCount] = useState(0);
  const [technicalSkills, setTechnicalSkills] = useState([]);

  const clearAllFields = () => {
    setPersonalInfo({
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    });

    setObjective("");
    setWorkExperiences([]);
    setWorkExpCount(0);
    setEducations([]);
    setEduCount(0);
    setTechnicalSkills([]);
  };

  const handlePersonalInfoChange = (e) => {
    const { id, value } = e.target;
    setPersonalInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleObjectiveChange = (e) => {
    setObjective(e.target.value);
  };

  const addWorkExperience = () => {
    setWorkExpCount(workExpCount + 1);
    const newWorkExp = {
      id: workExpCount + 1,
      companyName: "",
      jobTitle: "",
      location: "",
      startDate: "",
      endDate: "",
      descriptions: [""],
    };
    setWorkExperiences([...workExperiences, newWorkExp]);
  };

  const handleWorkExpChange = (id, field, value) => {
    const updatedWorkExps = workExperiences.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setWorkExperiences(updatedWorkExps);
  };

  const deleteWorkExperience = (id) => {
    const updatedWorkExps = workExperiences.filter((exp) => exp.id !== id);
    setWorkExpCount(workExpCount - 1);
    setWorkExperiences(updatedWorkExps);
  };

  const addEducation = () => {
    setEduCount(eduCount + 1);
    const newEducation = {
      id: eduCount + 1,
      schoolName: "",
      degree: "",
      location: "",
      startDate: "",
      endDate: "",
      descriptions: [""],
    };
    setEducations([...educations, newEducation]);
  };

  const handleEducationChange = (id, field, value) => {
    const updatedEducations = educations.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    setEducations(updatedEducations);
  };

  const deleteEducation = (id) => {
    setEduCount(eduCount - 1);
    const updatedEducations = educations.filter((edu) => edu.id !== id);
    setEducations(updatedEducations);
  };

  const addTechnicalSkillCategory = () => {
    if (technicalSkills.length < 5) {
      const newCategory = {
        id: technicalSkills.length + 1,
        category: "",
        values: "",
      };
      setTechnicalSkills([...technicalSkills, newCategory]);
    }
  };

  const handleTechnicalSkillChange = (id, field, value) => {
    const updatedSkills = technicalSkills.map((skill) =>
      skill.id === id ? { ...skill, [field]: value } : skill
    );
    setTechnicalSkills(updatedSkills);
  };

  const deleteTechnicalSkillCategory = (id) => {
    const updatedSkills = technicalSkills.filter((skill) => skill.id !== id);
    setTechnicalSkills(updatedSkills);
  };

  const formatDate = (dateStr) => {
    const [year, month] = dateStr.split("-");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
  };


  const generateLatex = () => {
    return `
    \\documentclass[letterpaper,12pt]{article}
    \\usepackage[empty]{fullpage}
    \\usepackage{enumitem}
    \\usepackage{ifxetex}
    \\ifxetex
      \\usepackage{fontspec}
      \\usepackage[xetex]{hyperref}
    \\else
      \\usepackage[utf8]{inputenc}
      \\usepackage[T1]{fontenc}
      \\usepackage[pdftex]{hyperref}
    \\fi
    \\usepackage{fontawesome}
    \\usepackage[sfdefault,light]{FiraSans}
    \\usepackage{anyfontsize}
    \\usepackage{xcolor}
    \\usepackage{tabularx}
  
    \\def \\headertype {\\doublecol}
    \\def \\entryspacing {-0pt}
    \\def \\bulletstyle {\\faAngleRight}
    \\definecolor{primary}{HTML}{000000}
    \\definecolor{secondary}{HTML}{0D47A1}
    \\definecolor{accent}{HTML}{263238}
    \\definecolor{links}{HTML}{1565C0}
  
    \\newcommand{\\linkedin}{\\faLinkedin \\hspace{3pt} \\href{https://linkedin.com/in/dwight-schrute/}{/dwight-schrute}}
    \\newcommand{\\phone}{\\faPhone \\hspace{3pt} +1-123-456-7890}
    \\newcommand{\\email}{\\faEnvelope \\hspace{3pt} \\href{mailto:dschrute@dundermifflin.com}{dschrute@dundermifflin.com}}
    \\newcommand{\\github}{\\faGithub \\hspace{3pt} \\href{https://github.com/dwight-schrute}{/dwight-schrute}}
    \\newcommand{\\website}{\\faGlobe \\hspace{3pt} \\href{https://dwightschrute.com/}{dwightschrute.com}}
  
    \\newcommand{\\fullname}{Your Name} % Define your name
    \\newcommand{\\subtitle}{Your Subtitle} % Define your subtitle
  
    \\addtolength{\\oddsidemargin}{-0.55in}
    \\addtolength{\\evensidemargin}{-0.55in}
    \\addtolength{\\textwidth}{1.1in}
    \\addtolength{\\topmargin}{-0.6in}
    \\addtolength{\\textheight}{1.1in}
    \\hypersetup{
        colorlinks=true,
        urlcolor=links,
    }
    \\raggedbottom
    \\raggedright
    \\setlength{\\tabcolsep}{0in}
    \\renewcommand{\\section}[2]{\\vspace{5pt}
      \\colorbox{secondary}{\\color{white}\\raggedbottom\\normalsize\\textbf{{#1}{\\hspace{7pt}#2}}}
    }
    \\newcommand{\\resumeEntryStart}{\\begin{itemize}[leftmargin=2.5mm]}
    \\newcommand{\\resumeEntryEnd}{\\end{itemize}\\vspace{\\entryspacing}}
    \\newcommand{\\resumeItemListStart}{\\begin{itemize}[leftmargin=4.5mm]}
    \\newcommand{\\resumeItemListEnd}{\\end{itemize}}
    \\renewcommand{\\labelitemii}{\\bulletstyle}
    \\newcommand{\\resumeItem}[1]{
      \\item\\small{
        {#1 \\vspace{-2pt}}
      }
    }
    \\newcommand{\\resumeEntryTSDL}[4]{
      \\vspace{-1pt}\\item[]
        \\begin{tabularx}{0.97\\textwidth}{X@{\\hspace{60pt}}r}
          \\textbf{\\color{primary}#1} & {\\firabook\\color{accent}\\small#2} \\\\
          \\textit{\\color{accent}\\small#3} & \\textit{\\color{accent}\\small#4} \\\\
        \\end{tabularx}\\vspace{-6pt}
    }
  
    \\newcommand{\\resumeEntryS}[2]{
      \\item[]\\small{
        \\textbf{\\color{primary}#1 }{ #2 \\vspace{-6pt}}
      }
    }
  
    \\newcommand{\\doublecol}[6]{
      \\begin{tabularx}{\\textwidth}{Xr}
        {
          \\begin{tabular}[c]{l}
            \\fontsize{35}{45}\\selectfont{\\color{primary}{{\\textbf{\\fullname}}}} \\\\
          \\end{tabular}
        } & {
          \\begin{tabular}[c]{l@{\\hspace{1.5em}}l}
            {\\small#4} & {\\small#1} \\\\
            {\\small#5} & {\\small#2} \\\\
            {\\small#6} & {\\small#3}
          \\end{tabular}
        }
      \\end{tabularx}
    }
  
    \\begin{document}
  
    \\headertype{\\linkedin}{\\github}{\\website}{\\phone}{\\email}{} % Set the order of items here
    \\vspace{-10pt} % Set a negative value to push the body up, and the opposite
  
    \\section{\\faBullseye}{Objective}
    \\newline
    \\newline
    ${objective}
  
    \\section{\\faGraduationCap}{Education}
    ${educations.map((a) => `
      \\resumeEntryStart
        \\resumeEntryTSDL
          {${a.schoolName}}{${formatDate(a.startDate)} -- ${formatDate(a.endDate)}}
          {${a.degree}}{${a.location}}
          \\resumeItemListStart
            ${a.descriptions.map(desc => `\\resumeItem{${desc}}`).join("")}
          \\resumeItemListEnd
        \\resumeEntryEnd
    `).join("")}
  
    \\section{\\faPieChart}{Experience}
    ${workExperiences.map(a => `
      \\resumeEntryStart
        \\resumeEntryTSDL
          {${a.companyName}}{${formatDate(a.startDate)} -- ${formatDate(a.endDate)}}
          {${a.jobTitle}}{${a.location}}
          \\resumeItemListStart
            ${a.descriptions.map(desc => `\\resumeItem{${desc}}`).join("")}
          \\resumeItemListEnd
        \\resumeEntryEnd
    `).join("")}
  
    \\section{\\faGears}{Skills}
    \\resumeEntryStart
      ${technicalSkills.map(a => `\\resumeEntryS{${a.category}}{${a.values}}`).join("")}
    \\resumeEntryEnd
  
    \\end{document}
    `;
  };
  

  const downloadLatex = () => {
    const latexContent = generateLatex();
    const blob = new Blob([latexContent], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.tex";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const downloadResume = () => {
    const encodedLatex = encodeURIComponent(generateLatex());
    const compileUrl = `https://latexonline.cc/compile?text=${encodedLatex}`;

    const form = document.createElement("form");
    form.action = compileUrl;
    form.method = "GET";
    form.target = "_blank";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "text";
    input.value = generateLatex();
    form.appendChild(input);

    document.body.appendChild(form);
    form.submit();

    document.body.removeChild(form);
  };

  const loadSampleData = async () => {
    try {
      const response = await fetch("./JakeSampleData.json");
      const sampleData = await response.json();

      setPersonalInfo(sampleData.personalInfo);
      setObjective(sampleData.objective);
      setWorkExperiences(sampleData.workExperiences);
      setEducations(sampleData.educations);
      setTechnicalSkills(sampleData.technicalSkills);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Software Engineer's Resume Builder</h1>

      <div className="text-center mb-4">
        {/* <h5 className="text-center text-primary">No data validation done (i.e. Making sure valid LinkedIn profile).</h5> */}
        <button className="btn btn-primary" onClick={toggle} style={{}}>
          Back to Home Page
        </button>
      </div>
      <div className="text-center mb-4">
        <button className="btn btn-primary mr-3" onClick={loadSampleData}>
          Load Sample Data
        </button>

        <button className="btn btn-danger mr-3" onClick={clearAllFields}>
          Clear
        </button>
      </div>

      {/* Personal Information Section */}
      <div
        className="section-container"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #dee2e6",
          borderRadius: "5px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          className="section-heading"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "15px",
            borderBottom: "1px solid #dee2e6",
            paddingBottom: "10px",
          }}
        >
          Personal Information
        </div>
        <form>
          <div className="form-row" style={{ marginBottom: "15px" }}>
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={personalInfo.name}
                onChange={handlePersonalInfoChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                required
              />
            </div>
          </div>
          <div className="form-row" style={{ marginBottom: "15px" }}>
            <div className="form-group col-md-6">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="linkedin">LinkedIn</label>
              <input
                type="url"
                className="form-control"
                id="linkedin"
                value={personalInfo.linkedin}
                onChange={handlePersonalInfoChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="github">GitHub</label>
            <input
              type="url"
              className="form-control"
              id="github"
              value={personalInfo.github}
              onChange={handlePersonalInfoChange}
            />
          </div>
        </form>
      </div>

      {/* Objective Section */}
      <div
        className="section-container"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #dee2e6",
          borderRadius: "5px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          className="section-heading"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "15px",
            borderBottom: "1px solid #dee2e6",
            paddingBottom: "10px",
          }}
        >
          Objective
        </div>
        <form>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <textarea
              className="form-control"
              id="inputObjective"
              rows="3"
              placeholder="Enter your objective..."
              value={objective}
              onChange={handleObjectiveChange}
              style={{ width: "100%" }}
            ></textarea>
          </div>
        </form>
      </div>

      {/* Work Experience Section */}
      <div
        className="section-container"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #dee2e6",
          borderRadius: "5px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          className="section-heading"
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "15px",
            borderBottom: "1px solid #dee2e6",
            paddingBottom: "10px",
          }}
        >
          Work Experience
        </div>
        <div id="work-experiences">
          {workExperiences.map((exp) => (
            <div
              className="work-experience-box mb-4"
              key={exp.id}
              style={{
                borderTop: "1px solid #ccc",
                paddingTop: "10px",
                marginTop: "20px",
              }}
            >
              <form>
                <h5 className="mb-3">
                  Work {exp.id}{" "}
                  <button
                    type="button"
                    className="btn btn-danger btn-sm btn-delete"
                    onClick={() => deleteWorkExperience(exp.id)}
                    style={{
                      marginTop: "10px",
                      fontSize: "0.75rem",
                      padding: "0.15rem 0.3rem",
                      lineHeight: "1.5",
                    }}
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
                      onChange={(e) =>
                        handleWorkExpChange(
                          exp.id,
                          "companyName",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job Title"
                      value={exp.jobTitle}
                      onChange={(e) =>
                        handleWorkExpChange(exp.id, "jobTitle", e.target.value)
                      }
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
                      onChange={(e) =>
                        handleWorkExpChange(exp.id, "location", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="month"
                          className="form-control"
                          placeholder="Start Date"
                          value={exp.startDate}
                          onChange={(e) =>
                            handleWorkExpChange(
                              exp.id,
                              "startDate",
                              e.target.value
                            )
                          }
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="month"
                          className="form-control"
                          placeholder="End Date"
                          value={exp.endDate}
                          onChange={(e) =>
                            handleWorkExpChange(
                              exp.id,
                              "endDate",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Descriptions:</label>
                  {exp.descriptions.map((description, index) => (
                    <div
                      key={index}
                      className="description-item-container mb-2"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder={`Description ${index + 1}`}
                        value={description}
                        onChange={(e) => {
                          const updatedDescriptions = [...exp.descriptions];
                          updatedDescriptions[index] = e.target.value;
                          handleWorkExpChange(
                            exp.id,
                            "descriptions",
                            updatedDescriptions
                          );
                        }}
                        style={{
                          flex: "1",
                          marginRight: "10px",
                          marginBottom: "5px",
                        }}
                      />
                      {index === exp.descriptions.length - 1 && (
                        <button
                          type="button"
                          className="btn btn-success btn-sm btn-add-description"
                          onClick={() => {
                            const updatedDescriptions = [
                              ...exp.descriptions,
                              "",
                            ];
                            handleWorkExpChange(
                              exp.id,
                              "descriptions",
                              updatedDescriptions
                            );
                          }}
                          style={{
                            marginTop: "5px",
                            fontSize: "0.75rem",
                            padding: "0.15rem 0.3rem",
                            lineHeight: "1.5",
                          }}
                        >
                          Add Description
                        </button>
                      )}
                      {index !== exp.descriptions.length - 1 && (
                        <button
                          type="button"
                          className="btn btn-danger btn-sm btn-delete-description"
                          onClick={() => {
                            const updatedDescriptions = exp.descriptions.filter(
                              (_, idx) => idx !== index
                            );
                            handleWorkExpChange(
                              exp.id,
                              "descriptions",
                              updatedDescriptions
                            );
                          }}
                          style={{
                            marginTop: "5px",
                            fontSize: "0.75rem",
                            padding: "0.15rem 0.3rem",
                            lineHeight: "1.5",
                          }}
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
            style={{ display: "block", margin: "auto", marginTop: "20px" }}
          >
            Add Work Experience
          </button>
        </div>
      </div>

      {/* Education Section */}
      <div
        className="section-container"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #dee2e6",
          borderRadius: "5px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          className="section-heading"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "15px",
            borderBottom: "1px solid #dee2e6",
            paddingBottom: "10px",
          }}
        >
          Education
        </div>
        <div id="educations">
          {educations.map((edu) => (
            <div
              className="education-box mb-4"
              key={edu.id}
              style={{
                borderTop: "1px solid #ccc",
                paddingTop: "10px",
                marginTop: "20px",
              }}
            >
              <form>
                <h5 className="mb-3">
                  Education {edu.id}{" "}
                  <button
                    type="button"
                    className="btn btn-danger btn-sm btn-delete"
                    onClick={() => deleteEducation(edu.id)}
                    style={{
                      marginTop: "10px",
                      fontSize: "0.75rem",
                      padding: "0.15rem 0.3rem",
                      lineHeight: "1.5",
                    }}
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
                      onChange={(e) =>
                        handleEducationChange(
                          edu.id,
                          "schoolName",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) =>
                        handleEducationChange(edu.id, "degree", e.target.value)
                      }
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
                      onChange={(e) =>
                        handleEducationChange(
                          edu.id,
                          "location",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="month"
                          className="form-control"
                          placeholder="Start Date"
                          value={edu.startDate}
                          onChange={(e) =>
                            handleEducationChange(
                              edu.id,
                              "startDate",
                              e.target.value
                            )
                          }
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="month"
                          className="form-control"
                          placeholder="End Date"
                          value={edu.endDate}
                          onChange={(e) =>
                            handleEducationChange(
                              edu.id,
                              "endDate",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Descriptions:</label>
                  {edu.descriptions.map((description, index) => (
                    <div
                      key={index}
                      className="description-item-container mb-2"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder={`Description ${index + 1}`}
                        value={description}
                        onChange={(e) => {
                          const updatedDescriptions = [...edu.descriptions];
                          updatedDescriptions[index] = e.target.value;
                          handleEducationChange(
                            edu.id,
                            "descriptions",
                            updatedDescriptions
                          );
                        }}
                        style={{
                          flex: "1",
                          marginRight: "10px",
                          marginBottom: "5px",
                        }}
                      />
                      {index === edu.descriptions.length - 1 && (
                        <button
                          type="button"
                          className="btn btn-success btn-sm btn-add-description"
                          onClick={() => {
                            const updatedDescriptions = [
                              ...edu.descriptions,
                              "",
                            ];
                            handleEducationChange(
                              edu.id,
                              "descriptions",
                              updatedDescriptions
                            );
                          }}
                          style={{
                            marginTop: "5px",
                            fontSize: "0.75rem",
                            padding: "0.15rem 0.3rem",
                            lineHeight: "1.5",
                          }}
                        >
                          Add Description
                        </button>
                      )}
                      {index !== edu.descriptions.length - 1 && (
                        <button
                          type="button"
                          className="btn btn-danger btn-sm btn-delete-description"
                          onClick={() => {
                            const updatedDescriptions = edu.descriptions.filter(
                              (_, idx) => idx !== index
                            );
                            handleEducationChange(
                              edu.id,
                              "descriptions",
                              updatedDescriptions
                            );
                          }}
                          style={{
                            marginTop: "5px",
                            fontSize: "0.75rem",
                            padding: "0.15rem 0.3rem",
                            lineHeight: "1.5",
                          }}
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
            style={{ display: "block", margin: "auto", marginTop: "20px" }}
          >
            Add Education
          </button>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div
        className="section-container"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #dee2e6",
          borderRadius: "5px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          className="section-heading"
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "15px",
            borderBottom: "1px solid #dee2e6",
            paddingBottom: "10px",
          }}
        >
          Technical Skills
        </div>
        <div id="technical-skills">
          {technicalSkills.map((skill) => (
            <div
              className="technical-skill-box mb-4"
              key={skill.id}
              style={{
                borderTop: "1px solid #ccc",
                paddingTop: "10px",
                marginTop: "20px",
              }}
            >
              <form>
                <h5 className="mb-3">
                  Category {skill.id}{" "}
                  <button
                    type="button"
                    className="btn btn-danger btn-sm btn-delete"
                    onClick={() => deleteTechnicalSkillCategory(skill.id)}
                    style={{
                      marginTop: "10px",
                      fontSize: "0.75rem",
                      padding: "0.15rem 0.3rem",
                      lineHeight: "1.5",
                    }}
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
                      onChange={(e) =>
                        handleTechnicalSkillChange(
                          skill.id,
                          "category",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Skills (comma separated)"
                      value={skill.values}
                      onChange={(e) =>
                        handleTechnicalSkillChange(
                          skill.id,
                          "values",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          ))}

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          />
          {technicalSkills.length < 5 && (
            <button
              type="button"
              className="btn btn-primary btn-block btn-center"
              onClick={addTechnicalSkillCategory}
              style={{ display: "block", margin: "auto", marginTop: "20px" }}
            >
              Add Technical Skill Category
            </button>
          )}
        </div>
      </div>

      <div className="text-center mb-4">
        {/* Separate Box with FontAwesome Icon and Tooltip */}
        <div className="info-box">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
          <span className="tooltip-text">If download PDF Resume gives any error, please download the Tex File and <a target="blank" href="https://cloudconvert.com/tex-to-pdf">upload here for PDF version.</a></span>
        </div>

</div>
      {/* Download Resume Section */}
      <div className="text-center">
        <button
          className="btn btn-danger"
          onClick={downloadLatex}
          style={{
            fontSize: "1rem",
            padding: "10px 30px",
            marginRight: "10px",
            marginBottom: "20px",
          }}
        >
          Download Tex
        </button>
        <button
          className="btn btn-success"
          onClick={downloadResume}
          style={{
            fontSize: "1rem",
            padding: "10px 30px",
            marginBottom: "20px",
          }}
        >
          Download PDF Resume
        </button>
      </div>
    </div>
  );
}

export default BluesResume;
