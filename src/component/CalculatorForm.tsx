import React from 'react';
import { CalculatorFormData, Operator } from '../types/calculator.types';

interface Props {
  formData: CalculatorFormData;
  updateField: (field: keyof CalculatorFormData, value: any) => void;
  onCalculate: () => void;
  loading: boolean;
}

export const CalculatorForm: React.FC<Props> = ({ formData, updateField, onCalculate, loading }) => {

    // Block undesired keys
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow certain keys
    const allowedKeys = ['Backspace', 'Tab', 'Enter', 'Escape', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', '.', '-'];
    
    // if the key is not allowed, block it
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }

    // Prevent typing 'e' o 'E' (scientific notation)
    if (e.key === 'e' || e.key === 'E') {
      e.preventDefault();
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase">Number 1</label>
        <input 
          type="number" 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all"
          onChange={(e) => updateField('num1', e.target.value === "" ? undefined : parseFloat(e.target.value))}
        />
      </div>
      
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase">Operation</label>
        <select 
          className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-purple-500 outline-none"
          value={formData.operator}
          onChange={(e) => updateField('operator', e.target.value as Operator)}
        >
          <option value="+">Sum (+)</option>
          <option value="-">Subtract (-)</option>
          <option value="*">Multiply (*)</option>
          <option value="/">Split (/)</option>
          <option value="^">Potency (^)</option>
          <option value="sqrt">Square Root</option>
          <option value="%">Percentage (N1 % of N2)</option>
        </select>
      </div>

      {formData.operator !== 'sqrt' && (
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase">Number 2</label>
          <input 
            type="number" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all"
            onChange={(e) => updateField('num2', e.target.value === "" ? undefined : parseFloat(e.target.value))}
          />
        </div>
      )}

      <button 
        onClick={onCalculate}
        disabled={loading}
        className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 disabled:bg-purple-300 transform active:scale-95 transition-all shadow-md"
      >
        {loading ? "Calculating..." : "Calculate now"}
      </button>
    </div>
  );
};