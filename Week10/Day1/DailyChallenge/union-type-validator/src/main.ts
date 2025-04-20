function validateUnionType(value: any, allowedTypes: string[]): boolean {
  const actualType = typeof value;
  return allowedTypes.includes(actualType);
}

const allowedTypes: string[] = ["number", "string", "boolean"];
const value: number = 123;
const isValid = validateUnionType(value, allowedTypes);
console.log(isValid);

const value2: string[] = ['aaa', 'bbb'];
const isValid2 = validateUnionType(value2, allowedTypes);
console.log(isValid2);