import Display from "./display.js";
import * as s from "./settings.js";
import { Line } from "./shape.js";
import * as util from "./utilities.js";

export default function generate_display() {
    const result = new Display();
    const gridPos = get_grid_pos();
    const pool = util.range(gridPos.size);
    util.shuffle(pool);
    // 1. Add targets
    for (let i = 0; i < s.n_targets; i++) {
        const gridi = pool.pop();
        const grid = gridPos.get(gridi);
        const x = grid[0];
        const y = grid[1];
        // determine color of this item
        const rgb =
            util.rand_float(s.greyscale_min, s.greyscale_max, true) * 255;
        const color = `rgb(${rgb}, ${rgb}, ${rgb})`;
        // create <Line> objects
        const T = create_a_T(
            x,
            y,
            util.randi(0, 3, true),
            s.head_width,
            s.tail_length,
            s.stroke_width,
            color
        );
        result.add_lines(T);
    }
    // 2. Add L shapes
    for (let i = 0; i < s.n_distractors; i++) {
        const gridi = pool.pop();
        const grid = gridPos.get(gridi);
        const x = grid[0];
        const y = grid[1];
        // determine color of this item
        const rgb =
            util.rand_float(s.greyscale_min, s.greyscale_max, true) * 255;
        const color = `rgb(${rgb}, ${rgb}, ${rgb})`;
        // create <Line> objects
        const T = create_an_L(
            x,
            y,
            util.randi(0, 3, true),
            s.head_width,
            s.tail_length,
            s.stroke_width,
            color
        );
        result.add_lines(T);
    }
    return result;
}

function get_grid_pos() {
    let result = new Map();
    let i = 0; // grid number, to be set as the keys of the output <Map>
    let x =
        s.screen_x_border +
        (s.screen_x - 2 * s.screen_x_border) / s.n_grid_items_x / 2; // initialize x coord.
    for (let j = 0; j < s.n_grid_items_x; j++) {
        let y =
            s.screen_y_border +
            (s.screen_y - 2 * s.screen_y_border) / s.n_grid_items_y / 2; // initialize y coord.
        for (let k = 0; k < s.n_grid_items_y; k++) {
            result.set(i, [x, y]);
            i++;
            y += (s.screen_y - 2 * s.screen_y_border) / s.n_grid_items_y;
        }
        x += (s.screen_x - 2 * s.screen_x_border) / s.n_grid_items_x; // inc. x coord. to the next col.
    }
    return result;
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

/**
 *
 * @param {number} x : x coordinate of the center of the shape
 * @param {number} y : y coordinate of the center of the shape
 * @param {number} orientation : 0, 1, 2, 3 for right, up, left, down
 */
function create_an_L(
    x,
    y,
    orientation,
    headWid,
    tailLen,
    strokeWid,
    strokeCol
) {
    const result = [];
    // Draw the tail
    // Determine the offset direction (randomly choose between two)
    let offset = s.TL_offset;
    if (Math.random() < 0.5) {
        offset = offset * -1;
    }
    result.push(
        new Line(
            x - (tailLen + strokeWid) / 2,
            y + offset,
            x + (tailLen + strokeWid) / 2,
            y + offset,
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
