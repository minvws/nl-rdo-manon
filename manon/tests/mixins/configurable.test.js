import { join } from "node:path";
import sassTrue from "sass-true";

sassTrue.runSass(
  { describe, it },
  join(import.meta.dirname, "configurable.test.scss")
);
