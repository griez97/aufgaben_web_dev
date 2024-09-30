console.log("%cAufgabe_1", "background: gold; color: tomato;");
// Number-Methods-TS-Level-1_2

let num1 = 15.16698;
let num2 = 7.78714;
let num3 = "12.3";
let num4 = true;
let num5 = false;
let num6 = "321";
let num7 = "Supercode";

console.log(num1.toFixed(2));
console.log(num2.toFixed(2));
/* 
console.log(num3.toFixed(2));
console.log(num4.toFixed(2));
console.log(num5.toFixed(2));
console.log(num6.toFixed(2));
console.log(num7.toFixed(2)); 
*/

// umwandeln

let num3x = Number("12.3"); // 12.3
let num4x = Number(true);   // 1 (true converts to 1)
let num5x = Number(false);  // 0 (false converts to 0)
let num6x = Number("321");  // 321
let num7x = Number("Supercode"); // NaN (Not a Number, since "Supercode" is not numeric)

console.log(Number(num3x.toFixed(2)));
console.log(num4x.toFixed(2));
console.log(num5x.toFixed(2));
console.log(num6x.toFixed(2));
console.log(num7x.toFixed(2));

// Number-Methods-TS-Level-1_4

let a = Number(15.16698);
let b = Number(7.78714);
let c = Number("12.3");
let d = Number("3.14random");
let e = Number("32px");
let f = Number(true);
let g = Number(false);
let h = Number("321");
let i = Number("Supercode");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);

