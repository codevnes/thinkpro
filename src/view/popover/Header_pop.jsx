import { Popover } from '@headlessui/react'
import { Bars4Icon } from '@heroicons/react/24/outline'

function MyPopover() {
    return (
        <Popover className="relative">
            <Popover.Button className="mr-2 t-btn-icon t-btn-icon--default">
                <Bars4Icon />
            </Popover.Button>

            <Popover.Panel className="absolute z-10">
                <div className="container flex">
                    <div className="category-sidebar-container">
                        <div className="category-sidebar">
                            <div className="category-sidebar-wrapper t-scroll-bar">
                                <div className="category-item category-item--active">
                                    <div className="h-[64px] w-[64px]">
                                        <div className="aspect-h-1 aspect-w-1">
                                            <img alt="Laptop"
                                                className="blur-up t-img ls-is-cached lazyloaded"
                                                src="https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461.png" />
                                        </div>
                                    </div>
                                    <span className="mt-1 block text-center text-ui-sm font-bold">
                                        Laptop
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="category-main flex-1 px-6 py-4">
                        <div className="category-main-header">
                            <div className='flex items-center space-x-3 divide-x divide-gray-30'>
                                sadasdas
                            </div>
                        </div>
                        <div className='mt-4 grid grid-cols-4 gap-6'>
                            <div className='section-brand'>
                                <div className="flex">
                                    <a className="flex items-center">
                                        <h3 className=" text-blue-700 mr-2 font-bold">LG</h3>
                                        <span className=" text-black">Tất cả</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popover.Panel>
        </Popover>
    )
}
export default MyPopover