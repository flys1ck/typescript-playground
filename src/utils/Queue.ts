class Queue<T> {
  private q: T[];
  constructor() {
    this.q = [];
  }

  add(i: T) {
    this.q.push(i);
  }

  pop() {
    return this.q.pop();
  }

  isEmpty() {
    return !this.q.length;
  }

  print() {
    console.log(this.q);
  }
}

export default Queue;
