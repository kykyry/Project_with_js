function modifyBackground() {
    let block = document.querySelector(".gradient");
    let info = document.querySelector(".gradient__info");

    switch (document.querySelector("#type").value) {
        case 'linear':
            switch (document.querySelector("#number").value) {
                case 'two':
                    info.innerHTML = `Background: linear-gradient(to left, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
                    block.style.background = info.innerHTML.slice(12);
                    break;

                case 'three':
                    info.innerHTML = `Background: linear-gradient(to left, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
                    block.style.background = info.innerHTML.slice(12);
                    break;

                case 'four':
                    info.innerHTML = `Background: linear-gradient(to left, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
                    block.style.background = info.innerHTML.slice(12);
                    break;

                case 'five':
                    info.innerHTML = `Background: linear-gradient(to left, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
                    block.style.background = info.innerHTML.slice(12);
                    break;
            }
            break;

        case 'conic':
            switch (document.querySelector("#number").value) {
                case 'two':
                    info.innerHTML = `Background: conic-gradient(#${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
                    block.style.background = info.innerHTML.slice(12);
                    break;

                case 'three':
                    info.innerHTML = `Background: conic-gradient(#${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
                    block.style.background = info.innerHTML.slice(12);
                    break;

                case 'four':
                    info.innerHTML = `Background: conic-gradient(#${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
                    block.style.background = info.innerHTML.slice(12);
                    break;

                case 'five':
                    info.innerHTML = `Background: conic-gradient(#${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
                    block.style.background = info.innerHTML.slice(12);
                    break;
            }
            break;

        case 'radial':
            switch (document.querySelector("#number").value) {
                case 'two':
                    info.innerHTML = `Background: radial-gradient(#${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
                    block.style.background = info.innerHTML.slice(12);
                    break;

                case 'three':
                    info.innerHTML = `Background: radial-gradient(#${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
                    block.style.background = info.innerHTML.slice(12);
                    break;

                case 'four':
                    info.innerHTML = `Background: radial-gradient(#${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
                    block.style.background = info.innerHTML.slice(12);
                    break;

                case 'five':
                    info.innerHTML = `Background: radial-gradient(#${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
                    block.style.background = info.innerHTML.slice(12);
                    break;
            }
            break;
    }

    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }
    function getRandomHex() {
        let hexString = getRandomInt(0, 255).toString(16)
        if (hexString.length % 2) {
            hexString = '0' + hexString;
        }
        return hexString;
    }
}

let el = document.querySelector(".gradient__button");
el.addEventListener("click", modifyBackground, false);