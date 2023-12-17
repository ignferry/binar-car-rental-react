import { Car } from '../../types/Car';
import UserIcon from '../../assets/fi_users.png';
import SettingsIcon from '../../assets/fi_settings.png';
import CalendarIcon from '../../assets/fi_calendar.png';
import { useNavigate } from 'react-router-dom';
import { httpFetch } from '../../utils/http';

function numToString(number: number) {
  const numStr = number.toString();
  let res = '';

  for (let i = numStr.length - 1; i >= 0; i--) {
    res = numStr[i] + res;
    if ((numStr.length - i) % 3 === 0 && i != 0) {
      res = '.' + res;
    }
  }

  return res;
}

const BACKEND_URL = import.meta.env['VITE_BACKEND_URL'];

export default function CarCardDashboard(props: { car: Car }) {
  const navigate = useNavigate();

  async function deleteCar() {
    try {
      await httpFetch<{ token: string }>(
        `cars/${props.car.id}`,
        true,
        {},
        {
          method: 'DELETE',
        },
      );
      window.location.reload();
    } catch (error) {
      throw error as Error;
    }
  }

  return (
    <div className="card h-100 p-1 shadow-sm">
      <div className="card-body">
        <img
          src={BACKEND_URL + '/cars/image/' + props.car.image}
          className="mb-3 img-fluid car-img"
        />
        <div className="car-props">
          <span className="car-nama-tipe d-block pb-2">
            {props.car.manufacture} {props.car.model} / {props.car.type}
          </span>
          <span className="car-harga d-block pb-2 fw-bold">
            Rp {numToString(props.car.rent_per_day)} / hari
          </span>
          <p className="car-desc">{props.car.description}</p>
          <div className="d-flex car-prop pb-2">
            <img src={UserIcon} className="img-fluid pe-2" />
            <span className="">{props.car.capacity} orang</span>
          </div>
          <div className="d-flex car-prop pb-2">
            <img src={SettingsIcon} className="img-fluid pe-2" />
            <span>{props.car.transmission}</span>
          </div>
          <div className="d-flex car-prop pb-2">
            <img src={CalendarIcon} className="img-fluid pe-2" />
            <span>Tahun {props.car.year}</span>
          </div>
        </div>
        <div className="d-flex justify-content-space-between">
          <button
            className="w-100 btn btn-warning mt-2 me-2"
            onClick={() => navigate(`/dashboard/cars/${props.car.id}/edit`)}
          >
            Edit
          </button>
          <button className="w-100 btn btn-danger mt-2" onClick={deleteCar}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
