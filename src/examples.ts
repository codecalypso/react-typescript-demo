//resource: https://channel9.msdn.com/posts/Anders-Hejlsberg-Introducing-TypeScript

//Example 1:
// function bar(x: {a: number; b: string }){
//   return x.a
// }

//Example 2:
//type declaration

// interface Thing {
//   a: number;
//   b: string
// }
//
// function bar(x: Thing) {
//   return x.a
// }
//we dont have a type annotation on the return type of our function,
// we infer that bar is a function that takes a thing and returns a number.
//
// var n = bar({a: "cat", b: "hello"})

//We can also pass in functions

// interface Thing {
//   a: number;
//   b: string
//   foo(s: string, n?: number); string
// }

// function bar(x: Thing) {
//   return x.foo("abc", 5)
// }

//overloading support

// interface Thing {
//   a: number;
//   b: string
//   foo(s: string); string;
//   foo(n: number); number;
// }

// function bar(x: Thing){
//   return x.foo("abc", 5)
// }


// function makeAccumulator() {
//   var sum = 0;
//   return{
//     clear: function () { sum = 0 }
//     add: function (value: number) { sum += value},
//     result: function () { return sum}
//   }
// }
//
// var a = makeAccumulator();
// a.add(5);

// class Tracker {
//   count = 0;
//   start() {
//     window.onmousemove = function(e) {
//       this.count ++;
//       console.log(this.count);
//     }
//   }
// }
//
// var t = new Tracker();
// t.start();

//Arrow functions lexical scope

// class Tracker {
//   count = 0;
//   start() {
//     window.onmousemove = e => {
//       this.count ++;
//       console.log(this.count);
//     }
//   }
// }
//
// var t = new Tracker();
// t.start();


//Supports internal modules

//module Utils{
// export class Tracker {
//   count = 0;
//   start() {
//     window.onmousemove = e => {
//       this.count ++;
//       console.log(this.count);
//     }
//   }
// }
//}
// var t = new Utils.Tracker();
// t.start();
