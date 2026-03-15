import React from 'react';
interface Props {
  result: number | null;
  error: string | null;
}

export const CalculatorResult: React.FC<Props> = ({ result, error }) => {
  if (!result && !error) return null;

  return (
    <div className="mt-6">
      {result !== null && (
        <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg animate-fade-in">
          <p className="text-green-800 font-bold text-center text-2xl">{result}</p>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg animate-pulse">
          <p className="text-red-800 font-medium text-sm text-center italic">{error}</p>
        </div>
      )}
    </div>
  );
};