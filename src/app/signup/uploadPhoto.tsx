
// todo: upload photo component
// Steps
// 1 the component basically a field input
// 2 emits the field data when the photo loaded
// 3 then the parent form component uses that field in a DataForm function 
// 4 then sends it to the server

import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function UploadPhoto({updatePhotoData} : {updatePhotoData: (event: ChangeEvent<HTMLInputElement>) => void}) {

    let [photoUrl, updatePhotoUrl] = useState("");
    let onImageChange = ($event: ChangeEvent<HTMLInputElement>) => {
        console.log("Handling image field change", $event)
        if($event.target?.files?.length) {
            updatePhotoUrl(URL.createObjectURL($event.target.files[0]));
            updatePhotoData($event);
        }
    }

    return (
        <>
            <Image src={photoUrl} alt="" className="border-2 border-dashed rounded-full object-contain w-56 h-56" width={200} height={200} />
            <label className="bg-modern-paragraph text-modern-main p-1 rounded-lg" htmlFor="file">
               {photoUrl ? 'Change' : 'Upload'} 
            </label>
            <input id="file" className="hidden" type="file" onChange={($event: ChangeEvent<HTMLInputElement>) => onImageChange($event)} accept="img/jpg"/>
        </>
    )

}

