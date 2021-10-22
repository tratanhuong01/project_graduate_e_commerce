import { useEffect, useState } from "react";

export default function useScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    //
    const handleScroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return show;
}
