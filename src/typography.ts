import { css } from './utils/styled';
import { remCalc } from './utils/remCalc';
import { displayTo } from './utils/displayTo';

export type FontSize = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge' | 'xxxLarge';
export type LineHeight = FontSize;

export const fontLineHeight = {
	xxxLarge: css`
		${displayTo('large')`
	    line-height: ${remCalc('56px')};
 	`}
		${displayTo('smallAndMedium')`
	    line-height: ${remCalc('36px')};
 	`}
	`,

	xxLarge: css`
		${displayTo('large')`
	    line-height: ${remCalc('36px')};
 	`}
		${displayTo('smallAndMedium')`
	    line-height: ${remCalc('28px')};
 	`}
	`,

	xLarge: css`
		line-height: ${remCalc('28px')};
	`,

	large: css`
		${displayTo('large')`
	    line-height: ${remCalc('24px')};
 	`}
		${displayTo('smallAndMedium')`
	    line-height: ${remCalc('22px')};
 	`}
	`,

	medium: css`
		line-height: ${remCalc('22px')};
	`,

	small: css`
		line-height: ${remCalc('18px')};
	`,

	xSmall: css`
		line-height: ${remCalc('14px')};
	`,
};

export const fontSize = {
	xxxLarge: css`
		${displayTo('large')`
	 	font-size: ${remCalc('44px')};
 	`}
		${displayTo('smallAndMedium')`
	 	font-size: ${remCalc('32px')};
 	`}

 	letter-spacing: 0.5px;
	`,

	xxLarge: css`
		${displayTo('large')`
	 	font-size: ${remCalc('32px')};
 	`}
		${displayTo('smallAndMedium')`
	 	font-size: ${remCalc('24px')};
 	`}

 	letter-spacing: 0.5px;
	`,

	xLarge: css`
		font-size: ${remCalc('24px')};
		letter-spacing: 0.5px;
	`,

	large: css`
		${displayTo('large')`
	 	font-size: ${remCalc('19px')};
 	`}
		${displayTo('smallAndMedium')`
	 	font-size: ${remCalc('16px')};
 	`}
	`,

	medium: css`
		font-size: ${remCalc('16px')};
	`,

	small: css`
		font-size: ${remCalc('14px')};
	`,

	xSmall: css`
		font-size: ${remCalc('12px')};
	`,
};

export type FontWeight = 'light' | 'regular' | 'medium' | 'bold';
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

export interface FontStyleProps {
	size?: FontSize;
	weight?: FontWeight;
	lineHeight?: LineHeight;
}

export function getFontStyle({ size, weight, lineHeight = size }: FontStyleProps) {
	return css`
		${size && fontSize[size] ? fontSize[size] : ''}
		${lineHeight && fontLineHeight[lineHeight] ? fontLineHeight[lineHeight] : ''}
		${weight && fontWeight[weight] ? fontWeight[weight] : ''}
	`;
}
