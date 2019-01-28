import { css } from './utils/styled';
import { remCalc } from './utils/remCalc';
import { displayTo } from './utils/displayTo';

export const fontSize = {
	xxxLarge: css`
		${displayTo('large')`
	 	font-size: ${remCalc('44px')};
	    line-height: ${remCalc('56px')};
 	`}
		${displayTo('smallAndMedium')`
	 	font-size: ${remCalc('32px')};
	    line-height: ${remCalc('36px')};
 	`}

 	letter-spacing: 0.5px;
	`,

	xxLarge: css`
		${displayTo('large')`
	 	font-size: ${remCalc('32px')};
	    line-height: ${remCalc('36px')};
 	`}
		${displayTo('smallAndMedium')`
	 	font-size: ${remCalc('24px')};
	    line-height: ${remCalc('28px')};
 	`}

 	letter-spacing: 0.5px;
	`,

	xLarge: css`
		font-size: ${remCalc('24px')};
		line-height: ${remCalc('28px')};
		letter-spacing: 0.5px;
	`,

	large: css`
		${displayTo('large')`
	 	font-size: ${remCalc('19px')};
	    line-height: ${remCalc('24px')};
 	`}
		${displayTo('smallAndMedium')`
	 	font-size: ${remCalc('16px')};
	    line-height: ${remCalc('22px')};
 	`}
	`,

	medium: css`
		font-size: ${remCalc('16px')};
		line-height: ${remCalc('22px')};
	`,

	small: css`
		font-size: ${remCalc('14px')};
		line-height: ${remCalc('18px')};
	`,

	xSmall: css`
		font-size: ${remCalc('12px')};
		line-height: ${remCalc('14px')};
	`,
};

export const fontWeight = {
	light: css`
		font-weight: 300;
	`,
	regular: css`
		font-weight: 400;
	`,
	medium: css`
		font-weight: 500;
	`,
	bold: css`
		font-weight: 700;
	`,
};
