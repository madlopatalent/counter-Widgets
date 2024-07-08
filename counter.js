function Counter(maxValue = 100) {
  console.log("counter function called");
  return {
    count: 0,
    maxValue: maxValue,
    increment() {
      console.log("increment called");
      if (this.count < this.maxValue) {
        this.count++;
      }
    },
    decrement() {
      console.log("Decrement called");
      if (this.count > 0) {
        this.count--;
      }
    },
    reset() {
      console.log("Reset called");
      this.count = 0;
    }
  };
}
document.addEventListener('alpine:init', () => {
  console.log("Alphine init event")
  Alpine.data('counter', Counter);
});