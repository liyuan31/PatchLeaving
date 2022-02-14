/**
 * Display settings
 */
export const screen_x = 100; // length of the main axis (horizontal)
export const screen_y = 80; // length of the cross axis (vertical)
export const screen_x_border = 0; // length of blank space on x axis from the left OR right border
export const screen_y_border = 5; // length of blank space on y axis from the top OR bottom border
export const max_x_jitter = 3.5;
export const max_y_jitter = 3.5 / 1.25;
export const svg_viewbox = `0 0 ${screen_x} ${screen_y}`;
export const svg_width = "125vmin";
export const n_grid_items_x = 8; // number of items on the main axis
export const n_grid_items_y = 7; // number of items on the cross axis
export const n_total_items = 40;
export const target_presence_rate = 0.15;
export const n_targets = Math.round(n_total_items * target_presence_rate);
export const n_distractors = n_total_items - n_targets;

/**
 * Stimuli settings
 */
export const head_width = 5;
export const tail_length = 5;
export const stroke_width = 1;
export const TL_offset = (head_width / 2) * 0.5;
export const greyscale_min = 0.27; // lower bound for percent black of stimuli
export const greyscale_max = 0.65; // upper bound
