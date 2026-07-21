import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-brand-light">
      {/* TOP SECTION */}
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TOP LEFT: text + buttons */}
        <div className=" items-center text-center flex flex-col">
          <h1 className=" text-6xl md:text-8xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:6px_black] [paint-order:stroke_fill]">
            SWITCH
          </h1>

          <div className="mt-6 rounded-lg border-2 border-black bg-white p-4 shadow-[4px_4px_0px_#000]">
            <p className="font-medium text-13px text-brand-purple-dark">
              Society for women and gender diverse students in technology @ RMIT
            </p>
          </div>

          {/* green banner */}
          <div className="mt-6 flex flex-col items-center self-stretch">
            <div className="rounded-full border-2 border-black bg-brand-lime p-2">
              <p className="font-bold uppercase text-2xl text-black">✦ NEW MEMBERS WELCOME ✦</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-30 flex gap-6">
            <button className="bg-brand-purple hover:bg-white hover:text-brand-purple hover:p-5 text-white font-bold rounded-lg border-2 border-black p-4 shadow-[4px_4px_0px_#000] transition">
              JOIN THE CLUB<span> ★</span>
            </button>
            <button className="bg-white hover:bg-brand-purple hover:text-white hover:p-5 text-brand-purple font-bold rounded-lg border-2 border-black p-4 shadow-[4px_4px_0px_#000] transition">
              SEE EVENTS <span> →</span>
            </button>
          </div>
        </div>

        {/* TOP RIGHT: photo cluster placeholder */}
        <div className="max-w-7xl mx-auto">
          <div className="rounded-lg border-2 border-black bg-brand-pink justify-end p-3">
            <p className="text-black text-xl font-bold"> Current Members: 350</p>
          </div>

          <div className="relative h-[420px] bg-brand-purple/10 rounded-lg border-2 border-dashed border-brand-purple/30 flex items-center justify-center">
            <p className="text-brand-purple-dark/50 text-sm">photo cluster goes here</p>
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION: OUR MISSION */}
      <div className=" bg-brand-purple p-10">
        {/* OUR MISSION - background card */}
        <div className=" mx-auto max-w-xl  rotate-2 rounded-md border-2 border-black bg-brand-cream p-4 shadow-[4px_4px_0px_#000]">
          {/* OUR MISSION - Heading */}
          <div className="p-2 mt-5 flex rotate-4 ">
            <div className="rounded-full border-2 border-black bg-brand-pink p-2">
              <p className="font-bold uppercase text-xl text-black">our mission</p>
            </div>
          </div>
          {/* OUR MISSION - BODY TEXT */}
          <p className="p-2 font-bold text-lg text-black">
            “We're building a community where women and underrepresented people in tech can learn,
            connect, and thrive together.”
          </p>
          {/* BUTTONS */}
          <div className=" mt-6 justify-end flex">
            <button className="uppercase bg-white hover:bg-brand-purple hover:text-white text-black font-bold rounded-lg text-sm border-2 border-black p-2 shadow-[4px_4px_0px_#000] transition">
              Read our story <span> →</span>
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: UPCOMING EVENT */}
      <div className=" bg-brand-purple-LIGHT p-10">
        {/* UPCOMING EVENT - background card */}
        <div className=" mx-auto max-w-7xl rotate-[-2deg] px-10 py-1 grid grid-cols-1 md:grid-cols-2 items-center rounded-md border-2 border-black bg-brand-lime p-4 shadow-[4px_4px_0px_#000]">
          {/* LEFT: heading + body + button, grouped together */}
          <div className="flex flex-col">
            {/* UPCOMING EVENT - Heading */}
            <div className="rounded-full border-2 border-black bg-white p-2 rotate-2 self-start ">
              <p className="font-bold uppercase text-xl text-black">upcoming event 🚨</p>
            </div>

            {/* UPCOMING EVENT - BODY TEXT */}
            <p className="p-2 font-bold text-2xl text-black">Welcome Night with Fire+</p>
            <p className="p-4 font-regular text-l text-black">
              📅 30th July 2026 · 📍 Carlton Club Hotel ·{" "}
              <p className="font-semibold mt-2">Come have fun with us as we welcome semester 2.</p>
            </p>

            {/* BUTTON */}
            <div className=" p-4 justify-start flex">
              <button className="uppercase bg-brand-purple hover:bg-brand-purple hover:text-white text-white font-bold rounded-lg text-sm border-2 border-black p-2 shadow-[4px_4px_0px_#000] transition">
                buy a ticket now <span> →</span>
              </button>
            </div>
          </div>

          {/* RIGHT: photo placeholder */}
          <div className="m-4 rounded-lg flex items-center justify-center">
            <div>
              <img
                className="h-70 w-auto "
                alt="switch-team-welcome-night-sem1-2026"
                src="/welcome-night-sem1-2026.JPG"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
