/**
 * Functions to create stimulus array items.
 *
 * @author Walden Y. Li
 * @version 1.0 (2/11/2022)
 */

import Display from "./display";
import { Line } from "./shape";

/**
 *
 * @param {number} x : x coordinate of the center of the shape
 * @param {number} y : y coordinate of the center of the shape
 * @param {number} orientation : 0, 1, 2, 3 for right, up, left, down
 */
export function create_a_T(x, y, orientation) {
    const result = new Display();
    // Draw the tail
    result.add_a_line(
        new Line(
            x -
                (this._setting.T_tail_length + this._setting.TL_stroke_width) /
                    2,
            y,
            x +
                (this._setting.T_tail_length + this._setting.TL_stroke_width) /
                    2,
            y,
            this._setting.TL_stroke_color,
            this._setting.TL_stroke_width,
            undefined,
            undefined,
            `rotate(${orientation * -90}, ${x}, ${y})`
        ) // counter-clockwise rotation
    );
    // Draw the head
    result.add_a_line(
        new Line(
            x - this._setting.T_tail_length / 2,
            y - this._setting.T_head_width / 2,
            x - this._setting.T_tail_length / 2,
            y + this._setting.T_head_width / 2,
            this._setting.TL_stroke_color,
            this._setting.TL_stroke_width,
            undefined,
            undefined,
            `rotate(${orientation * -90}, ${x}, ${y})`
        )
    );
    return result;
}
