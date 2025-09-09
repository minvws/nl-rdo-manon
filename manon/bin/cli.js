#!/usr/bin/env node

import pkg from "../package.json" with { type: "json" };
import { program } from "commander";
import { prepareIcons } from "./commands/prepare-icons.js";

await program
  .name("manon")
  .version(pkg.version, "-v, --version")
  .addCommand(prepareIcons)
  .parseAsync();
