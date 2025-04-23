/** daily */

import { url } from "inspector";

type User = {
  type: "user";
  name: string;
  age: number;
};

type Product = {
  type: "product";
  id: number;
  price: number;
};

type Order = {
  type: "order";
  orderId: string;
  amount: number;
};

type Student = {
  type: "student";
  orderId: string;
  amount: number;
};

type DataItem = User | Product | Order;

/** type guards */
const isUser = (item: DataItem): boolean => {
  return item.type === "user";
};

const isProduct = (item: DataItem): boolean => {
  return item.type === "product";
};

const isOrder = (item: DataItem): boolean => {
  return item.type === "order";
};

// const greatUser = (user: User): string => {
//   return `Hi, ${user.name}, age: ${user.age}`;
// };

// const formatProduct = (product: Product): string => {
//   return `${product.id}, price: ${product.price}`;
// };

// const showOrder = (order: Order): string => {
//   return `${order.orderId}, amount: ${order.amount}`;
// };
const isType = <T extends { type: string }>(
  item: { type: string },
  expectedType: T["type"]
): item is T => {
  return item.type === expectedType;
};

const handleData = (data: DataItem[]): string[] => {
  return data.map((item) => {
    if (isType<User>(item, "user")) {
      // const user = item as User;
      return `Hi, ${item.name}, age: ${item.age}`;
    }
    if (isType<Product>(item, "product")) {
      // const product = item as Product;
      return `${item.id}, price: ${item.price}`;
    }
    if (isType<Order>(item, "order")) {
      // const order = item as Order;
      return `${item.orderId}, amount: ${item.amount}`;
    } else {
      return "Unknown type";
    }
  });
  // return data.map((item) => {
  //   if (isUser(item)) {
  //     const user = item as User;
  //     return `Hi, ${user.name}, age: ${user.age}`;
  //   } else if (isProduct(item)) {
  //     const product = item as Product;
  //     return `${product.id}, price: ${product.price}`;
  //   } else if (isOrder(item)) {
  //     const order = item as Order;
  //     return `${order.orderId}, amount: ${order.amount}`;
  //   } else {
  //     return "Unknown type";
  //   }
  // });

  // return data.map((item) => {
  //   switch (item.type) {
  //     case "user":
  //       return greatUser(item);
  //     case "product":
  //       return formatProduct(item);
  //     case "order":
  //       return showOrder(item);
  //     default:
  //       return "Unknown type";
  //   }
  // });
};

const dataArr: DataItem[] = [
  { type: "user", name: "Alice", age: 30 },
  { type: "order", orderId: "1q2w3e", amount: 10 },
  { type: "product", id: 123, price: 999 },
  { type: "product", id: 444, price: 444 },
];

// console.log(handleData(dataArr));

type A = { id: number; age: number };
type B = A & { name: string };

type C = {
  id: number;
  name: string;
};

type abc = "string" | "number";

interface E {
  id: number;
}

interface F extends A {
  name: string;
}

/** more than one generic */
const mergeArray = <T, K, Z>(
  arr1: T[],
  arr2: K[],
  arr3: Z[]
): (T | K | Z)[] => {
  return [...arr2, ...arr1, ...arr3];
};

const nums: number[] = [1, 2, 3];
const strs: string[] = ["a", "b", "c"];

// console.log(mergeArray(strs, dataArr, nums));

/**
 * Create a function isObj - get a generic type as parameter (arg: T)
 * retrun type { arg, is: true/false}
 */

interface BoolCheck<T> {
  arg: T;
  is: boolean;
}

const isObj = <T>(arg: T): BoolCheck<T> => {
  if (typeof arg === "object" && !Array.isArray(arg) && arg !== null) {
    return { arg, is: true };
  }
  return { arg, is: false };
};
// console.log(isObj([]));

/** Utility types */
type Post = {
  id: number;
  title: string;
  body: string;
};

type PartialPost = Partial<Post>;

const post1: Post = {
  id: 1,
  title: "title",
  body: "bla bla bla",
};

const updatePost = (post: Post, update: Partial<Post>) => {
  return { ...post, ...update };
};

// console.log(post1);

// console.log(updatePost(post1, {id: 2}));

/** Pick or Omit */
type MiniPost = Pick<Post, "id" | "body">;
type OtherPost = Omit<Post, "title" | "id">;

/** Exlude / Exctrat */
type Grade = "A" | "B" | "C" | "D" | "F";
type PassGrade = Exclude<Grade, "D" | "F">;
type FailedGrade = Extract<Grade, "D" | "F">;

/** NonNullbale */
type NullString = string | null | undefined | boolean;
type NotNullString = NonNullable<NullString>;

/** return type */
const createUser = (name: string, age: number) => {
  return { name, age };
};

type User = ReturnType<typeof createUser>;

/** Parameters Type */
type UserParams = Parameters<typeof createUser>;

/** Promise */
type Robot = {
  id: number;
  name: string;
};
type PostT = {
  id: number;
  title: string;
};
/**https://jsonplaceholder.typicode.com/users */
async function fetchData<T>(url: string): Promise<T[]> {
  const res = await fetch(url);
  const data = (await res.json()) as T[];
  return data;
}

const userData: Robot[] = await fetchData<Robot>(
  "https://jsonplaceholder.typicode.com/users"
);
const postData = await fetchData<PostT>(
  "https://jsonplaceholder.typicode.com/posts"
);

console.log(userData);
const lowerUser: Robot[] = userData.map((user: Robot) => {
  return {
    id: user.id,
    name: user.name,
  };
});
console.log(lowerUser);


