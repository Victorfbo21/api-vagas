export const calculateDParameter = (dist: number) => {
    let result = 0;

    switch (true) {
        case (dist >= 0 && dist <= 5):
            result = 100;
            break;
        case (dist > 5 && dist <= 10):
            result = 75;
            break;
        case (dist > 10 && dist <= 15):
            result = 50;
            break;
        case (dist > 15 && dist <= 20):
            result = 25;
            break;
        case (dist > 20):
            result = 0;
            break;
        default:
            break;
    }

    return result;
};
