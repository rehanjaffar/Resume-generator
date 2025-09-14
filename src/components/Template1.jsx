export default function Template1({ data }) {
  return (
    <div
      id="resume-template"
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "sans-serif",
        backgroundColor: "#ffffff",
        color: "#000000",
        lineHeight: "1.5",
      }}
    >
      {/* Name */}
      <h1 style={{ fontSize: "26px", textAlign: "center", fontWeight: "semibold", marginBottom: "5px" }}>
        {data.name || "Your Name"}
      </h1>

      <hr style={{ margin: "10px 10px", color: "#5f93dcff" }} />
      {/* Contact Info */}
      <p style={{ marginBottom: "10px", display: "flex", justifyContent: "center", gap: "10px", fontSize: "14px" }}>
        {data.email || "email@example.com"} | {data.phone || "123-456-7890"}
      </p>

      {/* Education */}
      <section style={{ marginTop: "20px" }}>
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#0d63dcff",
            borderBottom: "1px solid #000",
            marginBottom: "8px",
          }}
        >
          Education
        </h2>
        {data.education.map((edu, idx) => (
          <p key={idx} style={{ marginBottom: "4px" }}>
            {edu.degree || "Degree"} - {edu.institute || "Institute"} ({edu.year || "Year"})
          </p>
        ))}
      </section>

      {/* Experience */}
      <section style={{ marginTop: "20px" }}>
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "600",
            borderBottom: "1px solid #000",
            marginBottom: "8px",
             color: "#0d63dcff",
          }}
        >
          Experience
        </h2>
        {data.experience.map((exp, idx) => (
          <p key={idx} style={{ marginBottom: "4px" }}>
            {exp.role || "Role"} at {exp.company || "Company"} ({exp.duration || "Duration"})
          </p>
        ))}
      </section>

      {/* Skills */}
      <section style={{ marginTop: "20px" }}>
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "600",
            borderBottom: "1px solid #000",
            marginBottom: "8px",
             color: "#0d63dcff",
          }}
        >
          Skills
        </h2>
        <p>{data.skills || "Your skills"}</p>
      </section>
    </div>
  );
}
