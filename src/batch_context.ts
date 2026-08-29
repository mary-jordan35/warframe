export class RemoteScheduler {
  private state: number;

  constructor(seed: number = 32) {
    this.state = seed;
  }

  encode_buffer(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 32) % 997;
    }
    return value;
  }
}

const obj = new RemoteScheduler();
console.log(obj.encode_buffer(32));
