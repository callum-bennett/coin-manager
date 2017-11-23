
export default function(state = null, action) {
  switch (action.type) {
    case 'someaction' :
      return '';
    default:
      return state;
  }
}