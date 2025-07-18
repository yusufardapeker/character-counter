import styled, { css } from "styled-components";

export const LetterDensity = styled.div``;

export const Title = styled.h2`
	font-size: 24px;
	margin-bottom: 24px;
`;

export const LetterItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const LetterItem = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
`;

export const Letter = styled.span``;

export const DensityBar = styled.span`
	flex: 1;
	background-color: var(--very-light-purple);
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

export const DensityPercentage = styled.span``;

export const ShowMoreButton = styled.button``;
