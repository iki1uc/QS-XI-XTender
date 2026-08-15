export class S_OrbitEngine {
    constructor(coreMass){
        this.G = 6.674e-11;
        this.coreMass = coreMass;
        this.t = 0;
    }

    orbit(p){
        this.t += 0.01;
        const r = p.baseR * 1.496e11;
        const omega = Math.sqrt((this.G * this.coreMass) / (r*r*r));
        const angle = this.t * omega;

        return {
            x: Math.cos(angle) * r,
            y: Math.sin(angle) * r
        };
    }
}

