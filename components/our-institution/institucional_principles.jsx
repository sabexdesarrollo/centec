import {
  PRINCIPLES,
  PrincipleItem,
} from "@/components/our-institution/principles_institucional";

export default function InstitutionalPrinciples({
  textColorTitle,
  textColorDescrip,
  bg,
  textGeneralDesp,
  border
}) {
  return (
    <section
      id="principios-institucionales"
      className={`py-20 sm:py-32 ${bg}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[65rem] sm:text-center">
          <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight ${textColorTitle}`}>
            Principios Institucionales
          </h2>
          <p className={`py-6 text-lg lg:text-xl text-justify ${textGeneralDesp}`}>
            La función administrativa de la Institución se desarrolla conforme
            con los principios constitucionales, como la buena fe, igualdad,
            moralidad, celeridad, economía, imparcialidad, eficacia, eficiencia,
            participación, publicidad, responsabilidad, transparencia y
            valoración de costos ambientales. Y para ello prioriza:
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2"
        >
          {PRINCIPLES.map((principle, index) => (
            <PrincipleItem
              key={index}
              {...principle}
              textColorTitle={textColorTitle}
              textColorDescrip={textColorDescrip}
              border={border}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
