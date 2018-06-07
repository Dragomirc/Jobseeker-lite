export const createPath = state => {
    let path = "/jobs?";
      for(let property in state){
        let value = state[property];
        if(state.hasOwnProperty(property) && value){
           path += `${property}=${value}&`
        }
      }
    return path;
  }
