import type { MetadataRoute } from "next";

const baseUrl = "https://switchrmit.vercel.app"; // swap this for your real domain once you have one

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/who-are-we",
    "/meet-the-team",
    "/events",
    "/how-to-join",
    "/sponsorships",
    "/contact-us",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
