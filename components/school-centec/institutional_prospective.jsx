import { LIST } from "@/utils/institutional_prospective_list";

export default function InstitutionalProspective() {
  return (
    <section
      id="prospectiva-institucional"
      className="overflow-hidden py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-full">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative max-w-xl lg:col-span-4 lg:pt-6 xl:col-span-4">
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Prospectiva Institucional
              </h3>
              <p className="py-6 text-lg lg:text-xl text-gray-300">
                Dentro de su oferta El COLEGIO CENTEC ofrece formación de
                bachillerato por ciclos para adultos con base en el Decreto 3011
                de 1997. En prospectiva enfoca y proyecta su gestión educativa
                en los siguientes aspectos académicos.
              </p>
            </div>

            <div className="max-w-full lg:col-span-8 lg:pt-6 xl:col-span-8">
              <ul className="mx-auto lg:grid gap-2 text-sm lg:gap-y-2 lg:grid-cols-2">
                {LIST.map((item, index) => (
                  <li key={index} className="p-2 mb-2 lg:mb-0 rounded-md">
                    <item.icon className="h-8 w-8 lg:h-10 lg:w-10 rounded-md bg-primaryBlue p-1 text-white mb-2" />
                    <h3 className="font-bold text-lg lg:text-base text-gray-300">
                      {item.name}
                    </h3>
                    <p className="text-sm lg:text-sm text-gray-400">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="pt-6 text-base lg:text-lg text-gray-300">
            La prospectiva institucional del <strong>COLEGIO CENTEC</strong> se
            enfoca en una gestión educativa que es adaptable, relevante,
            flexible y centrada en el bienestar y el éxito de los adultos que
            buscan completar su bachillerato, reconociendo sus necesidades y
            aspiraciones particulares.
          </p>
        </div>
      </div>
    </section>
  );
}
