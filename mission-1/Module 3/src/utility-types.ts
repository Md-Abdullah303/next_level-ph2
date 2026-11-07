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
