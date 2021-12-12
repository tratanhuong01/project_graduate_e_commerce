import { useEffect, useState } from "react";
import api from "../Utils/api";

export default function useInfoWebsite(type, headers) {
    //
    const [info, setInfo] = useState(null);
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`configWebsites/type/${type}`, 'GET', null, headers);
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
    }, [type, headers]);
    return info;
}