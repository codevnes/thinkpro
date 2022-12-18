// Import Swiper React components

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, } from "swiper";

import Cateimg from "../../assets/img/Cate_img/Rectangle.png";

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'



// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

class Swiper_header extends React.Component {
    state = {
        cateList: [
            {
                id: 1,
                name: 'Laptop',
                img: Cateimg
            },
            {
                id: 2,
                name: 'Laptop 2',
                img: Cateimg
            },
            {
                id: 3,
                name: 'Laptop 3',
                img: Cateimg
            },
            {
                id: 4,
                name: 'Laptop 4',
                img: Cateimg
            },
            {
                id: 5,
                name: 'Laptop 5',
                img: Cateimg
            },
            {
                id: 6,
                name: 'Laptop 6',
                img: Cateimg
            },
            {
                id: 7,
                name: 'Laptop 7',
                img: Cateimg
            },
        ]
    }


    render() {
        let { cateList } = this.state;

        return (
            <>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={5}
                    spaceBetween={5}
                    slidesPerGroupAuto
                    className="mySwiper"
                >

                    {cateList.map(item => {
                        return (
                            <SwiperSlide key={item.id}>
                                <a className="">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-[52px] h-[52px]">
                                            <img src={item.img} />
                                        </div>
                                        <span className="flex-1 whitespace-nowrap text-ui font-bold">{item.name}</span>
                                    </div>
                                </a>
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper>
                <div className="flex-1 flex space-x-2 pl-6 py-[6px] navigation__button">
                    <button className="the-navigation__button-prev t-btn-icon t-btn-icon--disabled t-btn-icon--default">
                        <ArrowLeftIcon />
                    </button>
                    <button aria-label="Kế tiếp" className="the-navigation__button-next t-btn-icon t-btn-icon--default">
                        <ArrowRightIcon />
                    </button>
                </div>
            </>

        );

    }
}

export default Swiper_header