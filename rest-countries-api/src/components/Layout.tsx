import {ReactNode} from "react";

import Header from "./Header.tsx";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="">
            <Header/>
            {/*<div className='bg-light-1 dark:bg-dark-1 z-10'>*/}

            {/*</div>*/}
            <main className=" bg-light-2 dark:bg-dark-2 ">
                <div className='max-w-[1440px] mx-auto '>
                    <div className='lg:px-20 lg:py-20 px-6 py-6'>

                        {children}
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Layout;
