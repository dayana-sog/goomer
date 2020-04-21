import produce from 'immer';

const INITIAL_STATE = {
  id: '',
  restaurantId: '',
  name: '',
  namePlate: '',
  image: '',
  price: '',
  group: '',
  sales: [],
  loading: false,
};

export default function menus(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@restaurant/RESTAURANTS_IN_REQUEST':
      return produce(state, (draft) => {
        draft.id = action.payload.id;
        draft.name = action.payload.name;
        draft.image = action.payload.image;
      });
    case '@menus/MENUS_IN_REQUEST':
      return state;
    default:
      return state;
  }
}
