import React from "react";

interface OrganizationInputProps {
  labelKey: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const OrganizationInput: React.FC<OrganizationInputProps> = ({
  labelKey,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-5">
      <label className="block text-sm font-medium text-gray-700">
        {labelKey}:
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-gray-300 bg-gray-100 outline-none p-3 focus:border-primary focus:ring-primary rounded-md shadow-sm"
      >
        <option value="">{labelKey}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrganizationInput;
