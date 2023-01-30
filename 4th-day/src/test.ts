interface Person {
    age: number;
    [key: string]: string | number;
}

const p1: Person = {
    age: '25',
    name: 'abc',
    birth: 123,
    friends: [],
}
