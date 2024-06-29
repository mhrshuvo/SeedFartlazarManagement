import React from "react";

interface SelectProps {
  labelKey: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
  name?: string;
}

const Select: React.FC<SelectProps> = ({
  labelKey,
  value,
  onChange,
  options,
  className,
  name,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-gray-700">{labelKey}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-gray-300  outline-none p-3 focus:border-primary focus:ring-primary rounded-md shadow-sm"
        name={name}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
