import { useState } from 'react';
import { calculate, CalcRequest } from '../api';
import { CalculatorFormData, Operator } from '../types/calculator.types';

export const useCalculator = () => {
  const [formData, setFormData] = useState<CalculatorFormData>({
    num1: undefined,
    num2: undefined,
    operator: '+'
  });
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof CalculatorFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validate = (): boolean => {
    if (formData.num1 === undefined || isNaN(formData.num1)) {
      setError("Number 1 is empty.");
      return false;
    }
    if (formData.operator !== 'sqrt' && (formData.num2 === undefined || isNaN(formData.num2))) {
      setError("Number 2 is empty");
      return false;
    }
    return true;
  };

  const handleCalculate = async () => {
    setError(null);
    setResult(null);

    if (!validate()) return;

    setLoading(true);
    try {
      const data = await calculate(formData as CalcRequest);
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data.result ?? 0);
      }
    } catch (err) {
      setError("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    result,
    error,
    loading,
    updateField,
    handleCalculate
  };
};