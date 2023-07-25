


export const handles = (dispatch, navigate, cartCount,cartState) => {

    const handleCart = (data) => {
        navigate(`/cart/${data.title}`);
        dispatch(cartCount())
        dispatch(cartState(data))
      }
      return {
        handleCart
      }
}