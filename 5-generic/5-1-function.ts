{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);

  // 제네릭을 사용하면,,,
  // 사용하는 사람이 어떤 타입인지 결정할 수 있다.
  // 유연하지만, 타입을 보장받을 수 있다.
  
  // function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
  //   if (arg == null) {
  //     throw new Error('not valid number!');
  //   }
  //   return arg;
  // }

  // 보통 짧게 Type의 T를 쓴다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  
  const number = checkNotNull(123);
  // const boal = checkNotNull(true);
  const boal:boolean = checkNotNull(true);
}
