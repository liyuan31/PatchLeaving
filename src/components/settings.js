/**
 * Task settings
 */
export const travel_time = 3000;

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
export const svg_width = `${Math.round((screen_x / screen_y) * 84)}vmin`;
export const n_grid_items_x = 8; // number of items on the main axis
export const n_grid_items_y = 7; // number of items on the cross axis
export const n_total_items = 40;

/**
 * Stimuli settings
 */
export const head_width = 5;
export const tail_length = 5;
export const stroke_width = 1.2;
export const TL_offset = (head_width / 2) * 0.6;
export const overlaying_rect_width = 6;
export const greyscale_min = 1 - 0.65; // lower bound for percent white of stimuli
export const greyscale_max = 1 - 0.27; // upper bound
