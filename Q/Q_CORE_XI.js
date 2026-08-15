export const Q_CORE_XI = {
    G: 6.674e-11,
    c: 299792458,
    mass: 1.989e36,

    schwarzschild(){
        return (2 * this.G * this.mass) / (this.c ** 2);
    },

    corePackage(){
        return {
            mass: this.mass,
            rs: this.schwarzschild()
        };
    }
};

