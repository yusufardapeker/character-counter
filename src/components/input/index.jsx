import * as S from "./styled";

function Input() {
	return (
		<S.Form>
			<S.Input />

			{/* <S.LimitIndicator>0/500</S.LimitIndicator> */}

			<S.Filters>
				<S.FilterElementWrapper>
					<S.FilterSpacesCheckbox />
					<S.FilterSpacesLabel>Exclude Spaces</S.FilterSpacesLabel>
				</S.FilterElementWrapper>

				<S.FilterElementWrapper>
					<S.SetLimitCheckbox />
					<S.SetLimitLabel>Set Character Limit</S.SetLimitLabel>
				</S.FilterElementWrapper>
			</S.Filters>

			<S.ReadingTimeElement>Est. reading time: 0 minute</S.ReadingTimeElement>
		</S.Form>
	);
}

export { Input };
