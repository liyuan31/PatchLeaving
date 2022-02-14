import Display from "./display.js";
import * as s from "./settings.js";

export default function generate_display() {
    const result = new Display();
}

/**
 *
 * @param {number} x : x coordinate of the center of the shape
 * @param {number} y : y coordinate of the center of the shape
 * @param {number} orientation : 0, 1, 2, 3 for right, up, left, down
 */
function create_a_T(x, y, orientation, headWid, tailLen, strokeWid, strokeCol) {
    const result = [];
    // Draw the tail
    result.push(
        new Line(
            x - (tailLen + strokeWid) / 2,
            y,
            x + (tailLen + strokeWid) / 2,
            y,
            strokeCol,
            strokeWid,
            undefined,
            undefined,
            `rotate(${orientation * -90}, ${x}, ${y})`
        ) // counter-clockwise rotation
    );
    // Draw the head
    result.push(
        new Line(
            x - tailLen / 2,
            y - headWid / 2,
            x - tailLen / 2,
            y + headWid / 2,
            strokeCol,
            strokeWid,
            undefined,
            undefined,
            `rotate(${orientation * -90}, ${x}, ${y})`
        )
    );
    return result;
}
