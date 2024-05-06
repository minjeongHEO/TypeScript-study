/**
 * Let's make a calculator 🧮
 */
{
    type CalculateType =
        | "add"
        | "substract"
        | "multiply"
        | "divide"
        | "remainder";

    function calculate(
        type: CalculateType,
        CalculateNum1: number,
        CalculateNum2: number
    ) {
        if (type === "add") return CalculateNum1 + CalculateNum2;
        if (type === "substract") return CalculateNum1 - CalculateNum2;
        if (type === "multiply") return CalculateNum1 * CalculateNum2;
        if (type === "divide") return CalculateNum1 / CalculateNum2;
        if (type === "remainder") return CalculateNum1 % CalculateNum2;
    }

    console.log(calculate("add", 1, 3)); // 4
    console.log(calculate("substract", 3, 1)); // 2
    console.log(calculate("multiply", 4, 2)); // 8
    console.log(calculate("divide", 4, 2)); // 2
    console.log(calculate("remainder", 5, 2)); // 1
}
