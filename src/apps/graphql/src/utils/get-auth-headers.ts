export function getAuthHeaders(token: string): Record<string, string> {
	return {
		"X-Authorization": token
	};
}
