function objectCompare(obj1, obj2, result) {
    let background = document.querySelector(".objectsBg");
    let comment = document.querySelector(".objectComment");

    try {
        if (typeof (obj1) === "string" && typeof (obj2) === "string") {
            try {
                comment.innerHTML = ""
                obj1 = JSON.parse(obj1);
                obj2 = JSON.parse(obj2);

                if (typeof (obj1) !== "object" || typeof (obj2) !== "object") {
                    comment.innerHTML = "Not correct objects";
                    background.style.background = "white";
                    return false;
                }
            }
            catch (error) {
                comment.innerHTML = "Not correct objects";
                background.style.background = "white";
                return false;
            }
        }

        let arrKey1 = Object.keys(obj1);
        let arrKey2 = Object.keys(obj2);

        if (arrKey1.length == arrKey2.length && obj1.length === obj2.length) { //obj1.length === obj2.length для того, чтоб отличить пустой массив ([].length = 0) от пустого объекта ({}.length = undefined)
            arrKey1.forEach(element => {
                let val1 = obj1[element];
                let val2 = obj2[element];

                if (!result) {
                    background.style.background = "red";
                    return result
                }

                if (typeof (val1) === 'object' && typeof (val2) === 'object') {
                    result = objectCompare(val1, val2, result);
                } else if (val1 != val2) {
                    result = false
                    background.style.background = "red";
                    return result;
                }
            });
            !result ? background.style.background = "red" : background.style.background = "green";
            return result
        } else {
            background.style.background = "red";
            result = false
            return result;
        }

    } catch (error) {
        console.log(error)
    }

}

let el = document.querySelector(".object__button");
const objStr1 = document.querySelector('#obj1');
const objStr2 = document.querySelector("#obj2");


objStr1.oninput = () => {
    objectCompare(objStr1.value, objStr2.value, true);
}

objStr2.oninput = () => {
    objectCompare(objStr1.value, objStr2.value, true);
}