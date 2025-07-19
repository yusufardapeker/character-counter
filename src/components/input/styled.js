import styled, { css } from "styled-components";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

export const Form = styled.form`
	position: relative;
	margin-bottom: 40px;

	&::before {
		position: absolute;
		content: "";
		left: 0;
		right: 0;
		top: 238px;
		height: 10px;
		background: linear-gradient(to top, var(--off-black), transparent);
	}
`;

export const Input = styled.textarea.attrs({
	rows: 8,
	placeholder: "Start typing or paste a text...",
})`
	padding: 16px;
	border-radius: 8px;
	display: block;
	width: 100%;
	color: hsl(0, 0%, 100%);
	background-color: var(--off-black);
	resize: none;
	line-height: 1.5;
	margin-bottom: 24px;

	&::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}

	&::-webkit-scrollbar-track {
		background: var(--white);
	}

	&::-webkit-scrollbar-thumb {
		background: var(--grayish-blue);
	}
`;

export const DefineCharLimit = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	position: absolute;
	top: 240px;
	left: 0;
	z-index: 1;
	background-color: var(--dark-purple);
	padding: 12px;
	border-radius: 4px;
	animation: animateDefineCharLimit 400ms ease-out 1 forwards;

	@keyframes animateDefineCharLimit {
		from {
			transform: scale(0.7);
		}
		to {
			transform: scale(1);
		}
	}
`;

export const CharLimitInput = styled.input.attrs({
	type: "number",
	min: 0,
	autoFocus: true,
})`
	width: 72px;
	border-radius: 2px;
	padding: 4px;
`;

export const IconsWrapper = styled.div`
	display: flex;
	gap: 12px;
`;

export const CheckIcon = styled(FaCheck)`
	background-color: var(--green);
	padding: 2px;
	font-size: 22px;
	border-radius: 2px;
`;

export const CrossIcon = styled(IoMdClose)`
	background-color: var(--red);
	padding: 2px;
	font-size: 22px;
	border-radius: 2px;
`;

export const LimitIndicator = styled.span`
	position: absolute;
	right: 0;
	top: 250px;
	font-size: 15px;

	${({ hasError }) =>
		hasError &&
		css`
			color: var(--red);
			animation: heartBeatAnimation 800ms linear infinite alternate;
		`}

	@keyframes heartBeatAnimation {
		from {
			transform: scale(1);
		}

		to {
			transform: scale(1.1);
		}
	}
`;

export const Filters = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	font-size: 16px;
	margin-bottom: 24px;
`;

export const FilterElementWrapper = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`;

export const inputStyle = css`
	appearance: none;
	width: 16px;
	height: 16px;
	border: 2px solid var(--dark-purple);
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		width: 1.5px;
		height: 16px;
		left: 2px;
		top: -1px;
		background-color: var(--green);
		transform: rotate(30deg);
		display: none;
	}

	&::after {
		content: "";
		position: absolute;
		width: 1.5px;
		height: 16px;
		left: 8px;
		top: -1px;
		background-color: var(--green);
		transform: rotate(30deg);
		display: none;
	}

	&:checked {
		border-color: var(--green);

		&::before,
		&::after {
			display: block;
		}
	}
`;

export const FilterSpacesCheckbox = styled.input.attrs({
	type: "checkbox",
	id: "filter-spaces",
})`
	${inputStyle}
`;

export const FilterSpacesLabel = styled.label.attrs({
	htmlFor: "filter-spaces",
})``;

export const SetLimitCheckbox = styled.input.attrs({
	type: "checkbox",
	id: "set-limit",
})`
	${inputStyle}
`;

export const SetLimitLabel = styled.label.attrs({
	htmlFor: "set-limit",
})``;

export const ReadingTimeElement = styled.p`
	font-size: 16px;
`;
