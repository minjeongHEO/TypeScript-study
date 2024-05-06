{
    type SuccessState = {
        result: "successs";
        response: {
            body: string;
        };
    };
    type FailState = {
        result: "fail";
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function login(id: string, pw: string): Promise<LoginState> {
        return new Promise((resolve, reject) => {
            //밑의 코드는 예시
            setTimeout(() => {
                // 여기서는 간단히 성공 또는 실패를 가정하겠습니다.
                const isLoggedIn = Math.random() < 0.5; // 50%의 확률로 로그인 성공 또는 실패

                if (isLoggedIn) {
                    resolve({
                        result: "successs",
                        response: {
                            body: "logged in!",
                        },
                    });
                } else {
                    reject({
                        result: "fail",
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
    function printLoginState2(state: LoginState) {
        //1. in 키워드 사용하기 (비추👎)
        if ("response" in state) {
            console.log(`🎉${state.response.body}`);
        } else {
            console.log(`🎉${state.reason}`);
        }

        //Discriminated Union 🚀
        //2.LoginState에 공통적인 프로퍼티(result)을 넣어서 사용한다.
        if (state.result === "successs") {
            console.log(`🎉${state.response.body}`);
        } else {
            console.log(`🎉${state.reason}`);
        }
    }
}
