{
    //JavaScript
    //es6: let
    //es6: const

    // *number
    const num: number = 1;
    const num2: number = 0.1;
    const num3: number = -6;

    // *string
    const str: string = "hello";
    // boolean
    const bool: boolean = false;

    // *undefined
    //💩
    let name: undefined;
    name = "hello";
    //✨
    let age: number | undefined;
    age = undefined;
    age = 1;

    function find(): number | undefined {
        return undefined;
    }

    // *null
    //💩
    let person: null;
    person = "hello";
    //✨
    let person2: string | null;
    person2 = "hello";
    person2 = null;

    // *unknown(💩)
    let notSure: unknown = 0;
    notSure = "he";
    notSure = true;

    // *any(💩)
    let anything: any = 0;
    anything = "hello";

    // *void
    // 아무것도 리턴하지 않을 때
    function pring(): void {
        return;
    }
    let unusable: void = undefined; //💩

    // *never
    // 아무것도 리턴하지 않을 때2
    // 보통 쓰는 경우는 아래와 같다.
    function throwError(message: string): never {
        //타입 1.
        //  1-1. message -> server (log 던져주고)
        //  1-2. throw new Error(message);
        //  1-3. 서버가 죽으므로 never(아무것도 리턴안함)

        //타입 2.
        // while(true){
        // }

        throw new Error(message);
    }

    // *object
    let obj: object; //💩
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: "woody" });
    acceptSomeObject({ animal: "dog" });
    //심지어 배열도 전달가능함
    let obj2: object = [1, 4];
}
