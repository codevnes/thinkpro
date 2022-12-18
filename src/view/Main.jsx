import HomeSlides from "./slide/Home_slide1";
import adsImg from "../assets/img/Ads.png";

function Main() {
    return (
        <main className="main">
            <div className=" container flex ">
                <div className="gap-3 py-3 ">
                    <section className="flex gap-3">
                        <div className=" basis-9/12">
                            <HomeSlides />
                        </div>
                        <div className="flex-1 basis-3/12">
                            <div className="h-full flex flex-col justify-between">
                                <div className="px-4 pt-4 py-5 bg-gray-50 rounded-2xl">
                                    <h1 className="text-4xl font-extrabold text-gray-900">Bảo hành</h1>
                                    <p>100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.</p>
                                </div>
                                <div className="px-4 pt-4 py-5 bg-gray-50 rounded-2xl">
                                    <h1 className="text-4xl font-extrabold text-gray-900">Bảo hành</h1>
                                    <p>100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.</p>
                                </div>
                                <div className="px-4 pt-4 py-5 bg-gray-50 rounded-2xl">
                                    <h1 className="text-4xl font-extrabold text-gray-900">Bảo hành</h1>
                                    <p>100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=" py-3" >
                        <h3 className=" py-3">Chỉ bán online</h3>
                        <img className="" src={adsImg} />
                    </section>
                </div>
            </div>

        </main>
    )
}

export default Main
