class Counter {
    static counter: number = 0;

    static increment(): number{
        return Counter.counter = Counter.counter + 1;
    }

    static decrement():number { 
        return Counter.counter = Counter.counter - 1;
    }
}


console.log(Counter.increment()); // 0 -> 1
console.log(Counter.increment()); // 1 -> 2

// const instance1 = new Counter();
// const instance2 = new Counter();

// console.log(instance1.increment()); // 0 -> 1
// console.log(instance2.increment()); // 1 -> 2