import "./v1-module-config.js";
import "./union.js";
import "./v3-type-vs-interface.js";
import "./v7-narrowing.js";
import "./v9-generic.js";
import "./v10-promies.js";
const validateAgeAsync = async (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
console.log(await validateAgeAsync(10));
// console.log();
