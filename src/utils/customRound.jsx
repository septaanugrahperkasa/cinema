export function customRound(value) {
    let floor = Math.floor(value);
    let decimal = value - floor;
    
    if (decimal <= 0.2) {
        return floor;
    } else if (decimal <= 0.4) {
        return floor + 0.5;
    } else if (decimal <= 0.7) {
        return floor + 1;
    } else {
        return floor + 1.5;
    }
}