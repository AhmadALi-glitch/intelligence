import { useContext } from "react";
import "./navbar.css";
import Image from "next/image";
import { ThemeContext, ThemeDispatcherContext } from "@/theme/context";
import { Bell } from "@phosphor-icons/react";
import { Gear } from "@phosphor-icons/react";

export default function Navbar() {

    let [theme, dispatchThemeChanging] = [ useContext(ThemeContext), useContext(ThemeDispatcherContext) ];

    return (

        <>
            <div className={ `wrapper ${theme.name} flex justify-between items-end pb-2` }>

                <div className={ `logo relative ${theme.color.paragraph} text-3xl font-light ${theme.font.heading}` }>Intelligence</div>

                <div className="flex gap-4">

                    <button className={`${theme.color.dilect_1}`} onClick={() => dispatchThemeChanging({type: `switch_to_${theme.name == 'classic' ? 'modern' : 'classic'}`})}>
                        <Gear type="duetone" size={25}/>
                    </button>

                    <button className={`${theme.color.dilect_1}`}>
                        <Bell type="duetone" size={25}/>
                    </button>

                    

                    <div className={ `account-badge flex justify-between gap-3` }>

                        <div className={ `personal-info flex justify-center items-center gap-2 p-[3px] pr-2 pl-2 rounded-lg ${theme.background.heading}` }>
                            <Image className="personal-photo" src={'/PersonalPhoto.jpg'} alt="2" style={{borderRadius: '100px'}} width={30} height={30} />
                            <div className={ `name text-md ${theme.color.main}` }>Ahmad</div>
                            <div className={ `account-type pl-2 pr-1 border-s-2 ${theme.color.main} ${theme.border.main}` }>T</div>
                        </div>

                        <div className="popup flex items-end">
                                <div className={ `content flex justify-between items-start gap-2 p-2 w-full h-[88%] overflow-hidden rounded-lg ${theme.background.heading}` }>
                                    <Image className="personal-photo basis-1/2" src={'/PersonalPhoto.jpg'} alt="2" style={{borderRadius: '100px'}} width={100} height={100} />
                                    <div className="info flex flex-col justify-center gap-1 basis-1/2 h-full">
                                        <div className={ `name flex flex-col gap-2 text-4xl font-thin ${theme.color.main}` }>
                                            Ahmad
                                            <div className={ `account-type ${theme.background.main} ${theme.color.paragraph} p-1 rounded-lg w-fit text-xs font-bold` }>Teacher</div>
                                        </div>
                                        {/* <button className={`logout-btn basis-1/4 flex justify-left items-center p-1 border-none outline-none ${theme.color.main} font-bold rounded-full`}>
                                            Logout
                                        </button> */}
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>

            </div>
        </>

    )

}
