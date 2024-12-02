import { useId } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

interface Props {
  label: string;
  options: Option[];
  defaultOptionValue?: string;
  selectAttributes?: React.ComponentProps<'select'>;
  optionAttributes?: React.ComponentProps<'option'>;
  className?: React.StyleHTMLAttributes<HTMLDivElement>['className'];
}

type Option = { value: string; label: string };

const getOptions = (optionsList: Option[], value?: string) => {
  const defaultOption: Option = { value: '', label: 'Select an Option' };

  if (!value) {
    return { default: defaultOption, options: optionsList };
  }

  const foundOption = optionsList.find((option) => option.value === value);

  if (foundOption) {
    const filteredOptions = optionsList.filter(
      (option) => option.value !== value
    );
    return { default: foundOption, options: filteredOptions };
  }

  return { default: defaultOption, options: optionsList };
};

export const SelectInput = ({
  label,
  options,
  className,
  defaultOptionValue,
  selectAttributes,
  optionAttributes,
}: Props) => {
  const inputId = useId();

  const { options: optionsProcessed, default: defaultOption } = getOptions(
    options,
    defaultOptionValue
  );

  return (
    <div className={`max-w-xl relative ${className ? className : ''}`}>
      <label
        htmlFor={inputId}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
      >
        {label}
      </label>
      <select
        id={inputId}
        defaultValue={defaultOption.value}
        className='z-auto w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-dark-bg dark:text-dark-text dark:border-dark-bg-light dark:focus:ring-dark-primary capitalize appearance-none'
        {...selectAttributes}
      >
        <option value={defaultOption.value} {...optionAttributes}>
          {defaultOption.label}
        </option>
        {optionsProcessed.map((option) => (
          <option key={option.value} value={option.value} {...optionAttributes}>
            {option.label}
          </option>
        ))}
      </select>
      <AiFillCaretDown className='absolute top-10 right-4 w-5 h-5 text-primary dark:text-dark-primary pointer-events-none' />
    </div>
  );
};
