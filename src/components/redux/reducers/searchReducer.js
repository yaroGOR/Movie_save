const initialState = {
    title:""
  }
  
  export default function searchReducer(state = initialState, action) {
    switch (action.type) {

      case 'SET_TITLE' :{
        console.log(state)
        return {
            title: action.payload
        }
  
      }
      case 'CLEAR_STATE':{
        return{
            title:""
        }
    }
      default:
        return state
    }
  }