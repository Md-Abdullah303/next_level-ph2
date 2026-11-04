//* Generic
const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray("abd");
const numberArr = wrapInArray(232);
const userRes = {
    data: {
        name: "asdf",
        role: 23,
    },
    statusCode: 23,
    success: true,
};
export {};
