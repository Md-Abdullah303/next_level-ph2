//* Generic

const wrapInArray = <T>(value: T) => {
  return [value];
};

const stringArr = wrapInArray<string>("abd");
const numberArr = wrapInArray(232);

// numberArr.map((item) => item.toUpperCase())

interface User {
  name: string;
  role: number;
}

interface Blog {
  title: string;
  description: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes: UserResponse = {
  data: {
    name: "asdf",
    role: 23,
  },
  statusCode: 23,
  success: true,
};
