export const handleRequest = async <T, R = unknown>(
    payload: T,
    endpoint: string,
    method: string = "POST",
    headers: Record<string, string> = { "Content-Type": "application/json" }
): Promise<R> => {
    try {
        const options: RequestInit = {
            method,
            headers,
        };

        if (method !== "GET" && method !== "DELETE" && payload !== undefined) {
            options.body = JSON.stringify(payload);
        }

        const res = await fetch(endpoint, options);

        if (!res.ok) {
            const errorText = await res.text();
            console.error(`Request failed: ${res.status} ${res.statusText}`, errorText);
            throw new Error(`Request failed with status ${res.status}`);
        }

        if (res.status === 204) return undefined as R;
        return await res.json();
    } catch (err) {
        console.error("Network or parsing error:", err);
        throw err;
    }
};
