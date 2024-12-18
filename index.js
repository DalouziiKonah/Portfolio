import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import compression from "compression"; // Import compression middleware

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Enable gzip compression for all responses
app.use(compression());

// Serve static files from the "konah" directory with caching headers
app.use(
  express.static(__dirname + "/konah", {
    maxAge: "1d",
  })
);
app.use(
  express.static(__dirname + "/public_copy", {
    maxAge: "1d",
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public_copy/index.html");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}.`);
});
