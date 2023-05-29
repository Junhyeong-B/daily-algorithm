/**
 * Runtime 140 ms Beats 34.21%
 * Memory 50.9 MB Beats 20.18%
 */
class ParkingSystem {
  big: number;
  medium: number;
  small: number;
  constructor(big: number, medium: number, small: number) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  addCar(carType: number): boolean {
    switch (carType) {
      case 1:
        if (this.big >= 1) {
          this.big -= 1;
          return true;
        }
        return false;
      case 2:
        if (this.medium >= 1) {
          this.medium -= 1;
          return true;
        }
        return false;
      case 3:
        if (this.small >= 1) {
          this.small -= 1;
          return true;
        }
        return false;
      default:
        return false;
    }
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

const parkingSystem = new ParkingSystem(0, 0, 2);
console.log(parkingSystem.addCar(1)); // false
console.log(parkingSystem.addCar(2)); // false
console.log(parkingSystem.addCar(3)); // true
console.log(parkingSystem.addCar(1)); // false
