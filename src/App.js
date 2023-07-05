import { useState } from "react";
import CvForm from "./components/CVForm/CvForm.js";
import CvView from "./components/CVView/CvView.js";

export default function App() {
  const [name, setName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  return (
    <>
      <header className="header">CV Application</header>
      <div className="container">
        <CvForm
          name={name}
          setName={setName}
          aboutMe={aboutMe}
          setAboutMe={setAboutMe}
          number={number}
          setNumber={setNumber}
          email={email}
          setEmail={setEmail}
          experience={experience}
          setExperience={setExperience}
          education={education}
          setEducation={setEducation}
          skills={skills}
          setSkills={setSkills}
          interests={interests}
          setInterests={setInterests}
        />
        <CvView
          name={name}
          aboutMe={aboutMe}
          number={number}
          email={email}
          experience={experience}
          education={education}
          skills={skills}
          interests={interests}
        />
      </div>
      <footer className="footer">
        <a href="https://github.com/Talar25">
          <p>
            Copyright ©{" "}
            <script>document.write(new Date().getFullYear())</script> Talar25
          </p>
        </a>
      </footer>
    </>
  );
}
