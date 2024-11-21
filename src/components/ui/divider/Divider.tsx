interface Props {
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
}

export const DividerX = ({ className }: Props) => {
  return (
    <div
      className={`w-full h-px dark:bg-gray-200 bg-gray-500 my-7 ${className} `}
    />
  );
};

export const DividerY = ({ className }: Props) => {
  return (
    <div
      className={`h-full w-px dark:bg-gray-200 bg-gray-500 mx-7 ${className} `}
    />
  );
};

export const DividerXColor = ({ className }: Props) => {
  return <div className={`w-full h-1 rounded-sm ${className}`} />;
};

export const DividerYColor = ({ className }: Props) => {
  return <div className={`w-1 h-full rounded-sm ${className}`} />;
};
