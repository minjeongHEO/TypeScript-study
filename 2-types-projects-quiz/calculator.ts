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
    ): number {
        switch (type) {
            case "add":
                return CalculateNum1 + CalculateNum2;
            case "substract":
                return CalculateNum1 - CalculateNum2;
            case "multiply":
                return CalculateNum1 * CalculateNum2;
            case "divide":
                return CalculateNum1 / CalculateNum2;
            case "remainder":
                return CalculateNum1 % CalculateNum2;
            default:
                throw Error("unknown command");
        }
    }

    console.log(calculate("add", 1, 3)); // 4
    console.log(calculate("substract", 3, 1)); // 2
    console.log(calculate("multiply", 4, 2)); // 8
    console.log(calculate("divide", 4, 2)); // 2
    console.log(calculate("remainder", 5, 2)); // 1
}
