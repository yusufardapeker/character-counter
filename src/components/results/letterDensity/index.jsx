import { useSelector } from "react-redux";
import * as S from "./styled";
import { useState } from "react";

function LetterDensity() {
	const { letterItems, originalText } = useSelector((state) => state.counter);
	const sortedLetters = [...letterItems].sort((a, b) => b.count - a.count);
	const [letterDensityLimit, setLetterDensityLimit] = useState(5);

	const calculatePercent = (count) => {
		return Math.ceil((count / originalText.length) * 100).toFixed();
	};

	return (
		<S.LetterDensity>
			<S.Title>Letter Density</S.Title>

			{originalText.length > 0 ? (
				<>
					<S.LetterItemWrapper>
						{sortedLetters
							.slice(0, letterDensityLimit || sortedLetters.length)
							.map((letterItem, index) => (
								<S.LetterItem key={index}>
									<S.Letter>{letterItem.letter}</S.Letter>
									<S.DensityBar percent={calculatePercent(letterItem.count)}></S.DensityBar>
									<S.DensityPercentage>
										{letterItem.count} {`(${calculatePercent(letterItem.count)}%)`}
									</S.DensityPercentage>
								</S.LetterItem>
							))}
					</S.LetterItemWrapper>

					{sortedLetters.length > 5 && (
						<S.ShowLetterDensityButtonWrapper>
							{letterDensityLimit ? (
								<S.ShowLetterDensityButton onClick={() => setLetterDensityLimit(false)}>
									Show more
									<S.ShowMoreArrow />
								</S.ShowLetterDensityButton>
							) : (
								<S.ShowLetterDensityButton onClick={() => setLetterDensityLimit(5)}>
									Show less
									<S.ShowLessArrow />
								</S.ShowLetterDensityButton>
							)}
						</S.ShowLetterDensityButtonWrapper>
					)}
				</>
			) : (
				<S.EmptyTextMessage>Start typing to see letter density.</S.EmptyTextMessage>
			)}
		</S.LetterDensity>
	);
}

export { LetterDensity };
