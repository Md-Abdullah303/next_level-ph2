//* Utility Types
const updateProfile = (id, date) => {
    // some backend logic
};
// Partial is use for if we want to sent name ar something and other ar undifind then it help us
updateProfile("asdf", { name: "abd" }); //? here we try to update only name using normal way give error, but useing Partial that error are solve
const initialize = (config) => {
    // some logic
};
initialize({ apiKey: "asdfa", timeout: 3000 });
const preview = {
    name: "ABD",
    description: "asdlfjasl",
};
const directoryEntry = {
    id: 23,
    name: "Bob",
};
const apiUrls = {
    development: "http://localhost:3000",
    staging: "http://staging.api.com",
    production: "http://api.com",
};
export {};
