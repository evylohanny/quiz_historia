import {useState} from "react";
import './App.css'
import Heart from "./components/Heart";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const App = () => {
  // Estado para controlar a visibilidade da div
  const [isVisible, setIsVisible] = useState(false);

  // Função para alternar a visibilidade
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="container-total">
        <div className="hearts-container">
          {Array(10).fill().map((_, index) => (
          <Heart key={index} />
          ))}
        </div>

        {/* O conteúdo que ficará por baixo da div */}
        <div className="h1">
          <h1>Quiz</h1>
          <h1>Revolucionário</h1>
        </div>

        <div className="button-container">
          <button onClick={toggleVisibility} className="start-button">START</button>
        </div>

        {/* Div que aparece por cima do conteúdo */}
        {isVisible && (
        <div className="div-surgir">
          <a href="App.jsx"><img src="🦆 icon _Angle Double Left_.svg"/></a>
          <Swiper 
          // instalar módulos do Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={1}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className = 'div_swiper'
          >
            <SwiperSlide>
              <div className="conteudo-swiper">
                <div className="pergunta">
                  <h1>1. Em qual país a Revolução Industrial começou?</h1>
                </div>
                <div className="opções">
                  <ul>
                    <li>França</li>
                    <li>Espanha</li>
                    <li>Inglaterra</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="fundo.jpg"/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        )}
      </div>
    </>
  );
};

export default App;
