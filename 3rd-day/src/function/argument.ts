function sum2(a: number, b?: number): number {
    return a + b;
    
  }
  console.log(sum2(10, 20)); // 30
//   sum(10, 20, 30); // error, too many parameters
  console.log(sum2(10)); // error, too few parameters