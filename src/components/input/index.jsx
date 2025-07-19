import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";
import {
	setLimit,
	setText,
	showCharLimitIndicator,
	showDefineCharLimitPopup,
} from "../../store/counterSlice";
import { useState } from "react";

function Input() {
	const { text, showCharLimit, showDefineCharLimit, charLimit, hasLimitError, readingTime } =
		useSelector((state) => state.counter);

	const dispatch = useDispatch();
	const [limitInputChecked, setLimitInputChecked] = useState(false);

	const handleCharLimit = (e) => {
		const isChecked = e.target.checked;
		setLimitInputChecked(isChecked);

		if (isChecked) {
			dispatch(showDefineCharLimitPopup(true));
		} else {
			dispatch(showDefineCharLimitPopup(false));
			dispatch(showCharLimitIndicator(false));
		}
	};

	const handleCrossIcon = () => {
		setLimitInputChecked(false);
		dispatch(showDefineCharLimitPopup(false));
	};

	const handleCheckIcon = () => {
		dispatch(showCharLimitIndicator(true));
		dispatch(showDefineCharLimitPopup(false));
	};

	return (
		<S.Form>
			<S.Input onChange={(e) => dispatch(setText(e.target.value))} value={text} />

			{showCharLimit && (
				<S.LimitIndicator hasError={hasLimitError}>
					{text.length}/{charLimit}
				</S.LimitIndicator>
			)}

			{showDefineCharLimit && (
				<S.DefineCharLimit>
					<S.CharLimitInput
						onChange={(e) => dispatch(setLimit(e.target.value))}
						value={charLimit}
					/>

					<S.IconsWrapper>
						<S.CheckIcon onClick={handleCheckIcon} />
						<S.CrossIcon onClick={handleCrossIcon} />
					</S.IconsWrapper>
				</S.DefineCharLimit>
			)}

			<S.Filters>
				<S.FilterElementWrapper>
					<S.FilterSpacesCheckbox />
					<S.FilterSpacesLabel>Exclude Spaces</S.FilterSpacesLabel>
				</S.FilterElementWrapper>

				<S.FilterElementWrapper>
					<S.SetLimitCheckbox onChange={(e) => handleCharLimit(e)} checked={limitInputChecked} />
					<S.SetLimitLabel>Set Character Limit</S.SetLimitLabel>
				</S.FilterElementWrapper>
			</S.Filters>

			<S.ReadingTimeElement>
				Est. reading time:&nbsp;
				{readingTime === 0 ? "<1 minute" : `${readingTime} minutes`}
			</S.ReadingTimeElement>
		</S.Form>
	);
}

export { Input };
