import { useEffect, useState } from "react";

export default function useScrollMenu() {
  const [subClassMenu, setSubClassMenu] = useState(null);
  useEffect(() => {
    //
    window.onscroll = () => {
      if (window.scrollY > 30) setSubClassMenu("shadow-lg");
      else setSubClassMenu(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return subClassMenu;
}
