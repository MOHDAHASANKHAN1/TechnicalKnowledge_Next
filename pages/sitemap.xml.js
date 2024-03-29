import axios from "axios";

function sitemap_xml() {
  return null;
}

export async function getServerSideProps({ res }) {
  const result = await axios.get(
    "https://technical-knowledge-backend-node-rest.vercel.app/Blogs/Read/All"
  );

  let data = result.data.Blogs;

  res.setHeader("Content-Type", "text/xml");
  res.write(
    `<?xml version="1.0" encoding="UTF-8"?>
		    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://technicalknowledge.vercel.app/</loc>
                <changefreq>daily</changefreq>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>1.0</priority>
            </url>
            <url>
                <loc>https://technicalknowledge.vercel.app/About</loc>
                <changefreq>daily</changefreq>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.8</priority>
            </url>
            <url>
                <loc>https://technicalknowledge.vercel.app/Contact</loc>
                <changefreq>daily</changefreq>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.8</priority>
            </url>
            ${data
              .map(
                (data) =>
                  ` <url>
                <loc>https://technicalknowledge.vercel.app/${
                  data.pathname
                }</loc>
                <changefreq>daily</changefreq>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.8</priority>
            </url>
                `
              )
              .join("")}
            <url>
                <loc>https://technicalknowledge.vercel.app/Singleblog/9-Tips-And-Tricks-To-Learn-Programming-Faster</loc>
                <changefreq>daily</changefreq>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.8</priority>
            </url>
            </urlset>`
  );
  res.end();

  return {
    props: {},
  };
}

export default sitemap_xml;
