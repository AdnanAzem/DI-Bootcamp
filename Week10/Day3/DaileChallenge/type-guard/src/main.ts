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

type Data = User | Product | Order;
function handleData(arr: Data[]): string[] {
    return arr.map((item) => {
      if (item.type === "user") {
        return `Hello ${item.name} you are ${item.age} years old`;
      } else if (item.type === "product") {
        return `The price for product ${item.id} is ${item.price}`;
      } else if (item.type === "order") {
        return `Order ${item.orderId} costs ${item.amount}`;
      }
        return "Unknown data type encountered";
    });
}

const mixedData: Data[] = [
  { type: 'user', name: 'Alice', age: 30 },
  { type: 'product', id: 123, price: 19.99 },
  { type: 'order', orderId: 'ORD-456', amount: 99.50 }
];

const results = handleData(mixedData);
console.log(results);