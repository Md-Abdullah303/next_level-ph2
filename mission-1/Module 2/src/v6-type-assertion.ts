// Type assertion
//! 200% sure howe ai sob use korte hobe

//* "as" syntax

type Status = "pending" | "approved" | "rejected";

const something: string = "pending";

const showStatus = (status: Status) => {
  console.log("Your current application status is " + status);
};

showStatus(something as Status);

//* non-null assertion

interface Config {
  port?: number;
}

const config: Config = {
  port: 3444,
};

const currentPort: number = config.port!;

//* constant assertion

const userInfo = {
  name: "Abdullah",
  roll: 3434,
  department: "CST",
} as const;

// userInfo.name = "ridme"
