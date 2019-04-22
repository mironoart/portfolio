
const preloader = function preloader( state, action) {
    switch(action.type){
        case 'PRELOADER_START':
        return state = 'displayPreloader';
        case 'PRELOADER_END':
        return state = 'closePreloader';
        default:{
            if(state === undefined) return state = "displayPreloader";
            else return state;
        }
    }
}
export default preloader;