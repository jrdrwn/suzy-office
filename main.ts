import { mkdirSync, writeFileSync } from "node:fs";

const JOKE_OPEN = "The meeting room is booked until 2027 ";
const JOKE_MIDDLE = "by someone who left ";
const JOKE_CLOSE = "in 2024.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE_OPEN + JOKE_MIDDLE + JOKE_CLOSE, "utf8");
