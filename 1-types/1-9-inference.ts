/**
 * * Type Inference (타입 추론)
 * 알아서 자동으로 타입이 결정되는 것
 */
let text: string = "hello";
let text2 = "hello";

function print(message = "hello") {
    console.log(message);
}
print("hello");

function add(x: number, y: number): number {
    return x + y;
}

const result = add(1, 2);
