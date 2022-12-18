import reactLogo from '../assets/img/logo.svg'
import { ShoppingCartIcon, MagnifyingGlassIcon, Bars4Icon, CubeIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline'
import Swiper_header from './slide/Header_Slide'
import MyPopover from './popover/Header_pop'


function Header() {
    return (
        <>
            <header className="the-header">
                <div className="container mx-auto py-2 ">
                    <div className="flex items-center w-full space-x-6">
                        <div className="flex-1 flex items-center space-x-6">
                            <a className='logo' href='/'>
                                <img src={reactLogo} className="logo" alt="react-logo" />
                            </a>
                            <div className="btn-group-catalog">
                                <div className="flex items-center">
                                    <MyPopover />
                                    <div className="text-ui font-bold cursor-pointer">
                                        Danh mục
                                    </div>
                                    <a href="/khuyen-mai" className="btn-promo ml-5 hover:text-blue">
                                        Khuyến mại
                                    </a>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <section className="">
                                    <div>
                                        <div className='t-input-search'>
                                            <MagnifyingGlassIcon className="w-6 h-6" />
                                            <input type="text" placeholder="Tên sản phẩm, nhu cầu, hãng" className='t-input-search__input' />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <div className='flex'>
                                    <button className="t-btn-icon t-btn-icon--default" style={{ width: '70px' }}>
                                        <ShoppingCartIcon className="w-6 h-6" />
                                        <span className="flex pl-1">0</span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <button className="t-btn-icon t-btn-icon--default">
                                        <CubeIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <button className="t-btn-icon t-btn-icon--default">
                                        <BellIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <button className="t-btn-icon t-btn-icon--default">
                                        <UserIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className='the-navigation the-navigation--visible'>
                <div className='container mx-auto flex items-center'>
                    <Swiper_header />
                </div>
            </nav>
        </>
    )
}

export default Header
