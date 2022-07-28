import { useContext } from 'react';
import { useParams } from 'react-router';
import { Context } from '../../../services/Memory';
import Details from '../create/Details';

function Modal() {
    const { id } = useParams();
    const [state, send] = useContext(Context);
    return ( 
        <div className='fixed inset-0 bg-gray-700 bg-opacity-75'>           {/* Uses Tailwind to stylish the Modal (Pop-up) */}
            { JSON.stringify(state.objects[id]) }                              {/* Was: { id } Now we use JSON because React cannot convert objects*/}
            <Details></Details>
        </div>
     );
}

export default Modal;