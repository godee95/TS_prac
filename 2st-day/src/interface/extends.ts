interface Person {
    name: string;
  }
  
  interface Developer extends Person {
    skill: string;
  }
  
  let fe = {} as Developer; // Developer 타입이다.
  
  fe.name = 'josh';
  fe.skill = 'TypeScript';