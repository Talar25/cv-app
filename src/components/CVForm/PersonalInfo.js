export function PersonalInfo({ name, setName, setAboutMe, aboutMe }) {
  function handleName(e) {
    if (name.length > 28) return;
    setName(e.target.value);
  }

  function handleAbout(e) {
    if (aboutMe.length > 400) return;
    setAboutMe(e.target.value);
  }

  return (
    <section>
      <form className="form">
        <h2 className="heading-secondary">Personal information</h2>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleName}
          maxLength={28}
          required
        ></input>

        <textarea
          type="text"
          placeholder="Write something about yourself!"
          value={aboutMe}
          onChange={handleAbout}
          maxLength={400}
          required
        ></textarea>
      </form>
    </section>
  );
}
