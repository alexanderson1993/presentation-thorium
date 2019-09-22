const fs = require("fs");

const a = fs.readFileSync("./presentation/index.mdx", "utf8");

fs.writeFileSync(
  "./notes.txt",
  a
    .split("---")
    .map(t =>
      t.includes("Notes")
        ? t.split("<Notes>")[1] && t.split("<Notes>")[1].replace("</Notes>", "")
        : null
    )
    .map((t, i) => `${i}:${t ? t : ""}`)
    .join("\n")
);
