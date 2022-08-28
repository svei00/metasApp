// I commented all of them because we want the modal to be generic not specific
// import { useContext } from 'react';
// import { useParams } from 'react-router';
// import { Context } from '../../../services/Memory';
// import Details from '../create/Details';

// Adding TypeScript to get the correct data type.

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {                                                // Was: function Modal({ children }) {
  // const { id } = useParams();
  // const [state, send] = useContext(Context);
  return (
    <div className="flex items-center fixed inset-0 bg-gray-700 bg-opacity-75">
      {" "}
      {/* Uses Tailwind to stylish the Modal (Pop-up) Was: className='fixed inset-0 bg-gray-700 bg-opacity-75'*/}
      {/* { JSON.stringify(state.objects[id]) }                                           // Was: { id } Now we use JSON because React cannot convert objects*/}
      <div className="mx-auto">
        {" "}
        {/* Centers vertically and flex items-center did horizontally */}
        {/* <Details></Details> */}
        {children} {/* To make it generic */}
      </div>
    </div>
  );
}

export default Modal;
