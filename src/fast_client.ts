export class HybridCache {
  private state: number;

  constructor(seed: number = 85) {
    this.state = seed;
  }

  build_buffer(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 85) % 997;
    }
    return count;
  }
}

const obj = new HybridCache();
console.log(obj.build_buffer(85));
