import "./navbar.css";
import Image from "next/image";

export default function Navbar() {

    return (

        <>
            <div className="wrapper flex justify-between items-end pb-2">

                <div className="logo relative text-modern-heading text-3xl font-bold">Intelligence</div>

                <div className="account-badge flex justify-center gap-1">

                    <div className="personal-info flex justify-center items-center gap-2 p-[3px] pr-2 pl-2 rounded-lg bg-modern-heading">
                        <Image className="personal-photo" src={'/PersonalPhoto.jpg'} alt="2" style={{borderRadius: '100px'}} width={30} height={30} />
                        <div className="name text-md text-modern-black">Ahmad</div>
                        <div className="account-type pl-2 pr-1 text-modern-main border-s-2 border-modern-main">T</div>
                    </div>

                    <div className="popup flex items-end">
                            <div className="border-4 content flex justify-between items-start gap-2 p-2 w-full h-[85%] overflow-hidden rounded-lg bg-modern-heading">
                                <Image className="personal-photo basis-1/2" src={'/PersonalPhoto.jpg'} alt="2" style={{borderRadius: '100px'}} width={100} height={100} />
                                <div className="separator h-full w-[1px] rounded-full border-2 shadow-2xl"></div>
                                <div className="info flex flex-col justify-between  gap-1 basis-1/2 h-full">
                                    <div className="name flex flex-col gap-2 text-4xl font-thin text-modern-black">
                                        Ahmad
                                        <div className="account-type bg-modern-main text-modern-paragraph p-1 rounded-lg w-fit text-xs font-bold">Teacher</div>
                                    </div>
                                    <button className="logout-btn basis-1/4 flex justify-left items-center p-1 border-none outline-none text-modern-main font-bold rounded-full">
                                        Logout
                                    </button>
                                </div>
                            </div>
                    </div>

                </div>

            </div>
        </>

    )

}
