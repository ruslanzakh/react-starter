import styled from 'styled-components';
import { red, green } from 'styles/colors';
import { rotate360 } from 'styles/keyframes';

export const Wrapper = styled.div`
	color: ${red};
	background: ${green};
	padding: 10px 45px;
	:hover {
		animation ${rotate360} 2s linear infinite;
	}
`