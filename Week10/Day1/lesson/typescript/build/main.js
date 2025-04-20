"use strict";
/** type number */
let num = 1;
// num = 2
// num = "a"
/** type string */
let str;
str = "abc";
// str = 1
/** type boolean */
let bol = true;
bol = false;
// bol = 0
/** type any - try not to use much as posible */
let a;
a = 0;
a = "a";
a = true;
/** union type */
// type strnum = string | number
let myStrNum = "abc";
myStrNum = "abc";
myStrNum = 1;
myStrNum = true;
/** type array */
let srtArr = ["a", "b", "c"];
srtArr.push("string");
// srtArr.push(1);
let strNumArr = ["a", 4];
// let myTuple: tupleT;
// myTuple.push("a")
/** type object */
let myObj = {};
myObj = [];
const userJohn = {
    name: "John",
    age: 23,
    gender: 0,
};
const userMarry = {
    name: "Marry",
    age: 25,
};
const userDan = {
    name: "Dan",
    age: 11,
};
/** type Enum */
var Grade;
(function (Grade) {
    Grade["U"] = "60";
    Grade["D"] = "70";
    Grade["C"] = "80";
    Grade["B"] = "90";
    Grade["A"] = "100";
})(Grade || (Grade = {}));
console.log(Grade);
let statuscode;
statuscode = "loading";
let stud1 = {
    name: "a",
    grade: Grade.C,
    gender: "female",
    status: "success",
};
/** functions */
const sum = (a, b) => {
    return a + b + "";
};
const sumOrConcat = (a, b) => {
    /** type guard */
    if (typeof b === "string")
        return a + b + "";
    return a + b;
};
