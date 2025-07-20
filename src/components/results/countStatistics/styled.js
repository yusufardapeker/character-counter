import styled, { css } from "styled-components";

export const CountStatistics = styled.div`
	display: grid;
	gap: 24px;
	margin-bottom: 40px;

	@media (width > 376px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const statisticsItem = css`
	padding: 16px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
	border-radius: 8px;
	height: 120px;
`;

export const CountCharacter = styled.div`
	background-color: var(--red);
	${statisticsItem}
`;
export const CountWord = styled.div`
	background-color: var(--grayish-blue);
	${statisticsItem}
`;
export const CountSentence = styled.div`
	background-color: var(--green);
	${statisticsItem}
`;

export const ItemNumber = styled.span`
	font-size: 28px;
	font-weight: var(--fw-xl);

	@media (width > 376px) {
		font-size: 32px;
	}
`;

export const ItemTitle = styled.p``;
