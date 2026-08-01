import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-navy-700 bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src="/images/logo-white-full.png"
              alt="Pragma Development"
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              custom web apps, SEO, and digital products
              for businesses that need results.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <ul className="space-y-2 text-sm">
              <li>pragmadev.info@gmail.com</li>
              <li>+94 70 364 2741</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-navy-700 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Pragma Development. All rights
            reserved.
          </p>
          <p>pragmatic by design.</p>
        </div>
      </div>
    </footer>
  );
}
