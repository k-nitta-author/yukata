import { Router } from "express";

const artRouter = Router();

artRouter.get("/", (req, res) => {
    res.json({ message: "This is an example API route." });
});

artRouter.get("/previous", (req, res) => {
    res.json({ message: "This is an example API route." });
});

artRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `This is an example API route for blog ${id}.` });
});

artRouter.post("/", (req, res) => {
    const { title, content } = req.body;
    res.json({ message: `Blog post created with title: ${title}` });
});

artRouter.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    res.json({ message: `Blog post ${id} updated with title: ${title}` });
});

artRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Blog post ${id} deleted.` });
});

export default artRouter;