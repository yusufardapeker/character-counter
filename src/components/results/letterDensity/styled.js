import styled, { css } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export const LetterDensity = styled.div``;

export const Title = styled.h2`
	font-size: 24px;
	margin-bottom: 24px;
`;

export const LetterItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 24px;
`;

export const LetterItem = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`;

export const Letter = styled.span`
	text-transform: uppercase;
	width: 2ch;
`;

export const DensityBar = styled.span`
	flex: 1;
	background-color: var(--off-white);
	height: 8px;
	border-radius: 8px;
	position: relative;

	&::before {
		${({ percent }) => css`
			width: ${percent}%;
		`}

		position: absolute;
		content: "";
		height: 8px;
		border-radius: 8px;
		background-color: var(--red);
	}
`;

export const DensityPercentage = styled.span`
	width: 9ch;
	text-align: right;
`;

export const EmptyTextMessage = styled.p`
	font-size: 16px;
`;

export const ShowLetterDensityButton = styled.button`
	display: flex;
	gap: 8px;
`;

export const ShowMoreArrow = styled(IoIosArrowDown)`
	margin-top: 3px;
`;

export const ShowLessArrow = styled(IoIosArrowUp)`
	margin-top: 3px;
`;
