import makeupReducer, { initialstate } from '../redux/Makeup';

describe('makeupreducer', () => {
  test('should return the initial state', () => {
    expect(makeupReducer(undefined, {})).toEqual(initialstate);
  });

  test('should fetch makeupdata', () => {
    const action = {
      type: 'components/home/GET_MAKEUP/fulfilled',
      payload: [
        {
          id: 23,
          name: 'item5',
        },
        {
          id: 24,
          name: 'item4',
        },
        {
          id: 25,
          name: 'item3',
        },
      ],
    };
    expect(makeupReducer(initialstate, action)).toEqual([
      {
        id: 23,
        name: 'item5',
      },
      {
        id: 24,
        name: 'item4',
      },
      {
        id: 25,
        name: 'item3',
      },
    ]);
  });
});
