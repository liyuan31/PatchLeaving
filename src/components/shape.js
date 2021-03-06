/**
 * Classes that encapsulate different svg shapes.
 *
 * @author Walden Y. Li
 * @version 1.0 (2/11/2022)
 */
export class Rect {
    /**
     *
     * @param {string} x
     * @param {string} y
     * @param {string} w
     * @param {string} h
     * @param {string} fill : the color of the <rect>
     * @param {string} className : class for the <rect> object
     * @param {string} id : id for the <rect> object
     * @param {string} transform
     */
    constructor(
        x,
        y,
        w,
        h,
        fill,
        className = undefined,
        id = undefined,
        transform = undefined
    ) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.fill = fill;
        this.className = className;
        this.id = id;
        this.transform = transform;
    }
}

export class Circle {
    /**
     *
     * @param {string} cx : center x
     * @param {string} cy : center y
     * @param {string} r : radius
     * @param {string} fill : color
     * @param {string} stroke : stroke color
     * @param {string} strokeWidth : <svg> <circle> attr "stroke-width"
     * @param {string} className : class for the <circle> object
     * @param {string} id : id for the <circle> object
     * @param {string} transform
     */
    constructor(
        cx,
        cy,
        r,
        fill,
        stroke,
        strokeWidth,
        className = undefined,
        id = undefined,
        transform = undefined
    ) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.className = className;
        this.id = id;
        this.transform = transform;
    }
}

export class Line {
    /**
     *
     * @param {string} x1
     * @param {string} y1
     * @param {string} x2
     * @param {string} y2
     * @param {string} stroke
     * @param {string} strokeWidth : <svg> <line> attr "stroke-width"
     * @param {string} className : class for the <line> object
     * @param {string} id : id for the <line> object
     * @param {string} transform
     */
    constructor(
        x1,
        y1,
        x2,
        y2,
        stroke,
        strokeWidth,
        className = undefined,
        id = undefined,
        transform = undefined
    ) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.className = className;
        this.id = id;
        this.transform = transform;
    }
}

export class Text {
    /**
     *
     * @param {string} text
     * @param {string} x
     * @param {string} y
     * @param {string} fill
     * @param {string} fontSize : <svg> -> <text> attr "font-size"
     * @param {string} fontFamily : <svg> -> <text> attr "font-family"
     * @param {string} className : class for the <text> object
     * @param {string} id : id for the <text> object
     * @param {string} transform
     */
    constructor(
        text,
        x,
        y,
        fill,
        fontSize,
        fontFamily = undefined,
        className = undefined,
        id = undefined,
        transform = undefined
    ) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.fill = fill;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.className = className;
        this.id = id;
        this.transform = transform;
    }
}

export class Polygon {
    /**
     * @param {string} points
     * @param {string} fill
     * @param {string} className
     * @param {string} id
     * @param {string} transform
     */
    constructor(
        points,
        fill,
        className = undefined,
        id = undefined,
        transform = undefined
    ) {
        this.points = points;
        this.fill = fill;
        this.className = className;
        this.id = id;
        this.transform = transform;
    }
}
