import type { IncomingMessage } from "node:http";

export const getAuthFromHeaders = (req: IncomingMessage) => {
	const authHeader = req.headers["x-authorization"];
	return authHeader;
};
