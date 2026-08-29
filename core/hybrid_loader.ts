export class AtomicManager {
  private state: number;

  constructor(seed: number = 60) {
    this.state = seed;
  }

  build_manager(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 60) % 997;
    }
    return total;
  }
}

const obj = new AtomicManager();
console.log(obj.build_manager(60));
