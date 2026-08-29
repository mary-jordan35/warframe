export class SecureManager {
  private state: number;

  constructor(seed: number = 71) {
    this.state = seed;
  }

  collect_handler(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 71) % 997;
    }
    return value;
  }
}

const obj = new SecureManager();
console.log(obj.collect_handler(71));
