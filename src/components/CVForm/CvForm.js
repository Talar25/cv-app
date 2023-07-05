import "./CvForm.css";
import { Contact } from "./Contact";
import { PersonalInfo } from "./PersonalInfo";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { SkillsList } from "./SkillsList";
import { Interests } from "./Interests";

export default function CvForm({
  name,
  setName,
  aboutMe,
  setAboutMe,
  number,
  setNumber,
  email,
  setEmail,
  setExperience,
  experience,
  education,
  setEducation,
  skills,
  setSkills,
  interests,
  setInterests,
}) {
  return (
    <div className="Cv--form">
      <PersonalInfo
        name={name}
        setName={setName}
        setAboutMe={setAboutMe}
        aboutMe={aboutMe}
      />
      <Contact
        number={number}
        setNumber={setNumber}
        email={email}
        setEmail={setEmail}
      />
      <Experience experience={experience} setExperience={setExperience} />
      <Education education={education} setEducation={setEducation} />
      <SkillsList skills={skills} setSkills={setSkills} />
      <Interests interests={interests} setInterests={setInterests} />
    </div>
  );
}
