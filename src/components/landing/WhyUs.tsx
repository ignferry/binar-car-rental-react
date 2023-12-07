import IconComplete from "../../assets/icon_complete.png";
import IconPrice from "../../assets/icon_price.png";
import Icon24hrs from "../../assets/icon_24hrs.png";
import IconProfessional from "../../assets/icon_professional.png";

export default function WhyUs() {
    return (
        <section id="whyUs" className="container-fluid col-md-10 text-center text-md-start">
            <h2>Why Us?</h2>
            <p className="mb-5">Mengapa harus pilih Binar Car Rental?</p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-start">
                <div className="col">
                    <div className="card h-100 p-2">
                        <div className="card-body">
                            <img src={IconComplete} className="p-2"/>
                            <h3 className="card-title p-2">Mobil Lengkap</h3>
                            <p className="card-text p-2">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 p-2">
                        <div className="card-body">
                            <img src={IconPrice} className="p-2"/>
                            <h3 className="card-title p-2">Harga Murah</h3>
                            <p className="card-text p-2">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 p-2">
                        <div className="card-body">
                            <img src={Icon24hrs} className="p-2"/>
                            <h3 className="card-title p-2">Layanan 24 Jam</h3>
                            <p className="card-text p-2">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 p-2">
                        <div className="card-body">
                            <img src={IconProfessional} className="p-2"/>
                            <h3 className="card-title p-2">Sopir Profesional</h3>
                            <p className="card-text p-2">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
              </div>
        </section>
    )
}