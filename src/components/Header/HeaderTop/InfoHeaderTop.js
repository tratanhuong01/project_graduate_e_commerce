import React from 'react'
import useInfoWebsite from '../../../hook/useInfoWebsite';

export default function InfoHeaderTop() {
    //
    const info = useInfoWebsite(2);
    //
    return (
        <div className="md:w-3/12 lg:w-1/2 flex items-center">
            <span className="bx bx-phone ml-3 mr-2"></span>
            <span className="mr-4 hover:text-organce cursor-pointer">
                {info ? info.phone ? info.phone : '' : ''}
            </span>
            <span className="bx bx-mail-send mr-2"></span>
            <span className="mr-4 hover:text-organce cursor-pointer">
                {info ? info.email ? info.email : '' : ''}
            </span>
        </div>
    )
}
