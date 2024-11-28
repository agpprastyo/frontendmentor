import Profile from "./components/profile.jsx";

export const App = () => (
    <div
        className="flex flex-col items-center lg:justify-center w-full h-full lg:overflow-hidden  font-barlow-semi-condensed bg-light-grayish-blue">
        <div className="container px-4 py-6">
            <div className="lg:grid lg:grid-cols-4 lg:grid-rows-4 gap-8 flex flex-col h-full  ">
                <div
                    className="lg:col-span-2 lg:row-span-2 flex flex-col  bg-moderate-violet p-8 rounded-xl text-white shadow-2xl lg:relative ">
                    <div className="absolute lg:top-6 lg:right-32 top-12 right-16 transform scale-150 z-10">
                        <img src="/images/bg-pattern-quotation.svg" alt="Quotation Background"
                             className="lg:w-full lg:h-auto"/>
                    </div>

                    <div className="z-20 relative">
                        <Profile
                            imageSrc="/images/image-daniel.jpg"
                            name="Daniel Clifford"
                            tag="Verified Graduate"
                        />
                        <p className="text-2xl font-bold py-4">
                            I received a job offer mid-course, and the subjects I learned were current, if not more so,
                            in the company I joined. I honestly feel I got every penny’s worth.
                        </p>
                        <p className="text-light-gray font-thin">
                            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                            transition and have heard some people who had an amazing experience here. I signed up
                            for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
                            The next 12 weeks was the best - and most grueling - time of my life. Since completing
                            the course, I’ve successfully switched careers, working as a Software Engineer at a VR
                            startup.
                            ”
                        </p>
                    </div>
                </div>


                <div
                    className="lg:row-span-2 lg:col-start-3 bg-very-dark-grayish-blue py-6 lg:px-12 px-8 rounded-xl text-white flex flex-col shadow-2xl ">
                    <Profile
                        imageSrc="/images/image-jonathan.jpg"
                        name="Jonathan Walters"
                        tag="Verified Graduate"
                    />
                    <p className="text-2xl font-bold py-4">The team was very supportive and kept me motivated</p>
                    <p className="text-light-gray font-thin">
                        “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
                        for a big company. This was one of the best investments I’ve made in myself. ”
                    </p>
                </div>
                <div className="lg:row-span-4 lg:col-start-4 bg-white py-6 lg:px-12 px-8 rounded-xl shadow-2xl">
                    <Profile
                        imageSrc="/images/image-kira.jpg"
                        name="Kira Whittle"
                        tag="Verified Graduate"
                        nameTextClass="text-very-dark-blackish-blue"   // Example overrides
                        tagTextClass="text-very-dark-grayish-blue"
                    />
                    <p className="text-2xl text-very-dark-blackish-blue font-bold py-4">
                        Such a life-changing experience. Highly recommended!
                    </p>
                    <p className="text-very-dark-grayish-blue font-thin">
                        “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
                        professionals who can help me learn programming step by step. I was encouraged to enroll by a
                        former
                        student of theirs who can only say wonderful things about the program. The entire curriculum and
                        staff
                        did not disappoint. They were very hands-on and I never had to wait long for assistance. The
                        agile team
                        project, in particular, was outstanding. It took my learning to the next level in a way that no
                        tutorial
                        could ever have. In fact, I’ve often referred to it during interviews as an example of my
                        development
                        experience. It certainly helped me land a job as a full-stack developer after receiving multiple
                        offers.
                        100% recommend! ”
                    </p>
                </div>
                <div
                    className="lg:row-span-2 lg:row-start-3 p-8  rounded-xl bg-white text-white flex flex-col shadow-2xl">
                    <Profile
                        imageSrc="/images/image-jeanette.jpg"
                        name="Jeanette Harmon"
                        tag="Verified Graduate"
                        nameTextClass="text-very-dark-blackish-blue"   // Example overrides
                        tagTextClass="text-very-dark-grayish-blue"
                    />
                    <p className="text-2xl text-very-dark-blackish-blue font-bold py-4">
                        An overall wonderful and rewarding experience
                    </p>
                    <p className="text-very-dark-grayish-blue font-thin">
                        “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good
                        living
                        while doing something I love. ”
                    </p>
                </div>
                <div
                    className="lg:col-span-2 lg:row-span-2 lg:row-start-3 bg-very-dark-blackish-blue rounded-xl p-8 shadow-2xl">
                    <Profile
                        imageSrc="/images/image-patrick.jpg"
                        name="Patrick Abrams"
                        tag="Verified Graduate"
                    />
                    <p className="text-2xl font-bold py-4 text-white">
                        Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them
                        and
                        learning from their experiences was easy.
                    </p>
                    <p className="text-light-gray font-thin">
                        “ The staff seem genuinely concerned about my progress which I find really refreshing. The
                        program
                        gave me the confidence necessary to be able to go out in the world and present myself as a
                        capable
                        junior developer. The standard is above the rest. You will get the personal attention you need
                        from
                        an incredible community of smart and amazing people. ”
                    </p>
                </div>
            </div>
        </div>
    </div>

);
