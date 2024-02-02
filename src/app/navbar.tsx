import "./navbar.css";
import Image from "next/image";

export default function Navbar() {

    return (

        <>
            <div className="wrapper flex justify-between items-end pb-2">
                <div className="logo relative text-modern-heading text-3xl font-thin">Intelligence</div>
                {/* when hover on this */}
                <div className="account-badge flex justify-center gap-1">
                    {/* these elemets inside the .account-badge should slide down .. like if they sliding down in the popup box
                        apply easing of cubic-bezier .1 .3 1 1
                    */}
                    <div className="personal-info flex justify-center items-center gap-2 p-[3px] pr-2 pl-2 rounded-lg bg-modern-heading">
                        <Image className="personal-photo" src={'/PersonalPhoto.jpg'} alt="2" style={{borderRadius: '100px'}} width={30} height={30} />
                        <div className="name text-md text-modern-black">Ahmad</div>
                        <div className="account-type pl-2 pr-1 text-modern-main border-s-2 border-modern-main">T</div>
                    </div>
                    {/* slide this down */}
                    <div className="popup flex items-end">
                            {/* and apply appear animation on these elements */}
                            {/* .personal-photo image slide from left */}
                            {/* .account-type and .name slide from top */}
                            <div className="content flex justify-between items-start gap-2 p-2 w-full h-[92%] overflow-hidden rounded-lg bg-modern-heading">
                                <Image className="personal-photo basis-1/2" src={'/PersonalPhoto.jpg'} alt="2" style={{borderRadius: '100px'}} width={170} height={170} />
                                <div className="info flex flex-col gap-1 basis-1/2 h-full">
                                    <div className="name text-4xl font-semibold text-modern-black">Ahmad</div>
                                    <div className="account-type bg-modern-main text-modern-paragraph p-1 rounded-lg w-fit">Teacher</div>
                                    <button className="basis-1/2 border-none outline-none">
                                        
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>

    )

}
