{
    /**
     * * Union Types : OR(또는)
     * 발생할 수 있는 모든 케이스 중 하나만 사용해야 할 때 사용하면 👍
     */
    type Direction = "left" | "right" | "up" | "down";
    function move(direction: Direction) {
        console.log(direction);
    }
    move("down");

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    // function login(): SuccessState | FailState {
    // 🔽
    // function login(id: string, pw: string): LoginState {
    //     return {
    //         response: {
    //             body: "logged in!",
    //         },
    //     };
    // }
    // 🔽 보통은 로그인은 promise
    function login(id: string, pw: string): Promise<LoginState> {
        return new Promise((resolve, reject) => {
            //밑의 코드는 예시
            setTimeout(() => {
                // 여기서는 간단히 성공 또는 실패를 가정하겠습니다.
                const isLoggedIn = Math.random() < 0.5; // 50%의 확률로 로그인 성공 또는 실패

                if (isLoggedIn) {
                    resolve({
                        response: {
                            body: "logged in!",
                        },
                    });
                } else {
                    reject({
                        reason: "Login failed",
                    });
                }
            }, 1000); // 1초 후에 로그인 결과 반환
        });
    }

    //printLoginState(state:LoginState)
    //success=>✨body
    //fail=>😥reason

    // function printLoginState(state: LoginState):void {
    // 아무것도 return 하지않는 void는 생략이 가능하다.
    function printLoginState(state: LoginState) {
        // state.response
        // state.resaon
        // typeScript는 모른다.
        // LoginState는 success | fail이기 때문에 코드를 작성하는 시점에는 어떤게 있는지 모름

        //1. in 키워드 사용하기 (비추👎)
        if ("response" in state) {
            console.log(`🎉${state.response.body}`);
        } else {
            console.log(`🎉${state.reason}`);
        }
        //2.다른 방식은 discriminated.ts 파일 참고!
    }
}
