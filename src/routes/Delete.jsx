import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchMotorcycles, markMotorcycleAsRemoved } from '../redux/motorcycles/motorcycles';

export default function Delete() {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycles.motorcycles);

  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(markMotorcycleAsRemoved(id));
    toast.success('Motorcycle successfully deleted');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-green-500 p-6 rounded-lg w-1/2 max-h-[100vh] overflow-y-auto">
        <h2 className="text-white text-2xl mb-4">Delete Motorcycles</h2>
        <ul>
          {motorcycles.map((motorcycle) => (
            !motorcycle.removed && (
              <li key={motorcycle.id} className="flex justify-between items-center bg-white p-2 my-2 rounded">
                <span>{motorcycle.name}</span>
                <button
                  type="button"
                  onClick={() => handleDelete(motorcycle.id)}
                  className="bg-white text-green-500 p-2 rounded hover:bg-green-200"
                >
                  Delete
                </button>
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
}
