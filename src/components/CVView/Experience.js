import { Job } from "./Job";

export function Experience({ experience }) {
  return (
    <div>
      <h2 className="heading-secondary">Experience</h2>
      {experience.length > 0 ? (
        experience.map((ex) => (
          <Job
            from={ex.from}
            to={ex.to}
            description={ex.description}
            company={ex.company}
            title={ex.position}
            key={ex.id}
          ></Job>
        ))
      ) : (
        <>
          <Job
            from="00.2022"
            to="00.2023"
            description="Aliquam nec lectus augue. Suspendisse sed auctor arcu, mattis placerat tortor. In euismod sapien interdum turpis cursus pharetra."
            company="Company"
            title="Engineer"
          />
          <Job
            from="00.2022"
            to="00.2023"
            description="Aliquam nec lectus augue. Suspendisse sed auctor arcu, mattis placerat tortor. In euismod sapien interdum turpis cursus pharetra."
            company="Company"
            title="Engineer"
          />
          <Job
            from="00.2022"
            to="00.2023"
            description="Aliquam nec lectus augue. Suspendisse sed auctor arcu, mattis placerat tortor. In euismod sapien interdum turpis cursus pharetra."
            company="Company"
            title="Engineer"
          />
        </>
      )}
    </div>
  );
}
