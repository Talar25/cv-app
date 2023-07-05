import { useState } from "react";
import { Skill } from "./Skill";
import { EducationItem } from "./EducationItem";

export function Education({ education, setEducation }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function onAddEducation(e) {
    e.preventDefault();
    if (!name || !subject || !from || !to) return;
    const newItem = {
      name,
      subject,
      from,
      to,
      id: new Date(),
    };
    if (education.length > 3) return;
    setEducation((edu) => [...edu, newItem]);

    setName("");
    setSubject("");
    setFrom("");
    setTo("");
  }

  function onDeleteItem(id) {
    setEducation((items) => items.filter((item) => item.id !== id));
  }

  return (
    <section className="education">
      <h2 className="heading-secondary edu">Education</h2>
      <div className="edu-list">
        {education.map((edu, i) => (
          <Skill
            key={edu.id}
            name={"Education " + (i + 1)}
            onDeleteItem={onDeleteItem}
            index={edu.id}
          />
        ))}
      </div>
      <EducationItem
        key="education-item"
        name={name}
        setName={setName}
        subject={subject}
        setSubject={setSubject}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
      />
      <button className="btn" onClick={(e) => onAddEducation(e)}>
        Add
      </button>
    </section>
  );
}
