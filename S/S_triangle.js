export function triangle(A, B, C){
    const dAB = Math.hypot(A.x - B.x, A.y - B.y);
    const dBC = Math.hypot(B.x - C.x, B.y - C.y);
    const dCA = Math.hypot(C.x - A.x, C.y - A.y);

    return { dAB, dBC, dCA };
}

