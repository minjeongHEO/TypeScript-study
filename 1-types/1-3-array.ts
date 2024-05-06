{
    // *Array
    //1.
    const fruits: string[] = ["🥨", "🍕", "🍗"];
    //2.
    const scopes: Array<string> = ["🥨", "🍕", "🍗"];

    // 전달된 인자를 함수 내부에서 변경하지 못하도록 => readonly
    // (object의 불변성을 보장한다.)
    // 2.Array<number>형식은 readonly사용 못한다.
    // 그래서 일관성있게 1.string[] 버전으로 작성하는 편 추구

    function printArray(fruits: readonly string[]) {
        // fruits.push('🌭') //readonly 때문에 변경 불가함
    }
    // *Tuple (권장 x) 인덱스로 접근하는 것은 가독성👎
    // 배열이긴 배열인데 서로 다른 타입을 함께 가지는 것
    // interface, type alias, class로 대체해서 사용하라.
    let student: [string, number];
    student = ["name", 123];
    student[0]; //name
    student[1]; //123
    const [name, age] = student;
}
