export function Job({ from, to, description, company, title }) {
  return (
    <li className="job">
      <div className="job-and-time">
        <span>{company}</span>
        <span>
          {from} - {to}
        </span>
      </div>
      <span className="job-title">{title}</span>
      <p className="job-description">{description}</p>
    </li>
  );
}
