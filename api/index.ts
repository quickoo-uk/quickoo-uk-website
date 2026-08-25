import { createServer } from "../server/index.js";

// An Express app is itself a (req, res) handler, which is exactly what
// @vercel/node invokes. No Lambda adapter needed here.
export default createServer();
