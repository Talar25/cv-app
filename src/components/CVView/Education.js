import { EducationItem } from "./EducationItem";

export function Education({ education }) {
  return (
    <div className="education">
      <h2 className="heading-secondary">Education</h2>
      {education.length > 0 ? (
        education.map((edu) => (
          <EducationItem
            name={edu.name}
            subject={edu.subject}
            from={edu.frm}
            to={edu.to}
          ></EducationItem>
        ))
      ) : (
        <>
          <EducationItem
            name="University"
            subject="Subject"
            from="00.2022"
            to="00.2023"
          />
          <EducationItem
            name="University"
            subject="Subject"
            from="00.2022"
            to="00.2023"
          />
          <EducationItem
            name="University"
            subject="Subject"
            from="00.2022"
            to="00.2023"
          />
        </>
      )}
    </div>
  );
}
