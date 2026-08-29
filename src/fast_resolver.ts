export class LocalBuffer {
  private state: number;

  constructor(seed: number = 80) {
    this.state = seed;
  }

  render_collector(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 80) % 997;
    }
    return value;
  }
}

const obj = new LocalBuffer();
console.log(obj.render_collector(80));
