import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		font-size: 62.5%;
	}

 	* {
 		margin: 0;
 		padding: 0;
 		box-sizing: border-box;
 	}

 	:focus {
 		outline: 0;
 		box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
 	}

 	body {
 		background-color: ${(props) => props.theme.background};
 		color: ${(props) => props.theme.text};
 		-webkit-font-smoothing: antialiased;
 	}

 	body, input, textarea, button {
		font-family: 'Nunito', sans-serif;
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 1.6;
 	}
 `;
