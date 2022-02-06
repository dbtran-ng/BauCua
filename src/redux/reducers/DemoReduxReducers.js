import {ADD_COMMENT} from '../types/type'
const stateDefault = {
    comments: [
        {name:'Yone',content: 'Hi ! yasuo !',avatar:`https://i.pravatar.cc/150?u=yone`},
        {name:'Yone',content: 'Hi ! yasuo !',avatar:`https://i.pravatar.cc/150?u=yasuo`},
    ],
}

const DemoReduxReducers = (state = stateDefault, action) =>{
    switch(action.type){
        case ADD_COMMENT:{
            state.comments = [...state.comments,action.userComments];
            return {...state};
        }
        default:
            return {...state};
    }
}

export default DemoReduxReducers;