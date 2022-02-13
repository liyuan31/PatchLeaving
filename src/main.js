import Display from "./components/display.js";
import { Rect, Circle, Line, Text, Polygon } from "./components/shape.js";
import * as shadow from "./components/shadow.js";
import * as stimuli from "./components/stimuli.js";
import DisplayWidget from "./components/displayWidget.js";

/**
 * The main script of Patch Leaving task written in modulized procedural js.
 *
 * @author Walden Y. Li
 * @version 1.0 (2/11/2022)
 */

shadow.initialize();

const d = new Display();
const s = new Rect();

const t = stimuli.create_a_T(50, 50, 0, 10, 10, 2, "black");
const widget = new DisplayWidget(d3.select(".stimuli"));

widget.draw(t);
