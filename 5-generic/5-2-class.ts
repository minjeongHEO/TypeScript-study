// ---------------- 제네릭을 사용한 클래스 선언 ----------------
// either: a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}
const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); //5

const best = new SimpleEither({name: 'ellie'}, 'hello');

// ---------------- 제네릭을 사용하지 않는 클래스 선언 ----------------
class NoGenericSimpleEither {
  private leftValue: number;
  private rightValue: number;

  constructor(leftValue: number, rightValue: number) {
    this.leftValue = leftValue;
    this.rightValue = rightValue;
  }

  left(): number {
    return this.leftValue;
  }

  right(): number {
    return this.rightValue;
  }
}

const NoGenericEither = new NoGenericSimpleEither(4, 5);
console.log(NoGenericEither.left()); // 4
console.log(NoGenericEither.right()); // 5


// ---------------- 값을 사용하는 경우 vs. 함수를 사용하는 경우 ----------------
// 인터페이스에서 함수 타입을 정의할 때, 함수 선언과 화살표 함수 타입 사이에는 중요한 차이가 있다.

// interface Either<L, R> {
  // 값을 사용하는 경우
//   left: L;  // L 타입의 값
//   right: R; // R 타입의 값

  // 함수를 사용하는 경우
//   left: () => L;
//   right: () => R;
// }


// 1. 값 타입
interface EitherValue<L, R> {
  left: L;
  right: R;
}

const eitherValue: EitherValue<number, string> = {
  left: 5,
  right: 'hello'
};

console.log(eitherValue.left); // 5
console.log(eitherValue.right); // 'hello'

// 여기서는 `left`와 `right`가 단순 값이므로, 함수를 호출하는 것이 아니라, **값**을 바로 출력합니다.

// 2. 함수 타입
interface EitherFn<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEitherFn<L, R> implements EitherFn<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}

  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const eitherFn = new SimpleEitherFn(4, 'hello');
console.log(eitherFn.left()); // 4
console.log(eitherFn.right()); // 'hello'

// 여기서는 `left()`와 `right()`가 함수로 호출되어, `leftValue`와 `rightValue` 값을 반환합니다.

// 결론

// 화살표 함수 타입 `() => L`을 사용하는 이유는 **해당 값이 함수로 호출될 수 있음을 명시**하기 위해서입니다. 
// 함수로 선언된 `left()`나 `right()`는 호출 시에 어떤 로직을 처리할 수 있고, 그 결과로 값을 반환할 수 있습니다. 

// 반면에 단순한 값으로 선언된 경우는 바로 값을 가지고 있어야 하며, 계산이나 로직 처리는 불가능합니다.

// 따라서, 함수가 필요한 상황에서는 화살표 함수 타입을 선언하여 사용하고, 
// 단순한 값을 나타내려면 값을 타입으로 선언하는 것이 적합합니다.