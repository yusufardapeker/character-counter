import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	text: "",
	originalText: "",
	excludedSpacesText: "",
	showCharLimit: false,
	charLimit: 0,
	showDefineCharLimit: false,
	hasLimitError: false,
	wordCount: 0,
	readingTime: 0,
	totalCharCount: 0,
	sentenceCount: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		setText: (state, action) => {
			const newText = action.payload;
			const wordPerMinute = 200;

			if (state.showCharLimit && state.charLimit < newText.length) {
				state.hasLimitError = true;
				return;
			} else {
				state.hasLimitError = false;
			}

			state.text = newText;
			state.originalText = newText;

			state.totalCharCount = state.text.length;

			state.wordCount = state.originalText
				.split(" ")
				.filter((word) => /[abcçdefgğhıijklmnoöprsştuüvyzwqx]/i.test(word)).length;
			state.readingTime = Math.floor(state.wordCount / wordPerMinute);

			state.sentenceCount = state.text
				.split(/(?<=[.!?])\s+/)
				.filter((sentence) => /[abcçdefgğhıijklmnoöprsştuüvyzwqx]/i.test(sentence)).length;
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

		filterSpaces: (state, action) => {
			if (action.payload) {
				state.excludedSpacesText = state.text
					.split(" ")
					.filter((word) => word !== "")
					.join("");

				state.text = state.excludedSpacesText;
				state.totalCharCount = state.excludedSpacesText.length;
			} else {
				state.text = state.originalText;
				state.totalCharCount = state.text.length;
			}
		},
	},
});

export const { setText, setLimit, showDefineCharLimitPopup, showCharLimitIndicator, filterSpaces } =
	counterSlice.actions;

export default counterSlice.reducer;
