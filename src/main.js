import Display from "./components/display.js";
import { Rect, Circle, Line, Text, Polygon } from "./components/shape.js";
import * as shadow from "./components/shadow.js";
import * as stimuli from "./components/stimuli.js";
import DisplayWidget from "./components/displayWidget.js";
import * as s from "./components/settings.js";
import generate_display from "./components/displayGenerator.js";
import { targ_num_dist as dist } from "./components/distributions.js";
import { check_fullscreen } from "./components/screen.js";

/**
 * The main script of Patch Leaving task written in modulized procedural js.
 *
 * @author Walden Y. Li
 * @version 1.0 (2/11/2022)
 */

(function main() {
    shadow.update();

    /**
     * Constant variables
     */
    const max_time = 25 * 60 * 1000;
    const post_link = "receive.php";

    /**
     * Experiment data storage object
     */
    const data = {
        window_load_timestamp: Math.round(performance.now()),
        exp_start_timestamp: 0,
        trials_data: [],
    };

    /**
     * Display widget object
     */
    const widget = new DisplayWidget(
        d3.select(".stimuli"),
        s.svg_viewbox,
        s.svg_width
    );

    /**
     * Internal state variables
     */
    let exp_started = 0;
    let time_elapsed = 0;
    let full_screened = 0;
    let current_trial_number = 0;
    let data_submitted = 0;
    let in_travel = 0;
    let n_total_targets_clicked = 0;
    let n_targs = dist.pop();

    /**
     * Temporary variables
     */
    let start = 0;
    let end = 0;
    let targ_times = [];
    let target_identities = [];

    /**
     * Checks internal state of the current experiment, and handle events triggered
     * by a keypress representing an advance to next step.
     */
    function next_step() {
        // If experiment hasn't started
        if (!exp_started) {
            exp_started = true;
            in_travel = true;
            widget.show_feedback("Loading ...");
            setTimeout(() => {
                widget.clear();
                in_travel = false;
                data.exp_start_timestamp = Math.round(performance.now());
                setInterval(() => {
                    update_time_elapsed();
                    update_info();
                }, 1000);
                next_trial();
            }, 1500);
        }
        // If the current time elaspsed is greater than max duration, end experiment
        if (time_elapsed > max_time) {
            end_experiment();
        } else {
            if (!in_travel) {
                in_travel = true;
                // if currently in a search trial, this signals end trial
                end = Math.round(performance.now());
                d3.select("#trial_status").html("Trial Ends.");
                // record trial data
                data.trials_data.push({
                    n: current_trial_number,
                    n_targ: n_targs,
                    start: start,
                    end: end,
                    targ_times: targ_times,
                    targ_ids: target_identities,
                });
                // clear temp trial data array
                targ_times = [];
                target_identities = [];
                console.log(data.trials_data);
                // remove all click listeners
                d3.selectAll("line, rect").on("click", undefined);
                // show target information
                d3.selectAll("rect.T").attr("fill", "#FFFF8F");
                // widget.show_feedback("Loading ...");
                setTimeout(() => {
                    widget.clear();
                    in_travel = false;
                    next_trial();
                }, s.travel_time);
            }
        }
    }

    function next_trial() {
        // Clear display
        widget.clear();
        shadow.update();
        d3.select("#trial_status").html("");
        // Increment trial number
        current_trial_number += 1;
        n_targs = dist.pop();
        const dis = generate_display(n_targs);
        widget.draw(dis);
        // Get timestamp
        start = Math.round(performance.now());
        d3.selectAll("line, rect").on("click", click_handler);
        function click_handler(d) {
            if (d.srcElement.className.baseVal === "T") {
                // if target is not already clicked (must check because of the rect background)
                const id = d.srcElement.id.slice(0, d.srcElement.id.length - 2);
                if (target_identities.indexOf(id) < 0) {
                    // Record RT
                    targ_times.push(Math.round(performance.now()));
                    // Record target identity
                    target_identities.push(id);
                    console.log(target_identities);
                    n_total_targets_clicked += 1;
                    // Remove the object and its background rect
                    d3.selectAll(`line[id^='${id}']`).remove();
                    // d3.selectAll(
                    //     `rect[id^='${id.slice(0, id.length - 2)}']`
                    // ).remove();
                }
                update_info();
            }
        }
    }

    function update_time_elapsed() {
        time_elapsed = Math.round(performance.now() - data.exp_start_timestamp);
    }

    function update_info() {
        // calculate min and secs
        const min = Math.floor(time_elapsed / 1000 / 60);
        const sec = Math.round(time_elapsed / 1000) - min * 60;
        d3.select("#info").html(
            `Finding Ts! Time elapsed: ${min} min and ${sec} s. Total extra $: ${
                n_total_targets_clicked / 100
            }.`
        );
    }

    function end_experiment() {
        $.ajax({
            type: "POST",
            url: post_link,
            data: {
                data: JSON.stringify(data),
            },
            success: () => {
                window.location.href = `debriefing.html${
                    window.location.search
                }&bonus=${n_total_targets_clicked / 100}`;
            },
            failure: (errMsg) => {
                alert(errMsg);
            },
        });
    }

    window.addEventListener("keypress", (e) => {
        if (e.key === " ") {
            next_step();
        }
    });

    // check_fullscreen();

    widget.show_feedback("Press Spacebar to Start Experiment");
})();
