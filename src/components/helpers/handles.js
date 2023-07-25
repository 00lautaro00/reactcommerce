


export const handles = (dispatch, navigate, cartCount) => {

    const handleCart = (data) => {
        navigate(`/cart/${data.title}`);
        dispatch(cartCount(data))
      }
      return {
        handleCart
      }
}