const Profile = ({ imageSrc, name, tag, nameTextClass = "text-white", tagTextClass = "text-light-gray" }) => {
    return (
        <div>
            <div className="flex">
                <img src={imageSrc} width={52} height={52} alt="" className="rounded-full mr-4 border-white border"/>
                <div className="">
                    <p className={`font-bold text-xl ${nameTextClass}`}>{name}</p>
                    <p className={`font-extralight text-sm ${tagTextClass}`}>{tag}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
