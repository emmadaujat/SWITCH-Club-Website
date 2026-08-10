import ChunkyButton from "../ui/ChunkyButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-1 md:px-0">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <a href="/" className="flex items-center">
            <img
              className="h-20 w-auto object-contain"
              src="/Switch-logo-horizontal.png"
              alt="Switch Logo"
            />
          </a>
        </div>

        {/* Nav Bar Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/who-are-we"
            className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
          >
            who are we
          </a>
          <a
            href="/meet-the-team"
            className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
          >
            meet the team
          </a>
          <a
            href="/events"
            className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
          >
            events
          </a>
          <a
            href="/how-to-join"
            className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
          >
            how to join
          </a>
          <a
            href="/sponsorships"
            className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
          >
            sponsorships
          </a>
          <a
            href="/contact-us"
            className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
          >
            contact us
          </a>
        </nav>

        {/* TODO: */}
        {/* Social Icons as links (discord, instagram, email, rubric) */}
        <div className="hidden items-center md:flex">
          <div className=" justify-end flex">
            <Link href={"https://linktr.ee/switchrmit"}>
              <button className="uppercase bg-brand-purple hover:bg-white hover:text-brand-purple text-white font-bold rounded-lg text-sm border-2 border-black p-2 shadow-[4px_4px_0px_#000] transition">
                JOIN SWITCH <span> ★</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-brand-purple-dark ">
        <p className="font-regular text-sm text-white p-6">
          <span className="text-brand-pink p-4">★</span>
          SAFE SPACE FOR WOMEN IN TECH
          <span className="text-brand-lime p-4">★</span>
          JOIN THE MOVEMENT
          <span className="text-brand-pink p-4">★</span>
          SAFE SPACE FOR WOMEN IN TECH
          <span className="text-brand-lime p-4">★</span>
          JOIN THE MOVEMENT
          <span className="text-brand-pink p-4">★</span>
          SAFE SPACE FOR WOMEN IN TECH
          <span className="text-brand-lime p-4">★</span>
          JOIN THE MOVEME
        </p>
      </div>
    </header>
  );
}
