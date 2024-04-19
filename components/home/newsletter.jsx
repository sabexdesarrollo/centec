import Link from "next/link";

const INF = [
  {
    data: "Más de 10 años de experiencia en la Región. ",
  },
  {
    data: " Crédito Educativo Directo, sin intereses, sin codeudor y sin estudio de crédito.",
  },
  {
    data: "Contamos con docentes especializados y comprometidos con tu desarrollo académico.",
  },
  {
    data: " Alianzas y convenios empresariales que facilitan tu integración al mercado laboral.",
  },
];

export default function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-16 lg:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div>
          {INF.map((item, index) => (
            <ul
              key={index}
              className="space-y-4 text-lg my-2 font-normal text-gray-100"
            >
              <li className="flex items-center space-x-2 p-2">{item.data}</li>
            </ul>
          ))}
        <Link href="/politicas-de-privacidad" target="_blank" className="bg-primaryBlue p-2 rounded-lg">Ver Politicas de Privacidad</Link>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
