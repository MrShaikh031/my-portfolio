import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
const baseUrl = "https://my-portfolio-one-iota-64.vercel.app";

return [
{
url: baseUrl,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 1,
},
{
url: `${baseUrl}/about`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.8,
},
{
url: `${baseUrl}/skills`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.8,
},
{
url: `${baseUrl}/work`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.8,
},
{
url: `${baseUrl}/contact`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.7,
},
{
url: `${baseUrl}/work/student-performance`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.7,
},
];
}
