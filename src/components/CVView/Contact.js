export function Contact({ number, email }) {
  return (
    <div className="contact">
      <h3 className="heading-tertiary">Contact</h3>
      <p className="contact__number">
        {number > 0
          ? ` ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(
              6,
              9
            )} ${number.slice(9, 12)} ${number.slice(12, 15)}`
          : "+48 555 555 555"}
      </p>
      <p className="contact__email">{email || "email@gmail.com"}</p>
    </div>
  );
}
