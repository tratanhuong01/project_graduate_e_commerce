import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../actions/modal/index";

export default function useScrollTop() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    //
    window.scrollTo(0, 0);
    window.onscroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };
    dispatch(modalsAction.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return show;
}
