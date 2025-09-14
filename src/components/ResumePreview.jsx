import Template1 from "./Template1";
import html2pdf from "html2pdf.js";

export default function ResumePreview({ resumeData }) {
  const handleDownload = () => {
    const element = document.getElementById("resume-template");
    html2pdf().from(element).save("My_Resume.pdf");
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full md:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Resume Preview</h2>
      <Template1 data={resumeData} />
      <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600 transition-colors"
      >
        Download PDF
      </button>
    </div>
  );
}
