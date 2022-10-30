import { createSlice } from '@reduxjs/toolkit';

export const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    colorsArray: [
      {
        color: '#ffffff',
        id: 0,
        colorName: 'Use the shuffle button at the bottom to get more colors.'
      },
      {
        color: '#ffffff',
        id: 1,
        colorName: 'Use the + and - buttons to add and remove cards.'
      },
      {
        color: '#ffffff',
        id: 2,
        colorName:
          'Use the dropdowns at the top to change the generation algorithm.'
      }
    ]
  },
  reducers: {
    setColors: (state, action) => {
      state.colorsArray = action.payload;
    }
  }
});

export const { setColors } = colorsSlice.actions;

export default colorsSlice.reducer;
