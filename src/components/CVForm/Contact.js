export function Contact({ number, setNumber, email, setEmail }) {
  function handleNumber(e) {
    if (number.length > 8) return;
    setNumber(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <section>
      <form className="form">
        <h2 className="heading-secondary">Contact information</h2>
        <input
          type="number"
          placeholder="Your number"
          value={number}
          onChange={handleNumber}
          maxLength={9}
        ></input>
        <input
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={handleEmail}
        ></input>
      </form>
    </section>
  );
}
