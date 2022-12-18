import React from "react";
import HomeSlideImg from "../../assets/img/SlideHome.jpg";

class HomeSlides extends React.Component {

    render() {
        return (
            <>
                <div className=" w-full">
                    <img className="rounded-xl" src={HomeSlideImg} />
                </div>
            </>
        )
    }
}


export default HomeSlides

