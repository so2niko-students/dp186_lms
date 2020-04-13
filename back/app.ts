import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => res.send("Hi"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is started on the PORT ${PORT}`));
