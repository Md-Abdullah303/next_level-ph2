interface User {
  name: string;
  role: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
  massage: string;
}

const fetchUser = async (): Promise<User> | undefined => {
  try {
    const res = await fetch("/api/v10/some-endpoint");
    const data = (await res.json()) as ApiResponse<User>;

    if (!res.ok || !data.success) {
      throw new Error(`Failed fetch user Data: ${data.massage}`);
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Something was wrong!");
    }
  }
};

const userData = await fetchUser();
