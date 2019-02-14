/* eslint-disable default-case */
const defaultObj = { 
    };

export default (state = defaultObj, action) => {
    switch (action.type) {
        case "INIT":
            return {
                ...state,
                "coupons": action.coupons
            }
        
        default:
            return state;
    }
}