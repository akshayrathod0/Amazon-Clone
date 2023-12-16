export const initialState = {
    basket: [],
    user: null
};

//Selector
export const getBasketTotal = (basket) => 
     basket?.reduce((amount, item) => item.price + amount, 0);

//here action attribute say's you want to add basket or remove from the basket or what you want to do
const reducer = (state, action) =>{
     switch(action.type) {
        case 'ADD_TO_BASKET':
            return{
                 ...state,  // it say's wherever the basket and add item to the basket
                 basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
               const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
               );
               let newBasket = [...state.basket];

               if(index >= 0){
                    newBasket.splice(index, 1);
               }else{
                    console.warn(
                         `Cant remove product (id: ${action.id}) as its not in basket`
                    )
               }
              return{
               ...state,
               basket: newBasket
              }
          case "SET_USER":
               return{
                    ...state,
                    user: action.user
               }

         default:
           return state;
     }
};

export default reducer;