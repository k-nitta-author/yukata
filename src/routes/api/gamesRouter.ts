import { Router } from "express";

const gamesRouter = Router();

gamesRouter.get("/", (req, res) => {
    res.json({ message: "This is an example API route." });
});

gamesRouter.get("/previous", (req, res) => {
    res.json({ message: "This is an example API route." });
});

gamesRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `This is an example API route for blog ${id}.` });
});

gamesRouter.post("/", (req, res) => {
    const { title, content } = req.body;
    res.json({ message: `Blog post created with title: ${title}` });
});

gamesRouter.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    res.json({ message: `Blog post ${id} updated with title: ${title}` });
});

gamesRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Blog post ${id} deleted.` });
});

export default gamesRouter;