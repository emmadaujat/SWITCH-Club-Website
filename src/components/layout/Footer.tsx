export default function Footer() {
  return (
    <footer className="bg-brand-purple-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Logo + link columns sit side-by-side on desktop, stack on mobile */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Logo */}
          <div className="shrink-0">
            <img
              src="/Switch-logo-verticle-light.png"
              alt="Switch Logo"
              className="h-28 w-auto object-contain"
            />
          </div>

          {/* 4 columns: SWITCH blurb / Explore / Get Involved / Follow us */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            {/* About blurb */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <span className="text-brand-pink">★</span> SWITCH{" "}
                <span className="text-brand-pink">★</span>
              </h3>
              <div className="mt-3 text-sm leading-relaxed text-brand-light">
                <p>Society for women and gender diverse students in technology</p>
                <p>@ RMIT University</p>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <span className="text-brand-pink">★</span> Explore{" "}
                <span className="text-brand-pink">★</span>
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="/who-are-we"
                    className="text-sm text-brand-light transition hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/meet-the-team"
                    className="text-sm text-brand-light transition hover:text-white"
                  >
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a
                    href="/events"
                    className="text-sm text-brand-light transition hover:text-white"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <span className="text-brand-pink">★</span> Get Involved{" "}
                <span className="text-brand-pink">★</span>
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="/how-to-join"
                    className="text-sm text-brand-light transition hover:text-white"
                  >
                    Join the club
                  </a>
                </li>
                <li>
                  <a
                    href="/sponsorships"
                    className="text-sm text-brand-light transition hover:text-white"
                  >
                    Sponsor us
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <span className="text-brand-pink">★</span> Follow us{" "}
                <span className="text-brand-pink">★</span>
              </h3>
              <ul className="p-3 flex gap-2">
                <li>
                  <a href="https://www.linkedin.com/in/rmit-switch-admin-60b26b197/">
                    <img
                      className="h-7 w-auto object-contain"
                      src="/linkedin.png"
                      alt="linkedin logo link"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/rmitswitch/">
                    <img
                      className="h-7 w-auto object-contain"
                      src="/instagram.png"
                      alt="instagram logo link"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://discord.com/invite/K3qDPGx9Xs">
                    <img
                      className="h-7 w-auto object-contain"
                      src="/discord.png"
                      alt="discord logo link"
                    />
                  </a>
                </li>
              </ul>
              <p className="text-sm text-slate-400">Got questions? Send us an email!</p>
              <form className="mt-4 sm:flex sm:max-w-md gap-x-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full min-w-0 rounded-md border-0 bg-white/5 px-4 py-2 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
                />
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className=" pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-400">
            &copy; 2026 SWITCH — RMIT University Club. All rights reserved.
            <p className="italic">EST. 2019</p>
          </div>
          {/* TODO: check if this needs to be included */}
          <div className="flex gap-x-6 text-xs text-slate-400">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
