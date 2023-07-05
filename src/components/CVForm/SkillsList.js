import { useState } from "react";
import { Skill } from "./Skill";

export function SkillsList({ skills, setSkills }) {
  const [name, setName] = useState("");

  function onAddSkill(e) {
    e.preventDefault();
    if (!name) return;
    const newItem = {
      name,
      id: new Date(),
    };
    if (skills.length > 5) return;
    setSkills((skill) => [...skill, newItem]);

    setName("");
  }

  function onDeleteItem(id) {
    setSkills((items) => items.filter((item) => item.id !== id));
  }
  return (
    <section>
      <form className="form">
        <h2 className="heading-secondary">Skills</h2>
        <div className="skills">
          {skills.map((edu, i) => (
            <Skill
              key={edu.id}
              name={edu.name}
              onDeleteItem={onDeleteItem}
              index={edu.id}
            />
          ))}
        </div>
        <input
          type="text"
          placeholder="Skill"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="btn" onClick={(e) => onAddSkill(e)}>
          Add
        </button>
      </form>
    </section>
  );
}
