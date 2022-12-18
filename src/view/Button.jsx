import React from "react";
import { ShoppingCartIcon, MagnifyingGlassIcon, Bars4Icon, CubeIcon, BellIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'


class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive,
        }));
    }

    render() {
        const { isActive } = this.state;
        const svgUrl = isActive ? <Bars4Icon /> : <XMarkIcon />;
        const buttonText = isActive ? "Danh mục" : "Đóng menu";
        return (
            <>
                <div className="flex items-center">
                    <button
                        onClick={this.handleClick} className="mr-2 t-btn-icon t-btn-icon--default">
                        {svgUrl}
                    </button>
                    <div className="text-ui font-bold cursor-pointer">
                        {buttonText}
                    </div>
                    <a href="/khuyen-mai" className="btn-promo ml-5 hover:text-blue">
                        Khuyến mại
                    </a>
                </div>

                <div className="test-container"
                    style={{
                        height: isActive ? '0' : '100px',
                        background: '#FFF',
                        transition: 'all 0.5s ease'
                    }}>
                    a

                </div>
            </>

        );
    }
}

export default MyButton  