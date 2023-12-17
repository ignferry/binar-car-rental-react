import { useParams } from 'react-router-dom';
import CarForm from '../../components/dashboard/CarForm';
import { Car } from '../../types/Car';
import { httpFetch } from '../../utils/http';
import { useEffect, useState } from 'react';

export default function EditCarPage() {
  const { id } = useParams();
  const [car, setCar] = useState<Car>();

  async function loadCarData() {
    try {
      const json = await httpFetch<Car>(
        `cars/${id}`,
        false,
        {},
        { method: 'GET' },
      );
      setCar(json);
    } catch (err) {
      throw err as Error;
    }
  }

  useEffect(() => {
    loadCarData();
  });

  return (
    <>
      <h1>Edit Car</h1>
      <p className="text-secondary">ID {id}</p>
      <CarForm car={car} />
    </>
  );
}
