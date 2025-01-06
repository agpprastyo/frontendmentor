import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react'

const solutions = [
    {name: 'Home', href: '/'},
    {name: 'Portfolio', href: '/portfolio'},
    {name: 'Contact', href: '/contact-me'},
]

export default function Example() {
    return (
        <Popover className="relative">
            <PopoverButton
                className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 ">
                <img src='/images/icons/hamburger.svg' alt='nav options'/>
            </PopoverButton>
            <PopoverPanel
                transition
                className="absolute left-0 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div
                    className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg  ">
                    {solutions.map((item) => (
                        <a key={item.name} href={item.href} className="block p-2 hover:text-indigo-600">
                            {item.name}
                        </a>
                    ))}
                </div>
            </PopoverPanel>
        </Popover>
    )
}
