import * as S from "./styled";
import { CountStatistics } from "./countStatistics";
import { LetterDensity } from "./letterDensity";

function Results() {
	return (
		<S.Result>
			<CountStatistics />
			<LetterDensity />
		</S.Result>
	);
}

export { Results };
