import { curvature } from "../R/R_curvature.js";
import { timeDilation } from "../R/R_timeDilation.js";

export function realMeasure(mass, r){
    return {
        curvature: curvature(mass, r),
        timedilation: timeDilation(mass, r)
    };
}

