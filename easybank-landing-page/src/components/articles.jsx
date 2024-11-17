const Articles = () => {
    const articlesItems = [
        {
            author: "Claire Robinson",
            title: "Receive money in any currency with no fees",
            description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
            image: "/images/image-currency.jpg",
            alt: "currency",
        },
        {
            author: "Wilson Hutton",
            title: "Treat yourself without worrying about money",
            description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
            image: "/images/image-restaurant.jpg",
            alt: "restaurant",
        },
        {
            author: "Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
            image: "/images/image-plane.jpg",
            alt: "plane",
        },
        {
            author: "Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
            image: "/images/image-confetti.jpg",
            alt: "confetti",
        },
    ]
    return (
        <div id="blog" className="bg-neutral-veryLightGray w-full py-24">
            <div className="container ">
                <h2 className="text-primary-darkBlue lg:text-start text-center text-3xl  mb-16 ">Latest Articles</h2>
                <div className="flex lg:flex-row flex-col justify-between gap-8">
                    {articlesItems.map((item, index) => (
                        <div key={index} className="article-item text-start rounded-lg bg-white lg:mx-0 mx-8 ">
                            <img src={item.image} alt={item.alt} className="mx-auto  rounded-t-lg aspect-[4/3]"/>
                            <div className="p-6">
                                <p className="text-sm mb-2">{item.author}</p>
                                <a href="#">
                                    <h3 className="text-xl text-primary-darkBlue mb-2 hover:text-primary-limeGreen">{item.title}</h3>
                                </a>
                                <p className="text-neutral-grayishBlue">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Articles;