export class RemoteCollector {
  private state: number;

  constructor(seed: number = 53) {
    this.state = seed;
  }

  resolve_factory(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 53) % 997;
    }
    return count;
  }
}

const obj = new RemoteCollector();
console.log(obj.resolve_factory(53));
