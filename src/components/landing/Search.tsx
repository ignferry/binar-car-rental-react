export default function Search() {
    return (
        <section id="search" className="container-fluid col-11 col-md-9">
            <form className="w-100" id="search-form">
                <div className="row p-3 shadow rounded search-form-div">
                    <div className="search-input-div form-group">
                        <label htmlFor="input-tipe-driver" className="form-label">Tipe Driver</label>
                        <select className="form-select" id="input-tipe-driver" name="driver">
                            <option value="" hidden selected>Pilih Tipe Driver</option>
                            <option value="1">Dengan Sopir</option>
                            <option value="0">Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                    </div>
                    <div className="search-input-div form-group">
                        <label htmlFor="input-tanggal" className="form-label">Tanggal</label>
                        <input type="text" className="form-control" id="input-tanggal" name="tanggal" placeholder="Pilih Tanggal"/>
                    </div>
                    <div className="search-input-div form-group">
                        <label htmlFor="input-waktu" className="form-label">Waktu Jemput/Ambil</label>
                        <select className="form-select" id="input-waktu" name="waktu">
                            <option value="" hidden selected>Pilih Waktu</option>
                            <option value="08">08.00 WIB</option>
                            <option value="09">09.00 WIB</option>
                            <option value="10">10.00 WIB</option>
                            <option value="11">11.00 WIB</option>
                            <option value="12">12.00 WIB</option>
                        </select>
                    </div>
                    <div className="search-input-div form-group">
                        <label htmlFor="input-penumpang" className="form-label">Jumlah Penumpang (optional)</label>
                        <input type="number" className="form-control" id="input-penumpang" name="penumpang" placeholder="Jumlah Penumpang" onKeyPress={(event) => { return event.charCode >= 48 }} min="1"/>
                    </div>
                    <div className="search-submit-div">
                        <button type="submit" id="search-btn" className="btn btn-primary" disabled>Cari Mobil</button>
                    </div>
                </div>
            </form>
        </section>
    )
}