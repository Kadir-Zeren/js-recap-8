// const arr = [100, "CW", false];
// console.log(arr);
// const dizi = new Array(100, "CW", true);
// console.log(dizi);
// const dizi2 = new Array(10);
// console.log(dizi2);

// const colors = ["Red", "Green", "Blue"];
// console.log(colors[0]);
// console.log(colors[colors.length - 1]);
// console.log(colors[colors.length - 2]);
// console.log(colors[-1]);
// console.log(colors[56]);

// const colors = ["Red", "Green", "Blue"];
// console.log(typeof colors);

// console.log(Array.isArray(colors));
// console.log(colors instanceof Array);

// const variables = "1";
// console.log(Array.isArray(variables));
// console.log(variables instanceof Array);

// const colors = ["Red", "Green", "Blue"];

// colors[1] = "yellow";
// console.log(colors);
// colors[3] = 5;
// console.log(colors);

// let c = "Pink";
// colors[4] = c;
// console.log(colors);

// const colors = ["Red", "Green", "Blue"];
// colors[6] = 2;
// console.log(colors);
// console.log(colors.length);
// console.log(colors[3]);
// colors[100] = "Pink";
// console.log(colors);

// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);

// a = 6;
// console.log(b);

// let arr1 = [1, 2, "Three", false];
// const arr2 = arr1;

// console.log(arr1);
// console.log(arr2);
// arr1[0] = 0;
// console.log(arr1);
// console.log(arr2);

// const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];
// const cls = colors.slice();
// console.log(colors);
// console.log(cls);

// colors[0] = "Black";
// console.log(colors);
// console.log(cls);
// console.log(colors.slice(2, 4));
// console.log(colors.slice(-2));
// console.log(colors.slice(2));
// console.log(colors.slice(8));
// console.log(colors.slice(-2, 1));
// console.log(colors.slice(-3, -1));

// const colors = ["Red", "Green"];
// console.log(colors.length);
// let c = "White";
// console.log(colors.push("Blue", 2023, c));

// const car = ["Audi", "BMW"];
// const car2 = ["Ford", "Tesla", "Mercedes"];
// car.push(car2);
// car.push(...car2);
// console.log(car);
// console.log(car[2][2]);

// const car = ["Audi", "BMW"];
// console.log(car.pop());
// const silinen = car.pop();
// console.log(silinen);
// console.log(car.pop());

// const colors = ["Green", "Blue"];
// console.log(colors.unshift("Red"));
// console.log(colors);
// const car = ["Audi", "BMW"];
// const car2 = ["Ford", "Tesla", "Mercedes"];
// car.unshift(...car2);
// console.log(car);

// const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];
// console.log(colors.shift());
// console.log(colors);

// const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];
// console.log(colors.splice(2, 1));
// console.log(colors.splice(2));
// console.log(colors);
// console.log(colors.splice(2, 0, "White"));
// console.log(colors);

// const color1 = ["red", "green"];
// const color2 = ["blue", "orange"];
// const color3 = [10, true];
// console.log(color1);
// const destr = color1.push(...color2, ...color3);
// console.log(color1);

// const colors = ["Red", "Green", "Blue", "Brown", "Green"];
// console.log(colors.indexOf("Green"));
// console.log(colors.indexOf("Green", 3));
// console.log(colors.indexOf("green"));
// console.log(colors.lastIndexOf("Green"));
// console.log(colors.lastIndexOf("Green", -2));
// console.log(colors.lastIndexOf("Green", 3));
// console.log(colors.lastIndexOf("green"));

// const colors = ["Red", "Green", "Blue", "Green", "Brown", "yellow"];
// colors.reverse();
// console.log(colors);

// const arr = ["C", "l", "a", "r", "u", "s", "w", "a", "y"];
// console.log(arr.join());
// console.log(arr.join(" "));
// console.log(arr.join("-"));
// console.log(arr);

// const arr = [55, 5, 22, 2, 11, 1, 111];
// arr.sort();
// console.log(arr);

// arr.sort((a, b) => a - b);
// console.log(arr);

// arr.sort((a, b) => b - a);
// console.log(arr);

// const arr = ["red", "blue", "Purple", "white", "orange"];
// console.log(arr.includes("blue"));
// console.log(arr.includes("Blue"));
// console.log(arr.includes("blue", 2));

// const arr = [1, 2, [3, 4, 5], [6, 7, 8]];

// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[2][0]);
// console.log(arr[2][1]);
// console.log(arr[2][2]);
// console.log(arr[3]);

const arr = ["red", "Green", , , , , "blue"];
console.log(arr);

console.log(typeof arr[3]);
