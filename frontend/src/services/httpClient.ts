export const handleRequest = async<T, R = unknown>(
    payload: T,
    endpoint: string,
    method: string = "POST",
    headers: Record<string, string> = { "Content-Type": "application/json" }
): Promise<R> => {

    try {
        const res = await fetch(endpoint, {
            method,
            headers,
            body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Request failed!")

        return await res.json();
    } catch (err) {
        console.error(err);
    }
};