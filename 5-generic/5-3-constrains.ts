interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}
/**
 * 자바 언어와 다르게, 타입스크립트 에서는 Structural Typing이라는게 존재
 * implements 키워드를 쓰지 않아도, 오브젝트가 특정한 인터페이스에 해당하는 구조 (함수들)를 따라간다면 암묵적으로 허용해 줘요 :)
 * 그럼에도, 코드를 구현할때는 되도록! implements 키워드를 사용하는게 좋아요. 그래야 코드를 작성하는 시점에 구현하는 인터페이스의 함수 구현을 누락했다면 즉각적으로 에러를 확인할 수 있죠.

class FullTimeEmployee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

https://www.typescriptlang.org/docs/handbook/type-compatibility.html
https://medium.com/@thejameskyle/type-systems-structural-vs-nominal-typing-explained-56511dd969f4
*/

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

/**
 * 왜 이렇게 제네릭을 사용하면 에러가 날까?
function pay<T>(employee: T): T {
  // employee.pay //❌Error
  return employee;
}
제네릭은 일반적인 타입이고, 어떤타입이든 들어올수가 있기 때문에
코딩하는 이시점에는 employee에 pay메서드가 있는지, string인지 number인지 알 수 없다.
이런 타입에 대한 정보가 없기 때문에 employee.pay를 사용할 수가 없다.
*/

// 제네릭이긴 제네릭인데 Employee를 확장한 것만 되도록
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);


// ---------------------------------------------
// https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints

const obj = {
  name: 'ellie',
  age: 20,
};

const obj2 = {
  animal: '🐕',
};

console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐕


// function getValue<T extends obj | obj2, a[b]>(a,b) {
function getValue<T,K extends keyof T>(obj:T, key:K):T[K]{
  return obj[key]
}

