/**
 * Runtime: 298 ms, faster than 60.71% of TypeScript online submissions for Design Underground System.
 * Memory Usage: 61 MB, less than 64.29% of TypeScript online submissions for Design Underground System.
 */

class UndergroundSystem {
  totalTimeForSpecificSection: Map<string, { totalTime: number, totalCustomer: number }>;
  customers: Map<number, { startStation: string, startTime: number }>;
  constructor() {
    this.totalTimeForSpecificSection = new Map();
    this.customers = new Map();
  }

  checkIn(id: number, stationName: string, t: number): void {
    this.customers.set(id, {
      startStation: stationName,
      startTime: t
    })
  }

  checkOut(id: number, stationName: string, t: number): void {
    if (!this.customers.get(id)) {
      return;
    }

    const { startStation, startTime } = this.customers.get(id)!;
    const totalStation = "".concat(...[startStation, "*", stationName]);
    const totalTime = t - startTime;
    const prevTotalTime = this.totalTimeForSpecificSection.get(totalStation)?.totalTime || 0;
    const prevNumberOfCustomer = this.totalTimeForSpecificSection.get(totalStation)?.totalCustomer || 0;
    this.totalTimeForSpecificSection.set(totalStation, {
      totalTime: prevTotalTime + totalTime,
      totalCustomer: prevNumberOfCustomer + 1,
    });
  }

  getAverageTime(startStation: string, endStation: string): number {
    const { totalTime, totalCustomer } = this.totalTimeForSpecificSection.get("".concat(...[startStation, "*", endStation]))!;
    return totalTime / totalCustomer;
  }
}

/**
* Your UndergroundSystem object will be instantiated and called as such:
* var obj = new UndergroundSystem()
* obj.checkIn(id,stationName,t)
* obj.checkOut(id,stationName,t)
* var param_3 = obj.getAverageTime(startStation,endStation)
*/