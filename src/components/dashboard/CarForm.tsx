import { Form, Button, Image } from 'react-bootstrap';
import { Car } from '../../types/Car';
import { EventTargetForm } from '../../types/EventTargetForm';
import { httpFetch, httpFetchMultipart } from '../../utils/http';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';

const BACKEND_URL = import.meta.env['VITE_BACKEND_URL'];

export default function CarForm(props: { car?: Car }) {
  const navigate = useNavigate();
  const [filename, setFilename] = useState<string>(
    props.car ? props.car.image : '',
  );

  async function addCar(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const target = e.target as unknown as EventTargetForm;
      await httpFetch(
        'cars',
        true,
        {},
        {
          method: 'POST',
          body: JSON.stringify({
            plate: target.elements.plate.value,
            manufacture: target.elements.manufacture.value,
            model: target.elements.model.value,
            image: filename,
            rent_per_day: target.elements.rent_per_day.value,
            capacity: target.elements.capacity.value,
            description: target.elements.description.value,
            available_at: target.elements.available_at.value,
            transmission: target.elements.transmission.value,
            available: target.elements.available.value,
            type: target.elements.type.value,
            year: target.elements.year.value,
            options: (target.elements.options.value as string).split('\n'),
            specs: (target.elements.specs.value as string).split('\n'),
          }),
        },
      );
      navigate('/dashboard/cars');
    } catch (error) {
      throw error as Error;
    }
  }

  async function updateCar(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      const target = e.target as unknown as EventTargetForm;

      await httpFetch(
        `cars/${props.car && props.car.id}`,
        true,
        {},
        {
          method: 'PUT',
          body: JSON.stringify({
            plate: target.elements.plate.value,
            manufacture: target.elements.manufacture.value,
            model: target.elements.model.value,
            image: filename,
            rent_per_day: target.elements.rent_per_day.value,
            capacity: target.elements.capacity.value,
            description: target.elements.description.value,
            available_at: target.elements.available_at.value,
            transmission: target.elements.transmission.value,
            available: target.elements.available.value,
            type: target.elements.type.value,
            year: target.elements.year.value,
            options: (target.elements.options.value as string).split('\n'),
            specs: (target.elements.specs.value as string).split('\n'),
          }),
        },
      );
      navigate('/dashboard/cars');
    } catch (error) {
      throw error as Error;
    }
  }

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      try {
        const json = await httpFetchMultipart<{ filename: string }>(
          'cars/image',
          true,
          {},
          {
            method: 'POST',
            body: formData,
          },
        );
        setFilename(json.filename);
      } catch (error) {
        throw error as Error;
      }
    }
  }

  useEffect(() => {
    setFilename(props.car ? props.car.image : '');
  }, [props.car]);

  return (
    <Form onSubmit={props.car ? updateCar : addCar}>
      <Form.Group className="mb-3" controlId="plate">
        <Form.Label>Plate</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter plate"
          defaultValue={props.car && props.car.plate}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="manufacture">
        <Form.Label>Manufacture</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter manufacture"
          defaultValue={props.car && props.car.manufacture}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="model">
        <Form.Label>Model</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter model"
          defaultValue={props.car && props.car.model}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rent_per_day">
        <Form.Label>Rent Per Day</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter rent per day"
          defaultValue={props.car && props.car.rent_per_day}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="capacity">
        <Form.Label>Capacity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter capacity"
          defaultValue={props.car && props.car.capacity}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          defaultValue={props.car && props.car.description}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="available_at">
        <Form.Label>Available At</Form.Label>
        <Form.Control
          type="date"
          defaultValue={
            props.car && String(props.car.available_at).substr(0, 10)
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="available">
        <Form.Check
          type="checkbox"
          label="Available"
          defaultChecked={props.car && props.car.available}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="transmission">
        <Form.Label>Transmission</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter transmission"
          defaultValue={props.car && props.car.transmission}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="type">
        <Form.Label>Type</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter type"
          defaultValue={props.car && props.car.type}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="year">
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter year"
          defaultValue={props.car && props.car.year}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="options">
        <Form.Label>Options</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter options"
          defaultValue={props.car && props.car.options.join('\n')}
        />
        <Form.Text className="text-muted">
          Write each option in a new line.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="specs">
        <Form.Label>Specs</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter specs"
          defaultValue={props.car && props.car.specs.join('\n')}
        />
        <Form.Text className="text-muted">
          Write each option in a new line.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image</Form.Label>
        {filename && (
          <Image
            src={`${BACKEND_URL}/cars/image/${filename}`}
            fluid
            className="mb-3"
          />
        )}
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
