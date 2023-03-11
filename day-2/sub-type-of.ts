interface Point1D {
    x : number;
}

interface Point2D extends Point1D {
    y : number;
}

interface Point3D extends Point2D {
    z: number;
}

type SubTypeOf<T,U> = T extends U ? true : false

type S0 = SubTypeOf<Point2D,Point1D>
type S1 = SubTypeOf<Point3D,Point1D>
type S2 = SubTypeOf<Point3D,Point2D>
type S3 = SubTypeOf<Point2D,Point3D>
