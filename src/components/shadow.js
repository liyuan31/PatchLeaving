/**
 * Functions that handles shadow randering.
 *
 * Adapted from https://css-tricks.com/drawing-realistic-clouds-with-svg-and-css/
 */
export function initialize() {
    function rn(from, to) {
        return ~~(Math.random() * (to - from + 1)) + from;
    }

    function rs() {
        return arguments[rn(1, arguments.length) - 1];
    }

    function boxShadows(max) {
        let ret = [];
        for (let i = 0; i < max; ++i) {
            ret.push(`
        ${rn(1, 100)}vw ${rn(1, 100)}vh ${rn(20, 40)}vmin ${rn(1, 20)}vmin
        ${rs("#0A0A0A", "#1E1E1E", "#333333", "#474747", "#5E5E5E")}
      `);
            //        ${rs("#808080", "#696969", "#A9A9A9", "#C0C0C0", "#D3D3D3")}
        }
        return ret.join(",");
    }

    const cloud = document.querySelector("#cloud");
    function update() {
        cloud.style.boxShadow = boxShadows(100);
    }

    window.addEventListener("load", update);
}

export function update() {
    document.querySelector("#cloud").style.boxShadow = boxShadows(100);
}
