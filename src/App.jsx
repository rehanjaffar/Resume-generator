import { useState } from "react";
import Form from "./components/Form";
import ResumePreview from "./components/ResumePreview";
import Template1 from "./components/Template1";

function App() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    education: [{ degree: "", institute: "", year: "" }],
    experience: [{ company: "", role: "", duration: "" }],
    skills: "",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Resume Builder</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <Form resumeData={resumeData} setResumeData={setResumeData} />
        <ResumePreview resumeData={resumeData} />
      </div>
   
    </div>
  );
}

export default App;
