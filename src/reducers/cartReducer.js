const initialState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
    },
    {
      id: 2,
      title: "Adidas",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
    },
    {
      id: 3,
      title: "Vans",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
    },
    {
      id: 4,
      title: "White",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
    },
    {
      id: 6,
      title: "Blues",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
    },
  ],
  addedItems: [],
  total: 0,
};

function cartReducer(state = initialState, action) {
  return state;
}

export default cartReducer;
