import app from "../src/server";
import { createServer } from "http";
import { parse } from "url";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const server = createServer((req2, res2) => {
    app(req2, res2);
  });

  server.emit("request", req, res);
}
