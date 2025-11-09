export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-[family-name:var(--font-inter)] text-gray-600 text-sm md:text-base">
            © 2025 FOAR. Tecnología aplicada a resultados reales.
          </p>
          <div className="flex items-center gap-6 text-sm md:text-base">
            <a
              href="#privacidad"
              className="font-[family-name:var(--font-inter)] text-gray-600 hover:text-[#FF0000] transition-colors"
            >
              Política de privacidad
            </a>
            <a
              href="#contacto"
              className="font-[family-name:var(--font-inter)] text-gray-600 hover:text-[#FF0000] transition-colors"
            >
              Contacto
            </a>
            <a
              href="mailto:hola@foar.com"
              className="font-[family-name:var(--font-inter)] text-gray-600 hover:text-[#FF0000] transition-colors"
            >
              hola@foar.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
