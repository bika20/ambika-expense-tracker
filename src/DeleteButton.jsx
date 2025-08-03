import { FaTrash } from 'react-icons/fa';

function DeleteButton() {
  return (
    <p className="absolute text-gray-400 hover:text-gray-600 mr-0">
      <FaTrash size={15} />
    </p>
  );
}

export default DeleteButton;