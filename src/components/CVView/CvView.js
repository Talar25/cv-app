import "./CvView.css";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Heading } from "./Heading";
import { Info } from "./Info";
import { Main } from "./Main";

export default function CvView({
  name,
  aboutMe,
  email,
  number,
  experience,
  education,
  skills,
  interests,
}) {
  return (
    <div className="view" id="view">
      <Heading name={name} aboutMe={aboutMe} />
      <Main>
        <Experience experience={experience} />
        <Education education={education} />
        <Info
          email={email}
          number={number}
          skills={skills}
          interests={interests}
        />
      </Main>
    </div>
  );
}
