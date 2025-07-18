import * as S from "./styled";

function LetterDensity() {
	return (
		<S.LetterDensity>
			<S.Title>Letter Density</S.Title>

			<S.LetterItemWrapper>
				<S.LetterItem>
					<S.Letter>A</S.Letter>
					<S.DensityBar percent={16}></S.DensityBar>
					<S.DensityPercentage>40 (16%)</S.DensityPercentage>
				</S.LetterItem>

				<S.LetterItem>
					<S.Letter>B</S.Letter>
					<S.DensityBar percent={24}></S.DensityBar>
					<S.DensityPercentage>56 (24%)</S.DensityPercentage>
				</S.LetterItem>
			</S.LetterItemWrapper>
		</S.LetterDensity>
	);
}

export { LetterDensity };
