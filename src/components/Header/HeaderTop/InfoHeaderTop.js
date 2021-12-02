import React, { useEffect, useState } from 'react'
import api from '../../../Utils/api';

export default function InfoHeaderTop() {
    //
    const [info, setInfo] = useState(null);
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`configWebsites/type/${2}`, 'GET', null);
            if (unmounted) return;
            if (result.data) {
                setInfo(JSON.parse(result.data.content).data);
            }
        }
        fetch();
        return () => {
            unmounted = false;
        }
        //
    }, []);
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
