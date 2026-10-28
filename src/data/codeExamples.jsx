export const TypeScript = `let name: string = "John";
console.log(name);`;

export const StaticTyping = `let age: number = 25;
console.log(age);`;

export const TypeInference = `let username = "Simbu"; // TypeScript infers string
console.log(username);

let age = 25; // TypeScript infers number
console.log(age);`;

export const InterfaceExample = `interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Simbu",
  age: 25,
};

console.log(person);`;

export const TypeAlias = `type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20,
};

console.log(point);`;

export const UnionType = `// 1. Basic Union Type
let value: string | number;

value = "Simbu";
value = 25;

// 2. String Literal Union
type Color = "red" | "green" | "blue";
let color: Color = "red";

// 3. Array Union
let numbers: (number | string)[] = [1, 2, 3, "4", "5"];

// 4. Object Union
type User = {
  name: string;
  age: number;
};

let user: User | null = {
  name: "Simbu",
  age: 25,
};

// 5. Discriminated Union
type Order = {
  orderNumber: string;
};

type SuccessResponse = {
  status: "success";
  data: Order[];
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

const handle = (res: ApiResponse): void => {
  if (res.status === "success") {
    console.log(res.data);
  } else {
    console.log(res.message);
  }
};

// 6. Union Type in Function
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  return String(a) + String(b);
}

// 7. Nullable Union
let order: Order | null = null;

if (order !== null) {
  console.log(order.orderNumber);
}`;

export const IntersectionType = `type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  salary: number;
};

type PersonEmployee = Person & Employee;

const employee: PersonEmployee = {
  name: "Simbu",
  age: 25,
  employeeId: 101,
  salary: 30000,
};

console.log(employee);`;

export const Generics = `function identity<T>(arg: T): T {
  return arg;
}

function getData<T>(value: T): T {
  return value;
}

const result1 = getData<string>("Hello");
const result2 = getData<number>(100);

console.log(result1);
console.log(result2);`;

export const Enum = `enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const direction: Direction = Direction.Up;
console.log(direction);`;

export const EnumExample = `enum Role {
  Admin = "admin",
  User = "user",
}

const role: Role = Role.Admin;
console.log(role);`;

export const Tuple = `let user: [string, number] = ["Simbu", 25];

console.log(user);`;

export const Any = `let value: any;

value = "Simbu";
value = 25;
value = true;

console.log(value);`;

export const Void = `function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, TypeScript!");`;

export const Never = `function throwError(message: string): never {
  throw new Error(message);
}

// Example usage:
// throwError("Something went wrong");`;

export const TypeAssertion = `let value: unknown = "Simbu";

let strLength: number = (value as string).length;
console.log(strLength);

// DOM Type Assertion
const input = document.querySelector("#username") as HTMLInputElement;

// Example API response type
type ApiOrder = {
  orderNumber: string;
};

// Example:
// const data = response.data as ApiOrder;`;

export const Unknown = `let value: unknown;

value = "Simbu";
value = 25;

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

if (typeof value === "number") {
  console.log(value.toFixed(2));
}`;

export const NonNullAssertion = `let value: string | null = "Simbu";
// Using non-null assertion operator
let length: number = value!.length;
console.log(length);

const user = localStorage.getItem("user")!;
const role = user?.role ?? "user";
`;
