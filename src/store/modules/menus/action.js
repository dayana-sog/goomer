export function restaurantRequest({ id, name, image }) {
  return {
    type: '@restaurant/RESTAURANTS_IN_REQUEST',
    payload: { id, name, image },
  };
}

export function menusRequest(menuList) {
  return {
    type: '@menus/MENUS_IN_REQUEST',
    payload: { menuList },
  };
}
