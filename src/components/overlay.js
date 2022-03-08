/**
 * A class that creates and manipulates an overlay object on the specific page.
 */
export default class Overlay {
    constructor() {
        this.initialized = false;
        this.on = false;
        this.off = undefined;
    }

    initialize() {
        // create nodes
        const overlayNode = document
            .createElement("div")
            .setAttribute("id", "overlay");
        const textNode = document
            .createElement("div")
            .setAttribute("id", "overlay_text");
        // append nodes to body
        document.body.appendChild(overlayNode);
        document.getElementById("overlay").appendChild(textNode);
    }
}
