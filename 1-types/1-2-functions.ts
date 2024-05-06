{
    // JS
    function jsAdd(num1, num2) {
        return num1 + num2;
    }
    // ✨TS
    function tsAdd(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JS
    function jsFetchNum(id) {
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }
    // ✨TS
    function tsFetchNum(id: string): Promise<number> {
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    //* Optional Parameter
    // "?:" 인자를 전달해도 되고, 전달하지 않아도 된다.
    function printName(firstName: string, lastName?: string) {
        console.log(firstName, lastName);
    }
    printName("Steve", "Jobs");
    printName("Ellie");
    printName("Anna", undefined);

    //* Default Parameter
    function printMessage(message: string = "default message") {
        console.log(message);
    }
    printMessage();

    //* Rest Parameter
    //인자의 개수 제한 없이 사용가능
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3));
    console.log(addNumbers(1, 2, 3, 4));
}
