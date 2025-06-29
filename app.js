// Route that throws error directly
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("pages/index", { title: "Mini Messageboard", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("pages/new");
});

app.post("/new", (req, res) => {
  let { author, message } = req.body;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/");
});
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
