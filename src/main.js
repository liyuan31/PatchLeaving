import Display from "./components/display.js";
import { Rect, Circle, Line, Text, Polygon } from "./components/shape.js";
import * as shadow from "./components/shadow.js";
import * as stimuli from "./components/stimuli.js";
import DisplayWidget from "./components/displayWidget.js";
import * as s from "./components/settings.js";
import generate_display from "./components/displayGenerator.js";
import * as dist from "./components/distributions.js";
import Keyboard from "./components/keyboard.js";

/**
 * The main script of Patch Leaving task written in modulized procedural js.
 *
 * @author Walden Y. Li
 * @version 1.0 (2/11/2022)
 */

(function main() {
    shadow.initialize();

    let nTargs = dist.rand_geo_50();

    /**
     * Constant variables
     */
    const max_time = 20 * 60 * 1000;

    /**
     * Experiment data storage object
     */
    const data = { window_load_timestamp: Math.round(performance.now()) };

    /**
     * Internal state variables
     */
    let time_elapsed = 0;
    let consent_obtained = 0;
    let full_screened = 0;
    let current_trial_number = 0;
    let data_submitted = 0;

    /**
     * Temporary variables
     */
    let start = 0;
    let end = 0;

    /**
     * Checks internal state of the current experiment, and handle events triggered
     * by a keypress representing an advance to next step.
     */
    function next_step() {
        // If the current time elaspsed is greater than max duration, end experiment
        if (time_elapsed > max_time) {
            end_experiment();
        } else {
            next_trial();
        }
    }

    function next_trial() {
        // Increment trial number
        current_trial_number += 1;
        // Create trial data object
        const trial_data = {
            trial_start: undefined,
            target_timestamps: [],
            target_identities: [],
        };
        const dis = generate_display(nTargs);

        const widget = new DisplayWidget(
            d3.select(".stimuli"),
            s.svg_viewbox,
            s.svg_width
        );
        widget.draw(dis);
        // Get timestamp
        start = performance.now();
        trial_data.trial_start = start;
        d3.selectAll("line", "rect").on("click", click_handler);
        function click_handler(d) {
            if (d.srcElement.className.baseVal === "T") {
                // Record RT
                trial_data.target_timestamps.push(performance.now());
                // Record target identity
                const id = d.srcElement.id;
                trial_data.target_identities.push(id);
                console.log(id.slice(0, id.length - 2));
                // Remove the object and its background rect
                d3.selectAll(
                    `line[id^='${id.slice(0, id.length - 2)}']`
                ).remove();
                d3.selectAll(
                    `rect[id^='${id.slice(0, id.length - 2)}']`
                ).remove();
            }
            console.log(trial_data);
        }
    }

    function end_experiment() {
        console.log(data);
    }

    window.addEventListener("keypress", (e) => {
        if (e.key === " ") {
            next_step();
        }
    });
})();
