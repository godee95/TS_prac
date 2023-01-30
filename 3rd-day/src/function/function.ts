// any type 오류를 나게 하자
// tsconfig.json => "noImplicitAny": true
function sum(a: number, b: number): number {
    return a + b;
  }