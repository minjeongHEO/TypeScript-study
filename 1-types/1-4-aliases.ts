{
    // 기본적인 타입 정의

    /**
     * * Type Aliases
     */
    type Text = string;
    const name: Text = "ellie";
    const address: Text = "korea";
    type Num = number;

    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: "Woody",
        age: 12,
    };

    /**
     * * String Literal TYpes
     */
    type Name = "name";
    let woodyName: Name;
    woodyName = "name";

    type JSON = "json";
    const json: JSON = "json";
}
