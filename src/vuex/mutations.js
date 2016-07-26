export const mutations =   {
  ADD_NEW_TASK(state,task){
    state.free.push(task)
  },
  ADD_TO_BACKLOG(state,task){
    state.backlog.push(task)
  },
  ADD_TO_COOL(state,task){
    state.ready.cool.push(task)
  },
  ADD_TO_WARM(state,task){
    state.ready.warm.push(task)
  },
  ADD_TO_HOT(state,task){
    state.ready.hot.push(task)
  },
  ADD_TO_DONE(state,task){
    state.done.push(task)
  },
  ADD_TO_DOING(state,task){
    state.doing.push(task)
  }
}