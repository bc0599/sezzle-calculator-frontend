import React from 'react';
import { useCalculator } from './hooks/useCalculator';
import { CalculatorForm } from './component/CalculatorForm';
import { CalculatorResult } from './component/CalculatorResult';

function App() {
  const { formData, result, error, loading, updateField, handleCalculate } = useCalculator();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full border-t-4 border-purple-600">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sezzle Calculator</h1>
        
        <CalculatorForm 
          formData={formData} 
          updateField={updateField} 
          onCalculate={handleCalculate}
          loading={loading}
        />

        <CalculatorResult 
          result={result} 
          error={error} 
        />
      </div>
    </div>
  );
}

export default App;