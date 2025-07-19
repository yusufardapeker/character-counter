import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	text: "",
	showCharLimit: false,
	charLimit: 0,
	showDefineCharLimit: false,
	hasLimitError: false,
	wordCount: 0,
	readingTime: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		setText: (state, action) => {
			const newText = action.payload;

			if (state.showCharLimit && state.charLimit < newText.length) {
				state.hasLimitError = true;
				return;
			} else {
				state.hasLimitError = false;
			}

			state.text = newText;

			state.wordCount = state.text.split(" ").filter((word) => word !== "").length;
			state.readingTime = Math.floor(state.wordCount / 200);
		},

		setLimit: (state, action) => {
			state.charLimit = action.payload;
		},

		showDefineCharLimitPopup: (state, action) => {
			state.showDefineCharLimit = action.payload;
		},

		showCharLimitIndicator: (state, action) => {
			state.showCharLimit = action.payload;
		},
	},
});

export const { setText, setLimit, showDefineCharLimitPopup, showCharLimitIndicator } =
	counterSlice.actions;

export default counterSlice.reducer;
