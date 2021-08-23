import { useEffect, useState } from "react";

export default function useScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    //
    window.onscroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return show;
}
