import { useEffect, useState } from "react";

export default function useScrollEvent() {
  const [subClassMenu, setSubClassMenu] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onscroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
      if (window.scrollY > 30) setSubClassMenu("shadow-lg");
      else setSubClassMenu(null);
    };
  }, []);
  return { subClassMenu, show };
}
