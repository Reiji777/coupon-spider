import db from "../firebase";

export const fetchInit = () => async dispatch => {
  const coupons = await db
    .collection("testShops")
    .get()
    .then(
      querySnapshot => {
      return querySnapshot.docs.map(elem => elem.data())
    })
    .catch(e => console.log(`Error! ${e}`));
  dispatch({ type: "INIT", coupons });
};

