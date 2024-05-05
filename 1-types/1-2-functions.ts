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
}
