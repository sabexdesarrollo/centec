import Link from "next/link";
import ButtonSchool from "./button_school";
import { FaWhatsapp } from "react-icons/fa";

export default function OpenEnrollment() {
  return (
    <div
      id="two-section"
      className="overflow-hidden bg-primaryBlue py-20 sm:py-32 lg:pb-32 xl:pb-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl ">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            ¡Inscripciones abiertas!
          </h2>
          <p className="text-xl text-gray-200 mt-2">
            ¿Estás listo para un viaje educativo extraordinario? En el{" "}
            <strong>
              {" "}
              Centro de Formación y Capacitación Empresarial CENTEC
            </strong>
            , las Inscripciones Abiertas están en marcha. Únete a nuestra
            comunidad y descubre un mundo de aprendizaje, creatividad y
            crecimiento. <br /> ¡Reserva tu lugar hoy mismo y prepárate para un
            emocionante año escolar!
          </p>
          <ButtonSchool
            url="/admisiones-y-financiacion#inscripcion"
            bgColor="bg-secondaryGreen"
          />
          <div className="mt-6 text-xl text-gray-200">
            <p>Para más información contactanos via <Link href="https://api.whatsapp.com/send?phone=573105949059" target="_blank" className="text-green-500 bg-gray-800/90 p-1 rounded-lg hover:scale-105" ><FaWhatsapp className="inline-flex w-6 h-6"/>WhatsApp</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
}
