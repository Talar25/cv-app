export function Heading({ name, aboutMe }) {
  return (
    <div>
      <h1 className="heading-primary">{name || "John Smith"}</h1>
      <h2 className="heading-secondary">About me</h2>
      <p className="heading__paragraph">
        {aboutMe ||
          "        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus nibh quis imperdiet eleifend. Phasellus ante nulla, fringilla nec risus quis, suscipit lacinia justo. Integer dapibus sollicitudin laoreet.Vestibulum pharetra nisl eget vulputate vestibulum. Aliquam in nisl sit amet ipsum ultricies vestibulum sed sit amet nunc. Suspendisse lobortis fermentum lacus, vitae convallis turpis ultrices laoreet. Vivamus turpisest, eleifend vel magna id, sagittis tempus orci. Aliquam nec lectus augue. Suspendisse sed auctor arcu, mattis placerat tortor. In euismod sapien interdum turpis cursus pharetra."}
      </p>
    </div>
  );
}
