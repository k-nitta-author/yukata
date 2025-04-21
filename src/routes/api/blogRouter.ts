import { Router } from "express";

const blogRouter = Router();

// Define your API routes here
blogRouter.get("/", (req, res) => {
    res.json({ message: "This is an example API route." });
});

blogRouter.get("/previous", (req, res) => {
    res.json({ message: "This is an example API route." });
});

blogRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `This is an example API route for blog ${id}.` });
});

blogRouter.post("/", (req, res) => {
    const { title, content } = req.body;
    res.json({ message: `Blog post created with title: ${title}` });
});

blogRouter.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    res.json({ message: `Blog post ${id} updated with title: ${title}` });
});

blogRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Blog post ${id} deleted.` });
});

export default blogRouter;

