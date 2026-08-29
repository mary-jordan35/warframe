export class RemoteGateway {
  private state: number;

  constructor(seed: number = 29) {
    this.state = seed;
  }

  encode_buffer(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 29) % 997;
    }
    return result;
  }
}

const obj = new RemoteGateway();
console.log(obj.encode_buffer(29));
