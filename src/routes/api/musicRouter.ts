import { Router } from "express";
import pug, { compile } from "pug";

const musicRouter = Router();

musicRouter.get("/", (req, res) => {

    const compiledFunction = pug.compileFile(
        "src/view/component/mediaDescription.pug"
    );

    compiledFunction({ descriptionText: "hello" });

    res.status(200).send(compiledFunction({ descriptionText: "hello" }));
});


// gets a single album
musicRouter.get("/d/:id", (req, res) => {
    const { id } = req.params;

    const compiledFunction = pug.compileFile("src/view/component/mediaDetail.pug");

    const mediaEntry = {
        mediaTitle: "Song 1",
        mediaDate: "2023-10-01",
        mediaDescription: "Description for song 1",
        mediaInfo: "Additional info for song 1",
        mediaImage: "/path/to/your/image.jpg"
    };

    try {
        const html = compiledFunction(mediaEntry);
        res.status(200).send(html);
    } catch (error) {
        res.status(500).send("Error rendering template");
    }
});

musicRouter.get("/previous", (req, res) => {
    var output = "";

    const previousMediaListItems = [
        { media_title: "Song 1", src: "", media_body: "Description for song 1" },
        { media_title: "Song 2", src: "", media_body: "Description for song 2" },
        { media_title: "Song 3", src: "", media_body: "Description for song 3" },
    ];

    const compiledFunction = pug.compileFile(
        "src/view/component/previousMediaListItem.pug"
    );

    previousMediaListItems.forEach((media) => {
        output += compiledFunction(media);
    });

    res.status(200).send(output);
});

musicRouter.post("/", (req, res) => {
    const { title, content } = req.body;
    res.json({ message: `Blog post created with title: ${title}` });
});

musicRouter.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    res.json({ message: `Blog post ${id} updated with title: ${title}` });
});

musicRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Blog post ${id} deleted.` });
});

export default musicRouter;