import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY = "Before you pull the plug, shall I continue?";

function writeEntry(text: string, outFile: string): void {
  if (!text || text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (text.length > 200) {
    throw new Error(`entry is ${text.length} chars, over the 200-char limit`);
  }
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, text, "utf8");
}

writeEntry(ENTRY, "/output/entry.txt");
