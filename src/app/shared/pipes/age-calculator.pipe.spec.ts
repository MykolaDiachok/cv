import { AgeCalculatorPipe } from './age-calculator.pipe';

describe('AgeCalculatorPipe', () => {
  it('create an instance', () => {
    const pipe = new AgeCalculatorPipe();
    expect(pipe).toBeTruthy();
  });
});
