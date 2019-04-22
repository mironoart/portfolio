export function startPreloader(){
    return{
        type: 'PRELOADER_START',
    }
}

export function endPreloader(){
    return{
        type: 'PRELOADER_END',
    }
}