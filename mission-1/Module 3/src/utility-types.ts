//* Utility Types

//* Partial

interface User {
  id: string;
  name: string;
  email: string;
}

const updateProfile = (id: string, date: Partial<User>) => {
  // some backend logic
};

// Partial is use for if we want to sent name ar something and other ar undifind then it help us
updateProfile("asdf", { name: "abd" }); //? here we try to update only name using normal way give error, but useing Partial that error are solve

//* Required

interface Config {
  apiKey?: string;
  timeout?: number;
}

const initialize = (config: Required<Config>) => {
  // some logic
};

initialize({ apiKey: "asdfa", timeout: 3000 });

//* Pick

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

const preview: ProductPreview = {
  name: "ABD",
  description: "asdlfjasl",
};

//* Omit

interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}

type PublicEmployee = Omit<Employee, "salary" | "nid">;

const directoryEntry: PublicEmployee = {
  id: 23,
  name: "Bob",
};
