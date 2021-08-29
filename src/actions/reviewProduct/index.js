import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";
import * as modalsAction from "../../actions/modal/index";

export const loadReviewProductData = (data) => {
  return {
    type: Types.LOAD_REVIEW_PRODUCT_DATA,
    data,
  };
};

export const loadReviewProductByIndexPageRequest = (data) => {
  return async (dispatch) => {
    const { index, products, active } = data;
    const result = await api(
      active === -1
        ? `reviewProducts/${products.idProduct}/${index * 5}/5`
        : `reviewProductByStar/${products.idProduct}/${active}/${index * 5}/5`,
      "GET",
      null
    );
    dispatch(
      loadReviewProductByIndexPage({
        reviews: result.data,
        index: index,
      })
    );
    if (document.getElementById("detailRateComment"))
      window.scrollTo(
        0,
        document.getElementById("detailRateComment").getBoundingClientRect()
          .top +
          window.scrollY -
          100
      );
  };
};

export const loadReviewProductByIndexPage = (data) => {
  return {
    type: Types.LOAD_REVIEW_PRODUCT_INDEX_PAGE,
    data,
  };
};

export const loadReviewProductActiveStarRequest = (data) => {
  return async (dispatch) => {
    const { star, products, reviewAll } = data;
    const result_1 = await api(
      star.star === -1
        ? `${star.query.once}/${products.idProduct}/0/5`
        : `${star.query.once}/${products.idProduct}/${star.star}/0/5`,
      "GET",
      null
    );
    const result_2 = await api(
      star.star === -1
        ? `${star.query.all}/${products.idProduct}`
        : `${star.query.all}/${products.idProduct}/${star.star}`,
      "GET",
      null
    );
    let clone = { ...reviewAll };
    if (star.star === -1) clone.sumReview = result_2.data.sumReview;
    else clone.sumReview = result_2.data;
    dispatch(
      loadReviewProductActiveStar({
        reviews: result_1.data,
        reviewAll: clone,
        index: 0,
        active: star.star,
        products,
      })
    );
  };
};

export const loadReviewProductActiveStar = (data) => {
  return {
    type: Types.LOAD_REVIEW_PRODUCT_ACTIVE_STAR,
    data,
  };
};

export const addReviewProductRequest = (data) => {
  return async (dispatch) => {
    const { user, fullName, email, content, indexStar, products, active } =
      data;
    const reviewProducts = {
      id: -1,
      userReviewProduct: user,
      productReview: null,
      fullName: user ? null : fullName,
      email: user ? null : email,
      content: content,
      image: null,
      star: indexStar,
      useful: 0,
      violate: 0,
      level: 1,
      reply: null,
      type: 1,
      timeCreated: "08-29-2021 08:40:09",
    };
    await api(`reviewProducts/${products.idProduct}`, "POST", reviewProducts);
    const result_1 = await api(
      active === -1
        ? `reviewProducts/${products.idProduct}/${0}/5`
        : `reviewProductByStar/${products.idProduct}/${active}/${0}/5`,
      "GET",
      null
    );
    const result_2 = await api(
      active === -1
        ? `reviewProductsAll/${products.idProduct}`
        : `reviewProductByStarAll/${products.idProduct}/${active}`,
      "GET",
      null
    );
    dispatch(modalsAction.closeModal());
    dispatch(
      addReviewProduct({ reviews: result_1.data, reviewAll: result_2.data })
    );
  };
};

export const addReviewProduct = (data) => {
  return {
    type: Types.ADD_REVIEW_PRODUCT,
    data,
  };
};

export const replyReviewProduct = (data) => {
  return async (dispatch) => {
    const { user, fullName, email, content, products, active, review } = data;
    const reviewProducts = {
      id: -1,
      userReviewProduct: user,
      productReview: null,
      fullName: user ? null : fullName,
      email: user ? null : email,
      content: content,
      image: null,
      star: -1,
      useful: 0,
      violate: 0,
      level: 2,
      reply: review.reviewProduct.id,
      type: 1,
      timeCreated: "08-29-2021 08:40:09",
    };
    await api(`reviewProducts/${products.idProduct}`, "POST", reviewProducts);
    const result_1 = await api(
      active === -1
        ? `reviewProducts/${products.idProduct}/${0}/5`
        : `reviewProductByStar/${products.idProduct}/${active}/${0}/5`,
      "GET",
      null
    );
    const result_2 = await api(
      active === -1
        ? `reviewProductsAll/${products.idProduct}`
        : `reviewProductByStarAll/${products.idProduct}/${active}`,
      "GET",
      null
    );
    dispatch(modalsAction.closeModal());
    dispatch(
      addReviewProduct({ reviews: result_1.data, reviewAll: result_2.data })
    );
  };
};