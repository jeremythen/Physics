

let initialFrictionCoefficient = 0.1;

const frictionCoefficientToSum = 0.05;

const distance = 5; // meters

const gravity = 9.8; // m/s^2

let initialVelocity = 155; // m/s

let initialTime = 0; // seconds

const getFinalVelocity = (initialVelocity, frictionCoefficient, distance, gravity) => {
    const finalVelocitySquered = initialVelocity**2 - 2 * frictionCoefficient * gravity * distance;
    if(finalVelocitySquered < 0) {
        return 0;
    }
    const finalVelocity = Math.sqrt(finalVelocitySquered);
    return finalVelocity;
};

const printFinalVelocitiesUpTo1FrictionCoefficient = () => {
    let frictionCoefficient = initialFrictionCoefficient;

    let count = 0;

    while (frictionCoefficient < 100) {
        const finalVelocity = getFinalVelocity(initialVelocity, frictionCoefficient, distance, gravity);
        const newTime = distance / finalVelocity;

        if(newTime !== Infinity) {

            initialTime += distance / finalVelocity;
        }
        
        console.log(`Friction coefficient: ${frictionCoefficient}, Final velocity: ${finalVelocity}, time: ${initialTime}`);
        frictionCoefficient += frictionCoefficientToSum;
        frictionCoefficient = Math.round(frictionCoefficient * 100) / 100;
        initialVelocity = finalVelocity;
        count++;
        if(finalVelocity === 0) {
            console.log('count: ', count)
            break;
        }
    }
};

printFinalVelocitiesUpTo1FrictionCoefficient();