export class SimpleBuilder {
  private state: number;

  constructor(seed: number = 70) {
    this.state = seed;
  }

  compute_worker(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 70) % 997;
    }
    return value;
  }
}

const obj = new SimpleBuilder();
console.log(obj.compute_worker(70));
