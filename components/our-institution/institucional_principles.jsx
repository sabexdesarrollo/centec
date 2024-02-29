import {
  PRINCIPLES,
  PrincipleItem,
} from "@/components/our-institution/principles_institucional";

export default function InstitutionalPrinciples() {
  return (
    <section
      id="principios-institucionales"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[65rem] sm:text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Principios institucionales
          </h2>
          <p className="mt-2 text-lg lg:text-xl text-gray-600 text-justify">
            La función administrativa de la Institución se desarrolla conforme
            con los principios constitucionales, como la buena fe, igualdad,
            moralidad, celeridad, economía, imparcialidad, eficacia, eficiencia,
            participación, publicidad, responsabilidad, transparencia y
            valoración de costos ambientales. Y para ello prioriza:
          </p>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2">
        {PRINCIPLES.map((principle, index) => (
            <PrincipleItem key={index} {...principle} />
          ))}
        </ul>
      </div>
    </section>
  );
}
