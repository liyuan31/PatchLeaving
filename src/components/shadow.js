/**
 * Functions that handles shadow randering.
 *
 * Adapted from https://css-tricks.com/drawing-realistic-clouds-with-svg-and-css/
 */
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
        ${rs(
            "rgb(10,10,10)",
            "rgb(14,14,14)",
            "rgb(20,20,20)",
            "rgb(24,24,24)",
            "rgb(30,30,30)",
            "rgb(34,34,34)",
            "rgb(40,40,40)",
            "rgb(44,44,44)",
            "rgb(50,50,50)",
            "rgb(54,54,54)",
            "rgb(60,60,60)",
            "rgb(64,64,64)",
            "rgb(70,70,70)",
            "rgb(74,74,74)",
            "rgb(80,80,80)",
            "rgb(84,84,84)",
            "rgb(90,90,90)",
            "rgb(94,94,94)"
        )}
      `);
        //        ${rs("#808080", "#696969", "#A9A9A9", "#C0C0C0", "#D3D3D3")}
    }
    return ret.join(",");
}

export function update() {
    const cloud = document.querySelector("#cloud");
    cloud.style.boxShadow = boxShadows(100);
}
