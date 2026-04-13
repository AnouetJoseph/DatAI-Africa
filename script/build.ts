import { build as viteBuild } from "vite";
import { rm, cp } from "fs/promises";

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();
  
  // Create 404.html for static deployments (SPAs)
  console.log("creating 404.html for static routing...");
  await cp("dist/public/index.html", "dist/public/404.html");

  console.log("Static build completed successfully.");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
