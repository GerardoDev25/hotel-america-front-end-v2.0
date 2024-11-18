interface Props {
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
}

export const DividerX = ({ className }: Props) => {
  return (
    <div
      className={`${className} w-full h-px dark:bg-gray-200 bg-gray-500 my-7`}
    />
  );
};

export const DividerY = ({ className }: Props) => {
  return (
    <div
      className={`${className} h-full w-px dark:bg-gray-200 bg-gray-500 mx-7`}
    />
  );
};
