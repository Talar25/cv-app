export function EducationItem({ name, subject, from, to }) {
  return (
    <li className="education-item">
      <div className="education-and-time">
        <span>{name}</span>
        <span>
          {from} - {to}
        </span>
      </div>
      <span className="education-title">{subject}</span>
    </li>
  );
}
