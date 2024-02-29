import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full h-screen lg:p-100 bg-gray-950">
      <div className="relative items-center w-full h-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full h-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="max-w-5xl inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-transparent text-8xl lg:text-9xl lg:max-w-7xl">
                404
              </h1>
              <h2 className="max-w-5xl text-5xl font-bold leading-none tracking-tighter text-neutral-300 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Pagina no encontrada
              </h2>

              <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-300">
                La página que estas buscando pudo ser removida, sufrió un cambio
                de nombre o temporalmente no está disponible.
              </p>
              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <Link href="/">
                    <button
                      className="items-center font-bold block px-5 py-4 text-base text-center text-white transition duration-500 ease-in-out transform bg-primaryBlue lg:px-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 animate-pulse"
                    >
                      Volver al inicio
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}