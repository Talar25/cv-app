import { InfoSet } from "./InfoSet";
import { Contact } from "./Contact";

export function Info({ number, email, skills, interests }) {
  return (
    <div className="info">
      <Contact number={number} email={email} />
      <InfoSet name="Skills" itemName="skill" items={skills} />
      <InfoSet name="Interests" itemName="hobby" items={interests} />
    </div>
  );
}
