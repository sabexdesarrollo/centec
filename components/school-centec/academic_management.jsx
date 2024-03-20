export default function AcademicManagement() {
  return (
    <section
      id="gestion-academica"
      className="relative overflow-hidden py-20 sm:py-32 lg:py-32 bg-primaryBlue"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pb-8 lg:mx-0 lg:max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100">
            Gestión Académica
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-200">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h3 className="sm:text-4xl text-3xl font-medium tracking-tight">
              Verificaciones Académicas
            </h3>
            <p className="py-6 text-base lg:text-lg text-gray-300">
              Teniendo en cuenta la <strong>Ley de Protección de datos</strong>,
              se debe adjuntar carta de autorización firmada por el estudiante o
              egresado. Las solicitudes recibidas después de las{" "}
              <strong>4:00 p.m.</strong> se radican el día siguiente; a partir
              de ese día cuentan los tres días hábiles para la respuesta. La
              solicitud debe incluir Carta de solicitud con Nombre de La Empresa
              o Institución, NIT, Nombre del Estudiante o egresado, Tipo y
              Número de documento, Ciclo (CLEI); y carta de autorización. Enviar
              solicitud al correo: <strong>colegio@educentec.edu.co</strong>
            </p>
          </div>
          <div className="relative mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h3 className="sm:text-4xl text-3xl font-medium tracking-tight">
              Solicitud de certificados
            </h3>
            <p className="mt-6 lg:text-lg text-base text-gray-400">
              Texto faltante...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
