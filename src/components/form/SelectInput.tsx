interface Props {
  label: string;
  options: Option[];
  defaultOption: Option;
  selectAttributes?: React.ComponentProps<'select'>;
  optionAttributes?: React.ComponentProps<'option'>;
  className?: React.StyleHTMLAttributes<HTMLDivElement>['className'];
}

type Option = { value: string; label: string };

export const SelectInput = ({
  label,
  options,
  className,
  defaultOption,
  selectAttributes,
  optionAttributes,
}: Props) => {
  return (
    <div className={`max-w-xl ${className}`}>
      <label
        htmlFor='countries'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
      >
        {label}
      </label>
      <select
        id='countries'
        className='bg-backgroundLight focus:bg-backgroundLight-green border focus:border-none dark:border-none  text-textDark text-sm rounded-lg focus:ring-primary  block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary  color-transition outline-none capitalize'
        {...selectAttributes}
      >
        <option defaultValue={defaultOption.value} {...optionAttributes}>
          {defaultOption.label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} {...optionAttributes}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
