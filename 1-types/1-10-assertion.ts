/**
 * Type Assertions 💩 (타입 강요)
 * 타입이 없는 js와 연동되는 경우도 있기 때문에 불가피하게 써야하는 경우가 있음
 * 💥타입을 100% 장담할 때만 써야한다.
 */
{
    function jsStrFunc(): any {
        return "hello";
    }
    const result = jsStrFunc();

    // result.length //ts는 any 타입이면,  문자열 타입에서 이용가능한 api 사용 불가함

    // 함수에서 문자열 return하는게 확신한다면,
    //1. as 키워드
    (result as string).length;
    //2. <타입>
    (<string>result).length;

    // 문자열을 확신했는데 숫자가 return 된다면??
    // 에러나 경고가 발생하지 않는다!!
    // 그리고 실행했을 때 에러발생!!😨

    const wrong: any = 5;
    console.log((wrong as number[]).push(1)); //😨

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers(); //numbers는 number일 수도, undefined일 수도 있는 상태
    // numbers.push(2); //😨 이때 push를 써버리면 error!

    numbers!.push(2); //무조건 undefined이 아님을 설정 해버리는 것
    const numbers2 = findNumbers()!; //또는 함수호출 시 사용할 수도있다

    /** ------------------------------------------------------- */
    const button = document.querySelector("class");
    if (button) {
        button.nodeValue;
    }
    //또는
    button?.nodeValue;
    // 대신 button이 null인 경우 접근한 값이 undefined이 될 수 있기 때문에 그 경우에도 맞게 잘 동작하도록 처리해 줘야 하겠죠?

    //위에처럼 사용해야하는데, 정말 button이 있다고 100% 장담할 때는,
    const button2 = document.querySelector("class")!;
}
