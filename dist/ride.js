"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ride = void 0;
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
exports.Ride = Ride;
Ride._activeRides = 0;
//# sourceMappingURL=ride.js.map