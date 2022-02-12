/**
 * The main script of Patch Leaving task written in modulized procedural js.
 *
 * @author Walden Y. Li
 * @version 1.0 (2/11/2022)
 */

import Display from "./display.js";
import { Rect, Circle, Line, Text, Polygon } from "./shape.js";
import * as shadow from "./shadow.js";
import * as stimuli from "./stimuli.js";

shadow.initialize();

const d = new Display();
const s = new Rect();

const t = stimuli.create_a_T();
const data = [t];

d3.select(".stimuli_svg").data(data).enter().append("rect");
