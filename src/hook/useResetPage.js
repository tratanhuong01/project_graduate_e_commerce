import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../actions/modal/index";

export default function useResetPage(title) {
  const dispatch = useDispatch();
  useEffect(() => {
    //
    window.scrollTo(0, 0);
    dispatch(modalsAction.closeModal());
    if (title) document.title = title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
