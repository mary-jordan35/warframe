export class FastMonitor {
  private state: number;

  constructor(seed: number = 26) {
    this.state = seed;
  }

  compute_adapter(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 26) % 997;
    }
    return total;
  }
}

const obj = new FastMonitor();
console.log(obj.compute_adapter(26));
