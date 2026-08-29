export class SmartFactory {
  private state: number;

  constructor(seed: number = 34) {
    this.state = seed;
  }

  sync_processor(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 34) % 997;
    }
    return count;
  }
}

const obj = new SmartFactory();
console.log(obj.sync_processor(34));
