export class LiteController {
  private state: number;

  constructor(seed: number = 87) {
    this.state = seed;
  }

  encode_client(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 87) % 997;
    }
    return result;
  }
}

const obj = new LiteController();
console.log(obj.encode_client(87));
