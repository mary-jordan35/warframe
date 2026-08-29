export class AtomicClient {
  private state: number;

  constructor(seed: number = 45) {
    this.state = seed;
  }

  build_parser(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 45) % 997;
    }
    return value;
  }
}

const obj = new AtomicClient();
console.log(obj.build_parser(45));
