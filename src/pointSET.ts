import Point2D from "./doNotTouch/point2D";
import RectHV from "./doNotTouch/rectHV";

class PointSET {
    private points: Point2D[];
    public constructor() {
        this.points = [];   // construct an empty set of points
    } 

    public isEmpty(): boolean {
        return this.points.length === 0; // is the set empty?
    } 

    public size(): number {
        return this.points.length;  // number of points in the set
    } 
    
    public insert(p: Point2D): void {
        if (!this.contains(p)) {
            this.points.push(p);       // add the point to the set (if it is not already in the set)
        }
    } 

    public contains(p: Point2D): boolean {
        for (const point of this.points) {
            if (point.equals(p)) {
                return true;            // does the set contain point p?
            }
        }
        return false;
    } 

    public draw(p): void {
        for (const point of this.points) {
            point.draw(p);              // draw all points to p5
        }
    } 


    public range(rect: RectHV): Point2D[] {
        const pointsInRange: Point2D[] = [];
        for (const point of this.points) {
            if (rect.contains(point)) {
                pointsInRange.push(point);
            }
        }
        return pointsInRange;      // all points that are inside the rectangle (or on the boundary)
    } 
}

export default PointSET;