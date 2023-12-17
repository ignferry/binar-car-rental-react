import CarImage from '../../assets/img_car.png';

export default function Cover(props: { showButton: boolean }) {
  return (
    <section id="cover" className="container-fluid bg-blue">
      <div className="row row-cols-1 offset-md-1 row-cols-md-2">
        <div className="col col-md-5 align-self-center">
          <h1>Sewa & Rental Mobil Terbaik di Kawasan Bandung</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          {props.showButton && (
            <button
              className="btn btn-success mb-3"
              type="button"
              onClick={() => (location.href = './cars')}
            >
              Mulai Sewa Mobil
            </button>
          )}
        </div>
        <div id="cover-img" className="col col-md-7">
          <img src={CarImage} className="w-100" />
        </div>
      </div>
    </section>
  );
}
