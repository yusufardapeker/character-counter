import { useSelector } from "react-redux";
import * as S from "./styled";

function CountStatistics() {
	const { totalCharCount, wordCount, sentenceCount } = useSelector((state) => state.counter);

	return (
		<S.CountStatistics>
			<S.CountCharacter>
				<S.ItemNumber>{totalCharCount}</S.ItemNumber>
				<S.ItemTitle>Total Character</S.ItemTitle>
			</S.CountCharacter>
			<S.CountWord>
				<S.ItemNumber>{wordCount}</S.ItemNumber>
				<S.ItemTitle>Word Count</S.ItemTitle>
			</S.CountWord>
			<S.CountSentence>
				<S.ItemNumber>{sentenceCount}</S.ItemNumber>
				<S.ItemTitle>Sentence Count</S.ItemTitle>
			</S.CountSentence>
		</S.CountStatistics>
	);
}

export { CountStatistics };
