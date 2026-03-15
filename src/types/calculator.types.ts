export type Operator = '+' | '-' | '*' | '/' | '^' | 'sqrt' | '%';

export interface CalculatorFormData {
  num1: number | undefined;
  num2: number | undefined;
  operator: Operator;
}