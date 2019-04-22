
const modalMenu = function modalMenu( state, action) {
    switch(action.type){
        case 'OPEN_MODAL':
        return state = 'displayModalWindow';
        case 'CLOSE_MODAL':
        return state = 'closeModalWindow';
        default:{
            if(state === undefined) return state = "closeModalWindow";
            else return state;
        }
    }
}
export default modalMenu;