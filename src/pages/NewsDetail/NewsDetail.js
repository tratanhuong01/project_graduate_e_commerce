import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../containers/Modal";
import * as modalsAction from "../../actions/modal/index";
import MainNewsDetail from "../../containers/NewsDetail/MainNewsDetail";
import * as cartsAction from "../../actions/cart/index";
import api from "../../Utils/api";
import Loading from "../../components/General/Loading/Loading";

function NewsDetail(props) {
  //
  const dispatch = useDispatch();
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  const { match } = props;
  const [newsDetail, setNewsDetail] = useState(null);
  useEffect(() => {
    //
    let mounted = true;
    const fetch = async () => {
      window.scrollTo(0, 0);
      dispatch(modalsAction.closeModal());
      dispatch(cartsAction.loadCartRequest(user));
      let formData = new FormData();
      formData.append("slug", match.match.params.slug);
      await api("updateViewNews", "PUT", formData);
      const result = await api("getNewsBySlug", "POST", formData);
      setNewsDetail(result.data);
    };
    if (mounted) fetch();
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);
  //
  return newsDetail ? (
    <>
      <MainNewsDetail newsDetail={newsDetail} />
      <Modal />
    </>
  ) : (
    <Loading />
  );
}

export default NewsDetail;
