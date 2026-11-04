const fetchUser = async () => {
    try {
        const res = await fetch("/api/v10/some-endpoint");
        const data = (await res.json());
        if (!res.ok || !data.success) {
            throw new Error(`Failed fetch user Data: ${data.massage}`);
        }
        return data.data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error("Something was wrong!");
        }
    }
};
const userData = await fetchUser();
export {};
