import ServiceImage from "../../assets/img_service.png";

export default function Services() {
    return (
        <section id="ourServices" className="container-fluid">
            <div className="row row-cols-1 row-cols-md-2 justify-content-center">
                <div className="our-service-img col col-md-5 text-center">
                    <img src={ServiceImage} className="w-75"/>
                </div>
                <div className="col col-md-5 align-self-center">
                    <h2>Best Car Rental for any kind of trip in Bandung</h2>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <ul>
                        <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                        <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                        <li>Sewa Mobil Jangka Panjang Bulanan</li>
                        <li>Gratis Antar - Jemput Mobil di Bandara</li>
                        <li>Layanan Airport Transfer / Drop In Out</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}