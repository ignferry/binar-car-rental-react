import Rater1Image from '../../assets/rater_1.png';
import Rater2Image from '../../assets/rater_2.png';
import RateImage from '../../assets/Rate.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default function Testimonials() {
  return (
    <section id="testimonial" className="text-center container-fluid px-md-0">
      <h2>Testimonial</h2>
      <p className="mb-5">Berbagai review positif dari pelanggan kami</p>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        navigation={{
          prevEl: '.prev-button',
          nextEl: '.next-button',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide className="p-5 testimony">
          <div className="d-flex flex-column flex-md-row">
            <div className="rater-img">
              <img src={Rater1Image} className="w-50" />
            </div>
            <div className="rater-text text-start">
              <img src={RateImage} className="d-block m-auto ms-md-0 mb-3" />
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className="fw-bold">John Dee 31, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 testimony">
          <div className="d-flex flex-column flex-md-row">
            <div className="rater-img">
              <img src={Rater2Image} className="w-50" />
            </div>
            <div className="rater-text text-start">
              <img src={RateImage} className="d-block m-auto ms-md-0 mb-3" />
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className="fw-bold">John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 testimony">
          <div className="d-flex flex-column flex-md-row">
            <div className="rater-img">
              <img src={Rater1Image} className="w-50" />
            </div>
            <div className="rater-text text-start">
              <img src={RateImage} className="d-block m-auto ms-md-0 mb-3" />
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className="fw-bold">John Dee 33, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 testimony">
          <div className="d-flex flex-column flex-md-row">
            <div className="rater-img">
              <img src={Rater2Image} className="w-50" />
            </div>
            <div className="rater-text text-start">
              <img src={RateImage} className="d-block m-auto ms-md-0 mb-3" />
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className="fw-bold">John Dee 34, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button className="prev-button">&lt;</button>
      <button className="next-button">&gt;</button>
    </section>
  );
}
