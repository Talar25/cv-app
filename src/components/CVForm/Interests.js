import { useState } from "react";
import { Skill } from "./Skill";

export function Interests({ interests, setInterests }) {
  const [name, setName] = useState("");

  function onAddInterest(e) {
    e.preventDefault();
    if (!name) return;
    const newItem = {
      name,
      id: new Date(),
    };
    if (interests.length > 5) return;
    setInterests((interest) => [...interest, newItem]);

    setName("");
  }

  function onDeleteItem(id) {
    setInterests((items) => items.filter((item) => item.id !== id));
  }
  return (
    <section>
      <form className="form">
        <h2 className="heading-secondary">Interests</h2>
        <div className="interests">
          {interests.map((int, i) => (
            <Skill
              key={int.id}
              name={int.name}
              onDeleteItem={onDeleteItem}
              index={int.id}
            />
          ))}
        </div>
        <input
          type="text"
          placeholder="Hobby"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="btn" onClick={(e) => onAddInterest(e)}>
          Add
        </button>
      </form>
    </section>
  );
}
