import * as S from "./styled";

function CountStatistics() {
	return (
		<S.CountStatistics>
			<S.CountCharacter>
				<S.ItemNumber>248</S.ItemNumber>
				<S.ItemTitle>Total Character</S.ItemTitle>
			</S.CountCharacter>
			<S.CountWord>
				<S.ItemNumber>211</S.ItemNumber>
				<S.ItemTitle>Word Count</S.ItemTitle>
			</S.CountWord>
			<S.CountSentence>
				<S.ItemNumber>48</S.ItemNumber>
				<S.ItemTitle>Sentence Count</S.ItemTitle>
			</S.CountSentence>
		</S.CountStatistics>
	);
}

export { CountStatistics };
