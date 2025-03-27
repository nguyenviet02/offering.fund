import { forwardRef } from 'react';

type InputProps = {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, placeholder, required = false, error, ...props }, ref) => (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={name}
        className="text-body-sm font-semibold text-text-primary"
      >
        {label}
        {required && '*'}
      </label>
      <div
        className={`bg-background-primary border ${
          error ? 'border-red-500' : 'border-border-primary'
        } rounded-xl p-4 md:p-4`}
      >
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          className="w-full bg-transparent text-body-sm text-text-primary placeholder:text-text-placeholder outline-none"
          ref={ref}
          {...props}
        />
      </div>
      {error && <span className="text-body-xs text-red-500">{error}</span>}
    </div>
  )
);

InputField.displayName = 'InputField';

export default InputField;
