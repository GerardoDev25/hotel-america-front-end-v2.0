import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

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
