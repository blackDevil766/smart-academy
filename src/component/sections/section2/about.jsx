import React from "react";
import TestmoniaksMaker, {
  TrustedCard,
  HowItWorkMaker,
} from "./testmoniaksMaker";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.min.css";
// import 'swiper/pagination.min.css';

function TestimonialsSection() {
  function ClikeDiscover() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="AboutUs">
        <div className="AboutTitle">
          <h2 className="HowItWorkMainWord">About Us</h2>
        </div>

        <div className="AboutSection">
          <img src="imgs\center-img.png" alt="" />
          <div className="details-about-us">
            <h2>Who We Are</h2>
            <p>
              We Are A Center Educiton For Obour Institute <br /> We Are Provide
              Corses That you Might Need
            </p>
          </div>
        </div>
      </div>

      <div id="about" className="HowItWork">
        <h2>Courses We Provide</h2>
        <div className="howItWork">
          <div>
            <HowItWorkMaker
              icon="imgs\megaphone.svg"
              title=""
              meaning="Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius."
            />
          </div>

          <div>
            <HowItWorkMaker
              icon="imgs\gem.svg"
              title="Reach Clients"
              meaning="Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius."
            />
          </div>

          <div>
            <HowItWorkMaker
              icon="imgs\speedometer.svg"
              title="Get Rewarded"
              meaning="Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius."
            />
          </div>
        </div>
      </div>

      <div className="ShowCaseOfTrusting">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop="true"
          pagination={{ clickable: true }}
          grabCursor="true"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="swipey">
            <TestmoniaksMaker
              testClass="testmonialContianer"
              class="testmonialsIntreVideo"
              img="imgs\testimonials3.jpg"
              text="Nemo enimat ipsam voluptatem quia voluptas situm ets aspernatis netsum loris fugit,sed quia magnitus honoratis quis ratione sequi etum nets."
              brandName="JENNIFER SMITH — Designer"
              brandType="@EpicThemes"
            />
          </SwiperSlide>

          <SwiperSlide className="swipey">
            <TestmoniaksMaker
              testClass="testmonialContianer"
              class="testmonialsIntreVideo"
              img="https://demo.epic-webdesign.com/tf-smart/v1/images/testimonials2.jpg"
              text="Nemo enimat ipsam voluptatem quia voluptas situm ets aspernatis netsum loris fugit,sed quia magnitus honoratis quis ratione sequi etum nets."
              brandName="JOHN DOE — General Manager"
              brandType="@BeSmart"
            />
          </SwiperSlide>

          <SwiperSlide className="swipey">
            <TestmoniaksMaker
              testClass="testmonialContianer"
              class="testmonialsIntreVideo"
              img="	https://demo.epic-webdesign.com/tf-smart/v1/images/testimonials1.jpg"
              text="Nemo enimat ipsam voluptatem quia voluptas situm ets aspernatis netsum loris fugit,sed quia magnitus honoratis quis ratione sequi etum nets."
              brandName="EMILY RICHARDS — Copywriter"
              brandType="@Books-Online"
            />
          </SwiperSlide>
        </Swiper>

        {/* <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" > */}

        {/* <div className="carousel-item active" data-bs-interval="10000">
                            <TestmoniaksMaker
                                testClass="testmonialContianer"
                                class="testmonialsIntreVideo"
                                img="imgs\testimonials3.jpg"
                                text="Nemo enimat ipsam voluptatem quia voluptas situm ets aspernatis netsum loris fugit,sed quia magnitus honoratis quis ratione sequi etum nets."
                                brandName="JENNIFER SMITH — Designer"
                                brandType="@EpicThemes"
                            />
                        </div>

                        <div className="carousel-item" data-bs-interval="2000">
                            <TestmoniaksMaker
                                testClass="testmonialContianer"
                                class="testmonialsIntreVideo"
                                img="https://demo.epic-webdesign.com/tf-smart/v1/images/testimonials2.jpg"
                                text="Nemo enimat ipsam voluptatem quia voluptas situm ets aspernatis netsum loris fugit,sed quia magnitus honoratis quis ratione sequi etum nets."
                                brandName="JOHN DOE — General Manager"
                                brandType="@BeSmart"

                            />
                        </div>

                        <div className="carousel-item">
                            <TestmoniaksMaker
                                testClass="testmonialContianer"
                                class="testmonialsIntreVideo"
                                img="	https://demo.epic-webdesign.com/tf-smart/v1/images/testimonials1.jpg"
                                text="Nemo enimat ipsam voluptatem quia voluptas situm ets aspernatis netsum loris fugit,sed quia magnitus honoratis quis ratione sequi etum nets."
                                brandName="EMILY RICHARDS — Copywriter"
                                brandType="@Books-Online"

                            />
                        </div>

                    <div id="carsoul__nav" className="carousel-indicators ">
                        <button id="carsoul-btn__indecator" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button id="carsoul-btn__indecator" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button id="carsoul-btn__indecator" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div> */}

        {/* </div> */}

        <div className="trustDiv">
          <div className="TrustedSection ">
            <h3 className="midTitle">Trusted By Over 9,000+ Businesses</h3>
          </div>

          <div className="trustedBusness-container">
            <div className="trustedBusness">
              <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner1.png" />
              <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner2.png" />
              <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner3.png" />
              <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner4.png" />
              <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner5.png" />
              {/* </div>

                        <div className="trustedBusnessNextLine"> */}
              <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner6.png" />
              <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner7.png" />
              <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner9.png" />
              <TrustedCard img="https://demo.epic-webdesign.com/tf-smart/v1/images/partner8.png" />
            </div>
          </div>
        </div>

        {/* next part  Discover */}

        <div className="discoverContiner">
          <div className="descoverSection1">
            <div>
              <h3 className="DicoverText">
                Discover how we can help you to grow your business fast.
              </h3>
              <p>
                Anticas quia voluptas sit aspernatur netsum demo ets ipsam
                voluptatem lorem fugit, seditum netis velas net nesciunt.
              </p>

              <ul className="benefits">
                <li>
                  {" "}
                  <img src="imgs\trueMark.svg" alt="" /> Quias netus magni
                  netsum qui ratione sequi.
                </li>
                <li>
                  {" "}
                  <img src="imgs\trueMark.svg" alt="" /> Venis ratione sequi
                  netus enim tempor magni.
                </li>
                <li>
                  {" "}
                  <img src="imgs\trueMark.svg" alt="" /> Enim ipsam netus
                  voluptatem voluptas.
                </li>
              </ul>

              <button
                onClick={ClikeDiscover}
                type="button"
                className="DiscoverBtn btn btn-primary"
              >
                Discover More
              </button>
            </div>
          </div>

          <div className="discoverSection2">
            <img
              src="https://demo.epic-webdesign.com/tf-smart/v1/images/digital-marketing.png"
              alt=""
            />
          </div>
        </div>

        {/* next part  facts ahency*/}

        <div className="aboutAhency">
          <h3 className="funH3">Fun Facts About Our Agency</h3>
          <div className="ahency">
            <ul className="AhencyIcons">
              <div className="iconsContainer">
                <li>
                  <img src="imgs\gift.svg" alt="" />
                </li>
                <p className="fun">
                  <span className="funSpan">1050+</span> Projects Completed
                </p>
              </div>

              <div className="iconsContainer">
                <li>
                  <img src="imgs\heart.svg" alt="" />
                </li>
                <p className="fun">
                  <span className="funSpan">217K</span> Happy Clients
                </p>
              </div>

              <div className="iconsContainer">
                <li>
                  <img src="imgs\award.svg" alt="" />
                </li>
                <p className="fun">
                  <span className="funSpan">1210</span> Disign Awards
                </p>
              </div>

              <div className="iconsContainer">
                <li>
                  <img src="imgs\basket.svg" alt="" />
                </li>
                <p className="fun">
                  <span className="funSpan">217K</span>Happy Clients
                </p>
              </div>

              <div className="iconsContainer">
                <li>
                  <img src="imgs\bell.svg" alt="" />
                </li>
                <p className="fun">
                  <span className="funSpan">2137</span> Line Of Codes
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialsSection;
