import { Router } from "express";

import blogRouter from "./api/blogRouter";
import gamesRouter from "./api/gamesRouter";
import musicRouter from "./api/musicRouter";
import artRouter from "./api/artRouter";

// Create a new router instance
const apiRouter = Router();

// Define your API routes here
apiRouter.use("/blog", blogRouter);
apiRouter.use("/games", gamesRouter);
apiRouter.use("/music", musicRouter);
apiRouter.use("/art", artRouter);

export default apiRouter;