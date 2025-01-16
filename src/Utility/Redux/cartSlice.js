import {createSlice} from "@reduxjs/toolkit"

const  cartSlice = createSlice({
  name:"cart",
  initialState: {
    items:[]
  },
  reducers:{
    addproduct: (state, action) => {
      const { title } = action.payload;
         if(!state.items.includes(title))
        {
          state.items.push(title);
        }
     
      console.log(state.items);
    },
    removeproduct: (state,action)=>{
       const {title} = action.payload;
      state.items = state.items.filter((tit)=> tit!=title)
    }
    
  }
})

export const {addproduct,removeproduct} = cartSlice.actions;

export default cartSlice.reducer