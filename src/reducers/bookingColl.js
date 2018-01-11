import bookings from './bookings';

const COL_INITIAL_STATE = [{
    title: "Kickboxning",
    time: "Må 08:30",
    value: 2,
    warning: false
},{
    title: "Thaiboxning",
    time: "Må 11:30",
    value: 10,
    warning: false
}, {
    title: "BeatBox",
    time: "Ti 12:30",
    value: 10,
    warning: false
}, {
    title: "Yoga",
    time: "On 13.30",
    value: 10,
    warning: false
}, {
    title: "Bananböjning",
    time: "To 07:30",
    value: 10,
    warning: false
}, {
    title: "Thaiboxning",
    time: "To 17:30",
    value: 10,
    warning: false
}, {
    title: "AW-box",
    time: "Fr 18:30",
    value: 10,
    warning: false
}];

const bookingColl = (state = COL_INITIAL_STATE, action) => {

  if (action.type.startsWith('booking/')) {
      state = [
        ...state.slice(0, action.index),
        bookings(state[action.index], action),
        ...state.slice(action.index + 1)
      ];
  }

  return state;
};

export default bookingColl;