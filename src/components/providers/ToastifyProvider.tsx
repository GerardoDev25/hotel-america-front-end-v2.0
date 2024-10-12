import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const ToastifyProvider = ({ children }: Props) => {
  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
};
