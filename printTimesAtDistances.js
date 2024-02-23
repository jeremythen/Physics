const initialTramo = 45;
const initialVelocity = 155;
const gravity = 9.8;
const tramoDistance = 5;

const isIncluded = (n) => {

    switch(n) {
        case 1.7:
        case 1.8:
        case 2.1:
        case 2.5:
        case 2.7:
        case 2.9:
        case 3:
        case 4:
        case 5.5:
            return true;
        default:
            return false;
    }

}

const getFinalVelocity = (initialVelocity, distance, acceleration) => {
    const finalVelocitySquered = initialVelocity**2 - 2 * acceleration * distance;
    if(finalVelocitySquered < 0) {
        return 0;
    }
    const finalVelocity = Math.sqrt(finalVelocitySquered);
    return finalVelocity;
};

const getArithmeticSeriesForN = (n) => {
    return n / 2 * ((2 * 0.1) + (n - 1) * 0.05);
};

const getFrictionCoefficientAtTramo = (tramo) => {
    return getArithmeticSeriesForN(tramo) / tramo;
};

const getTimeAtTramo = (tramo) => {
    const frictionCoefficientAtTramo = getFrictionCoefficientAtTramo(tramo);
    const acceleration = frictionCoefficientAtTramo * gravity;
    const totalDistance = tramo * tramoDistance;
    const finalVelocity = getFinalVelocity(initialVelocity, totalDistance, acceleration);
    const velocityDiff = initialVelocity - finalVelocity;
    const time = velocityDiff / acceleration;
    return time;
};

const printTimesAtDistances = () => {
    for(let i = initialTramo; i < 100; i++) {
        const time = getTimeAtTramo(i);
        console.log(`Tramo: ${i}, distance: ${i * tramoDistance} time: ${time}`);
        if(isIncluded(time)) {
            console.log(`Tramo: ${i}, time: ${time}`);
        }
    }
};

printTimesAtDistances();
