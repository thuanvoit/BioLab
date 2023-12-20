import cors from "cors";
import express, { Request, Response } from "express";
import { getProtocols } from "./protocols";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.post("/blog", (req: Request, res: Response) => {
    //create new blog post
});

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running");
});

app.get("/protocols", (req: Request, res: Response) => {
    try {
        console.log("Getting protocol list...");
        res.status(200).send([getProtocols()]);
    }
    catch (error) {
        res.status(500).send("Error getting protocol list");
    }
});

app.get("/blog/:post", (req: Request, res: Response) => {
    //get a specific post
});

app.delete("/blog/:post", (req: Request, res: Response) => {
    //delete a post
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});