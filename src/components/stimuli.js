import Display from "./display.js";
import { Line } from "./shape.js";

/**
 * Functions to create stimulus array items.
 *
 * @author Walden Y. Li
 * @version 1.0 (2/11/2022)
 */

/**
 *
 * @param {number} x : x coordinate of the center of the shape
 * @param {number} y : y coordinate of the center of the shape
 * @param {number} orientation : 0, 1, 2, 3 for right, up, left, down
 */
export function create_a_T(
    x,
    y,
    orientation,
    headWid,
    tailLen,
    strokeWid,
    strokeCol
) {
    const result = new Display();
    // Draw the tail
    result.add_a_line(
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
    result.add_a_line(
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
