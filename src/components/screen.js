export const is_fullscreen = () => {
    return document.fullscreenElement !== null;
};

// This function requests the browser to enter full screen. In Chrome,
// the request can only be called by a user action such as a mouseclick
// or a keypress, for security reasons.
// This function checks if the browser is in full-screen mode. If not,
// it will reveal the overlay div and prompt user to click to trigger
// a full-screen request. It will then
export const check_fullscreen = () => {
    if (!is_fullscreen()) {
        document.getElementById("overlay").style.display = "block";
        document
            .getElementById("overlay")
            .addEventListener(
                "click",
                document.documentElement.requestFullscreen
            );
        document.onfullscreenchange = () => {
            document.getElementById("overlay").style.display = "none";
            check_fullscreen();
        };
    } else {
        document.onfullscreenchange = () => check_fullscreen();
    }
};
