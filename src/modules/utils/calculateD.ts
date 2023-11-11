
const calculateDParameter = (dist: number) => {
    if (dist > 0 && dist <= 5) {
        return 100
    }
    if (dist > 5 && dist <= 10) {
        return 75
    }
    if (dist > 10 && dist <= 15) {
        return 50
    }

    if (dist > 15 && dist <= 20) {
        return 25
    }
    if (dist > 20) {
        return 0
    }
}