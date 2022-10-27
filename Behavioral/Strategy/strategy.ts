interface Strategy {
    execute(a: number, b: number):number;
}

class StrategyPlus implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}
class StrategyMinus implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}
class StrategyMultiply implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}
class StrategyDivide implements Strategy {
    execute(a: number, b: number): number {
        return  a / b;
    }
}

class Context {
    private strategy: Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }
    executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}
 
const contextPlus = new Context(new StrategyPlus());
const contextMinus = new Context(new StrategyMinus());
const contextMultiply = new Context(new StrategyMultiply());
const contextDivide = new Context(new StrategyDivide());

console.log('Result: ' + 'a + ' + 'b = ' + contextPlus.executeStrategy(5, 4));
console.log('Result: ' + 'a - ' + 'b = ' + contextMinus.executeStrategy(5, 4));
console.log('Result: ' + 'a * ' + 'b = ' + contextMultiply.executeStrategy(5, 4));
console.log('Result: ' + 'a / ' + 'b = ' + contextDivide.executeStrategy(5, 4));
