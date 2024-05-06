/**
 * * Intersection Types: & (그리고)
 * 다양한 타입들을 하나로 묶어서 선언 할 수 있다.
 */
{
    type Student = {
        name: string;
        scrore: number;
    };
    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }
    // Student, Student 두가지 타입의 속성이 모두 있어야함
    internWork({
        name: "Woody",
        scrore: 1,
        employeeId: 123,
        work: () => {
            console.log("work!");
        },
    });
}
