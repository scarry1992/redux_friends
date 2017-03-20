export default store=>next=>action=>{
    console.log('Type', action.type);
    next(action);
    console.log('Next state', store.getState());
}