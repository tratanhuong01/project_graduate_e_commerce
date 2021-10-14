import * as Types from "../../constants/ActionTypes";
import * as modalsAction from "../../actions/modal/index";
import * as reviewProductApi from "../../api/reviewProductApi";
import * as productApi from "../../api/productApi";

export const loadReviewProductData = (data) => {
  return {
    type: Types.LOAD_REVIEW_PRODUCT_DATA,
    data,
  };
};

export const loadReviewProductByIndexPageRequest = (data, headers) => {
  return async (dispatch) => {
    const { index, products, active } = data;
    try {
      const result = await reviewProductApi.getReviewProductByProductLimitPage(
        products.idProduct,
        active,
        index * 5,
        5,
        false,
        headers
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
    } catch (error) {
      throw error;
    }
  };
};

export const loadReviewProductByIndexPage = (data) => {
  return {
    type: Types.LOAD_REVIEW_PRODUCT_INDEX_PAGE,
    data,
  };
};

export const loadReviewProductActiveStarRequest = (data, headers) => {
  return async (dispatch) => {
    const { star, products, reviewAll } = data;
    try {
      const result_1 =
        await reviewProductApi.getReviewProductByProductLimitStar(
          star.query.once,
          star.star,
          products.idProduct,
          0,
          5,
          headers
        );
      const result_2 = await reviewProductApi.getAllReviewProductByProduct(
        star.query.all,
        products.idProduct,
        star.star,
        headers
      );
      let clone = { ...reviewAll };
      if (star.star === -1) clone.sumReview = result_2.data.sumReview;
      else clone.sumReview = result_2.data.length;
      dispatch(
        loadReviewProductActiveStar({
          reviews: result_1.data,
          reviewAll: clone,
          index: 0,
          active: star.star,
          products,
        })
      );
    } catch (error) {
      throw error;
    }
  };
};

export const loadReviewProductActiveStar = (data) => {
  return {
    type: Types.LOAD_REVIEW_PRODUCT_ACTIVE_STAR,
    data,
  };
};

export const addReviewProductRequest = (data, headers) => {
  return async (dispatch) => {
    const { user, fullName, email, content, indexStar, products, active } =
      data;
    const reviewProduct = {
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
    try {
      await reviewProductApi.addReviewProductByProduct(
        products.idProduct,
        reviewProduct,
        headers
      );
      const result_1 =
        await reviewProductApi.getReviewProductByProductLimitPage(
          products.idProduct,
          active,
          0,
          5,
          true,
          headers
        );
      const result_2 = await reviewProductApi.getReviewProductByProductMain(
        products.idProduct,
        headers
      );
      let result =
        (result_2.data.oneStar * 5 * 1 +
          result_2.data.twoStar * 5 * 2 +
          result_2.data.threeStar * 5 * 3 +
          result_2.data.fourStar * 5 * 4 +
          result_2.data.fiveStar * 5 * 5) /
        ((result_2.data.oneStar +
          result_2.data.twoStar +
          result_2.data.threeStar +
          result_2.data.fourStar +
          result_2.data.fiveStar) *
          5 *
          5);
      await productApi.updateReviewProduct(
        products.idProduct,
        ((result * 10) / 2).toFixed(1) * 10,
        headers
      );
      dispatch(modalsAction.closeModal());
      dispatch(
        addReviewProduct({ reviews: result_1.data, reviewAll: result_2.data })
      );
    } catch (error) {
      throw error;
    }
  };
};

export const addReviewProduct = (data) => {
  return {
    type: Types.ADD_REVIEW_PRODUCT,
    data,
  };
};

export const replyReviewProduct = (data, headers) => {
  return async (dispatch) => {
    const { user, fullName, email, content, products, active, review } = data;
    try {
      const reviewProduct = {
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
      await reviewProductApi.addReviewProductByProduct(
        products.idProduct,
        reviewProduct,
        headers
      );
      const result_1 =
        await reviewProductApi.getReviewProductByProductLimitPage(
          products.idProduct,
          active,
          0,
          5,
          false,
          headers
        );
      const result_2 = await reviewProductApi.getReviewProductByProductMain(
        products.idProduct,
        headers
      );
      dispatch(modalsAction.closeModal());
      dispatch(
        addReviewProduct({ reviews: result_1.data, reviewAll: result_2.data })
      );
    } catch (error) {
      throw error;
    }
  };
};
