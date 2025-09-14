import { useState } from "react";

export default function Form({ resumeData, setResumeData }) {
  const handleChange = (e, section = null, index = null) => {
    const { name, value } = e.target;
    if (section) {
      const updatedSection = [...resumeData[section]];
      updatedSection[index][name] = value;
      setResumeData({ ...resumeData, [section]: updatedSection });
    } else {
      setResumeData({ ...resumeData, [name]: value });
    }
  };

  const addSectionItem = (section) => {
    setResumeData({
      ...resumeData,
      [section]: [...resumeData[section], {}],
    });
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full md:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={resumeData.name}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={resumeData.email}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={resumeData.phone}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <h3 className="font-semibold">Education</h3>
      {resumeData.education.map((edu, idx) => (
        <div key={idx} className="mb-2">
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={edu.degree || ""}
            onChange={(e) => handleChange(e, "education", idx)}
            className="w-full p-2 mb-1 border rounded"
          />
          <input
            type="text"
            name="institute"
            placeholder="Institute"
            value={edu.institute || ""}
            onChange={(e) => handleChange(e, "education", idx)}
            className="w-full p-2 mb-1 border rounded"
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={edu.year || ""}
            onChange={(e) => handleChange(e, "education", idx)}
            className="w-full p-2 mb-2 border rounded"
          />
        </div>
      ))}
      <button
        onClick={() => addSectionItem("education")}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Education
      </button>

      <h3 className="font-semibold">Experience</h3>
      {resumeData.experience.map((exp, idx) => (
        <div key={idx} className="mb-2">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={exp.company || ""}
            onChange={(e) => handleChange(e, "experience", idx)}
            className="w-full p-2 mb-1 border rounded"
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={exp.role || ""}
            onChange={(e) => handleChange(e, "experience", idx)}
            className="w-full p-2 mb-1 border rounded"
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={exp.duration || ""}
            onChange={(e) => handleChange(e, "experience", idx)}
            className="w-full p-2 mb-2 border rounded"
          />
        </div>
      ))}
      <button
        onClick={() => addSectionItem("experience")}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Experience
      </button>

      <h3 className="font-semibold">Skills</h3>
      <input
        type="text"
        name="skills"
        placeholder="Skills (comma separated)"
        value={resumeData.skills}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />
    </div>
  );
}
