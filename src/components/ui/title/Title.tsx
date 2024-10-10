import { fontTitle } from '@/config/fonts';

interface Props {
  title: string;
  subTitle?: string;
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
}

export const Title = (props: Props) => {
  const { title, subTitle, className } = props;
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`${fontTitle.className} antialiased text-4xl font-semibold my-10`}
      >
        {title}
      </h1>

      {subTitle && <h3 className='text-xl mb-5'>{subTitle}</h3>}
    </div>
  );
};
