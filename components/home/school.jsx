import Link from "next/link";
import ButtonSchool from "./button_school";

export default function School() {
  return (
    <div
      id="two-section"
      className="overflow-hidden bg-white py-20 sm:py-32 lg:pb-32 xl:pb-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pb-8 lg:mx-0 lg:max-w-3xl ">
          <h2 className="text-4xl font-bold tracking-tight text-black">
            Colegio CENTEC{" "}
          </h2>
        </div>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-0 xl:col-span-6">
              <h3 className="text-3xl font-medium tracking-tight text-gray-800">
                Tu Lugar de Descubrimiento y Crecimiento
              </h3>
              <p className="text-xl text-gray-700 mt-2">
                En el Colegio CENTEC, creemos que cada estudiante es una chispa
                de potencial esperando a encenderse. Nuestro compromiso es
                nutrir esa chispa y transformarla en una llama brillante de
                conocimiento, habilidades y pasión.
              </p>
              <h3 className="text-3xl font-medium tracking-tight text-gray-800 mt-4">
                Explora Nuestro Campus Virtual
              </h3>
              <div className="text-xl text-gray-700 space-y-3 mt-2">
                <p>
                  Visita nuestras aulas virtuales, conoce a nuestros profesores
                  apasionados y descubre cómo el Colegio CENTEC está dando forma
                  al futuro de la educación.
                </p>
                <Link
                  href="https://site2.q10.com/User/Login"
                  target="_blank"
                  className="text-blue-500 pt-2 underline "
                >
                  Visitar aula virtual
                </Link>
                <p>
                  ¡Únete a nosotros en esta emocionante aventura de aprendizaje!
                </p>
              </div>
              <ButtonSchool url="/colegio-centec" bgColor="bg-primaryBlue" />
            </div>
          </div>
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-0 xl:col-span-6">
            <div className="text-3xl text-gray-800 font-medium">
              ¿Por qué Elegirnos?
              <ul className="space-y-4 text-lg mt-2 font-normal text-gray-700">
                <li className="flex items-center space-x-2 bg-secondaryDarkBlue/10 p-2">
                  <span>
                    <strong> Excelencia Académica:</strong> Nuestro equipo de
                    educadores altamente calificados se dedica a brindar una
                    educación de calidad que va más allá de los libros de texto.
                    Fomentamos la curiosidad, el pensamiento crítico y la
                    creatividad.
                  </span>
                </li>
                <li className="flex items-center space-x-2 bg-secondaryDarkBlue/10 p-2">
                  <span>
                    <strong> Entorno de Apoyo:</strong> En el Colegio CENTEC, no
                    solo formamos mentes brillantes, sino también corazones
                    compasivos. Nuestra comunidad escolar es un lugar donde los
                    estudiantes se sienten seguros, valorados y apoyados.
                  </span>
                </li>
                <li className="flex items-center space-x-2 bg-secondaryDarkBlue/10 p-2">
                  <span>
                    <strong> Programas Innovadores:</strong> Desde robótica
                    hasta arte digital, ofrecemos programas que despiertan la
                    imaginación y preparan a los estudiantes para el mundo en
                    constante cambio.
                  </span>
                </li>
                <li className="flex items-center space-x-2 bg-secondaryDarkBlue/10 p-2">
                  <span>
                    <strong> Impacto Global:</strong> Nuestro alcance va más
                    allá de las fronteras. Colaboramos con emprendedores y
                    organizaciones de la Región y el País para impulsar la
                    innovación y el cambio positivo a mayor escala.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
