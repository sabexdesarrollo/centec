import Image from "next/image";

import LIST from "@/utils/instututional_values_list";
import images from "@/assets/images/dir";

export default function InstitutionalValues() {
  return (
    <>
      <section
        id="valores-institucionales"
        className="relative -z-50 overflow-hidden py-20 sm:py-32 lg:py-32 bg-primaryBlue"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl pb-8 lg:mx-0 lg:max-w-3xl ">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Horizonte institucional
            </h2>
          </div>
        <div class="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <Image
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="w-full"
              src={images.smile_persons_two}
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-200">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <h3 className="sm:text-4xl text-3xl font-medium tracking-tight">
                Misión
              </h3>
              <p className="mt-6 text-base lg:text-lg text-gray-300 pb-8">
                Nuestra misión es brindar una educación de alta calidad y
                accesible que permita a los adultos alcanzar su título de
                bachiller, ofreciendo un entorno de aprendizaje enriquecedor y
                apoyo personalizado. Nos comprometemos a superar las barreras
                educativas, fomentando la inclusión y la igualdad de
                oportunidades para adultos de todas las edades y antecedentes.
                Buscamos empoderar a nuestros estudiantes para que desarrollen
                habilidades académicas y personales, promoviendo el aprendizaje
                a lo largo de toda la vida y su participación activa en la
                sociedad.
              </p>
            </div>
            <div className="relative mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <h3 className="sm:text-4xl text-3xl font-medium tracking-tight">
                Visión
              </h3>
              <p className="mt-6 lg:text-lg text-base text-gray-300">
                Nuestra visión es ser un referente nacional e internacional en
                la educación de adultos, reconocidos por la excelencia
                académica, la innovación pedagógica y el compromiso con la
                formación continua. Visualizamos un entorno educativo inclusivo
                y diverso que fomente el desarrollo de habilidades críticas y
                ciudadanas en nuestros estudiantes, preparándolos para enfrentar
                los desafíos del siglo XXI. Aspiramos a ser un puente hacia
                nuevas oportunidades, donde la educación sea una fuerza
                transformadora en la vida de nuestros alumnos y en la sociedad
                en general.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
