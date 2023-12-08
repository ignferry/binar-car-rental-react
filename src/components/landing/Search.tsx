import React, { useState } from "react";
import { EventTargetForm } from "../../types/EventTargetForm";
import { httpFetch } from "../../utils/http";
import { Car } from "../../types/Car";
import { useNavigate } from "react-router-dom";
import CarCard from "./CarCard";

function createDateString(date: string, time: string) {
    return `${date}T${time}:00:00.000+07:00`;
}

export default function Search() {
    const [cars, setCars] = useState<Array<Car>>([]);
    const navigate = useNavigate();

    async function submitSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const target = e.target as unknown as EventTargetForm;

        let requiredCapacity = parseInt(target.elements.penumpang.value as string);
        if (isNaN(requiredCapacity) || requiredCapacity < 1) {
            requiredCapacity = 1;
        }
        const dateTime = createDateString(target.elements.tanggal.value as string, target.elements.waktu.value as string);

        try {
            const json = await httpFetch<{page: number, limit: number, data: Array<Car>}>(
                "cars",
                false,
                {
                    page: 1,
                    limit: 999,
                    pickup_time: dateTime,
                    min_capacity: requiredCapacity
                },
                {
                    method: "GET"
                }
            );
            setCars(json.data);
        } catch (err) {
            throw err as Error;
        }

        navigate(
            "/cars",
            {
                state: {
                    driver: target.elements.driver.value,
                    tanggal: target.elements.tanggal.value,
                    waktu: target.elements.waktu.value,
                    penumpang: target.elements.penumpang.value
                }

            }
        );
    }

    return (
        <>
            <section id="search" className="container-fluid col-11 col-md-9">
                <form className="w-100" id="search-form" onSubmit={submitSearch}>
                    <div className="row p-3 shadow rounded search-form-div">
                        <div className="search-input-div form-group">
                            <label htmlFor="input-tipe-driver" className="form-label">Tipe Driver</label>
                            <select className="form-select" id="input-tipe-driver" name="driver" defaultValue={""}>
                                <option value="" hidden>Pilih Tipe Driver</option>
                                <option value="1">Dengan Sopir</option>
                                <option value="0">Tanpa Sopir (Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className="search-input-div form-group">
                            <label htmlFor="input-tanggal" className="form-label">Tanggal</label>
                            <input type="date" className="form-control" id="input-tanggal" name="tanggal" placeholder="Pilih Tanggal"/>
                        </div>
                        <div className="search-input-div form-group">
                            <label htmlFor="input-waktu" className="form-label">Waktu Jemput/Ambil</label>
                            <select className="form-select" id="input-waktu" name="waktu" defaultValue={""}>
                                <option value="" hidden>Pilih Waktu</option>
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
                            <button type="submit" id="search-btn" className="btn btn-primary">Cari Mobil</button>
                        </div>
                    </div>
                </form>
            </section> 

            <section id="search-result" className="container-fluid col-11 col-md-9">
                <div id="search-result-div" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {cars.map(c => <CarCard key={c.id} car={c}/>)}
                </div>
            </section>     
        </>
    )
}