type Common2 = {
    name: string,
    age: number,
    gender: string
  }
  
  type Animal2 = {
    howl: string
  }
  
  type Cat2 = Common2 & Animal2;
  type Dog2 = Common2 | Animal2;
  
  let dog2: Dog2 = {
    howl: 'dogggg'
  }
  let cat2: Cat2 = {
    age: 3,
    gender: 'C',
    name: 'CC',
    howl: 'cattttt'
  }