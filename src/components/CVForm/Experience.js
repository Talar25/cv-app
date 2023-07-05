import { useState } from "react";
import { Skill } from "./Skill";
import { ExperienceItem } from "./ExperienceItem";

export function Experience({ experience, setExperience }) {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDescription] = useState("");
  function onAddExperience(e) {
    e.preventDefault();
    if (!position || !company || !from || !to || !description) return;
    const newItem = {
      position,
      company,
      from,
      to,
      description,
      id: new Date(),
    };
    if (experience.length > 3) return;
    setExperience((exp) => [...exp, newItem]);

    setCompany("");
    setPosition("");
    setDescription("");
    setFrom("");
    setTo("");
  }

  function onDeleteItem(id) {
    setExperience((items) => items.filter((item) => item.id !== id));
  }
  return (
    <section className="experience">
      <h2 className="heading-secondary exp">Experience</h2>
      <div className="exp-list">
        {experience.map((ex, i) => (
          <Skill
            key={ex.id}
            name={"Job " + (i + 1)}
            onDeleteItem={onDeleteItem}
            index={ex.id}
          />
        ))}
      </div>

      <ExperienceItem
        key="experience-item"
        position={position}
        setPosition={setPosition}
        company={company}
        setCompany={setCompany}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
        description={description}
        setDescription={setDescription}
      ></ExperienceItem>
      <button className="btn" onClick={(e) => onAddExperience(e)}>
        Add
      </button>
    </section>
  );
}
