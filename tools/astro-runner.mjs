import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

process.env.ASTRO_TELEMETRY_DISABLED = "1";

const astroBin = process.platform === "win32"
  ? join("node_modules", ".bin", "astro.cmd")
  : join("node_modules", ".bin", "astro");

if (!existsSync(astroBin)) {
  console.error("Astro is not installed yet. Run npm install first.");
  process.exit(1);
}

const result = spawnSync(astroBin, process.argv.slice(2), {
  env: process.env,
  shell: process.platform === "win32",
  stdio: "inherit"
});

process.exit(result.status ?? 1);
