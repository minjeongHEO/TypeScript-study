/**
 * * Enum
 * 여러가지의 관련된 상수 값들을 한곳에 모아서 정의할 수 있도록 정의하는 것
 *
 * union타입으로 심플하게 대체 가능한 경우라면 enum 보다는 union을 더 선호,
 * enum 타입이 적합할 경우가 있어요 (아래코드 참고)
 */

// 이렇게 복잡한 union대신
type Errors2 =
    | "error message simple version"
    | "error message complicated version"
    | "error message complicated detail version";

// 이렇게 해줄수도 있을 것 같아요
// 그럼 변수를 할당하는 곳에서 긴 문자열을 (union인 경우) 계속 반복해서 쓰는것이 아니라
// 깔끔하게 아래 처럼 쓸 수 있겠죠? :)
enum Errors {
    Short = "error message simple version",
    Long = "error message complicated version",
    Detail = "error message complicated detail version",
}

/** --------------------------------------------------------- */
//JS
const MAX_NUM = 6;
const MAX_STUDENTS_PER_CLASS = 10;
const MONDAY = 0;
const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 1,
});
const dayOfToday = DAYS_ENUM.MONDAY;

//✨TS
//enum은 첫글자만 대문자로 작성한다.
// type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
enum Days {
    // Monday = 1,
    Monday, //0
    Tuesday, //1
    Wednesday, //2
}
//enum에 따로 값을 정하지 않으면
// 0부터 증가하여 자동으로 할당됨
//1부터 시작하고 싶으면 1을 지정해놓으면 된다.
// 단, 문자열은 수동적으로 전부 할당해줘야한다.
console.log(Days.Tuesday);

const day = Days.Monday; //타입추론 된 것
let day2: Days = Days.Monday;
day2 = Days.Tuesday;
console.log(day);

//
