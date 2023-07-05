export function EducationItem({
  name,
  setName,
  subject,
  setSubject,
  from,
  setFrom,
  to,
  setTo,
}) {
  return (
    <form className="form">
      <input
        type="text"
        placeholder="University's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></input>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      ></input>
      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        required
      ></input>
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        required
      ></input>
    </form>
  );
}
