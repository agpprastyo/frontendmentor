const YourResult = () => {
    return (
        <div className='lg:px-36 lg:pb-14  lg:pt-36 md:pt-72 pt-[548px]'>
            <div className='flex lg:flex-row md:flex-row flex-col  lg:items-end justify-between '>
                {/*avatar large*/}

                <img src='/images/image-man-eating.webp' alt='avatar'
                     className='lg:max-w-lg md:max-w-sm z-10 bottom-0  '/>

                {/*bmi*/}
                <div className='relative  w-full  lg:pl-32 px-6 pt-12'>
                    <img src='/line-1.png' alt='line 1' className='absolute lg:inline hidden right-0 -top-64 w-20 '/>
                    <h1 className='font-semibold lg:text-5xl text-3xl pb-9 text-gunmetal'>What your BMI result
                        means</h1>
                    <p className='text-base text-dark-electric-blue'>
                        A BMI range of 18.5 to 24.9 is considered a &apos;healthy weight.&apos; Maintaining a healthy
                        weight
                        may lower
                        your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim
                        for a
                        nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables.
                        Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days
                        a
                        week.
                    </p>


                </div>

                <div>

                </div>
            </div>

        </div>
    );
};

export default YourResult;