function SetTimer(timerCount, number) {
    try {
        num = Number(number);
        if (isNaN(num)) {
            timerCount.innerHTML = `"${number}" is not a number`
            return false
        }
    } catch (error) {
        console.log(error);
    }

    timerCount.innerHTML = num;

    if (num == 0) {
        timerCount.innerHTML = "FINISH";
        console.log(`timer: FINISH`);
    } else {
        (function Num(num) {
            setTimeout(() => {
                if (num > 0) {
                    num = num - 1;
                    timerCount.innerHTML = num;
                    console.log(`timer: ${num}`);
                    if (num)
                        Num(num);
                }
                if (num == 0) {
                    timerCount.innerHTML = "FINISH";
                    console.log(`timer: FINISH`);
                }
            }, 1000);
        }(num))

        // И так можно тоже
        // (async function Num(num) {
        //     await setTimeout(() => {
        //         if (num > 0) {
        //             num = num - 1;
        //             timerCount.innerHTML = num;
        //             console.log(`timer: ${num}`);
        //             if (num)
        //                 Num(num);
        //         }
        //         if (num == 0) {
        //             timerCount.innerHTML = "FINISH";
        //             console.log(`timer: FINISH`);
        //         }
        //     }, 1000);
        // }(num))
    }
}

let el = document.querySelector(".timerBtn");
let timerCount = document.querySelector(".timerCount");
const timer = document.querySelector('#timer');


el.addEventListener("click", () => SetTimer(timerCount, timer.value), false);

