import Button from '../../Button/Button';
const styled = require('styled-components').default;

export const StyledRoot = styled.div`
	background-color: ${(props:any) => props.theme.backgroundColor2};
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: hidden;
	display: inline-flex;
	flex-direction: column;
`;

export const StyledHeader = styled.div`
	//height: ${(props:any) => props.theme.topRowHeight}px;
	//text-decoration: none;
	box-sizing: border-box;
	padding: ${(props:any) => props.theme.mainPadding}px;
	padding-bottom: ${(props:any) => props.theme.mainPadding / 2}px;
	display: flex;
	align-items: center;
	user-select: none;
	text-transform: uppercase;
	//cursor: pointer;
`;

export const StyledHeaderIcon = styled.i`
	font-size: ${(props:any) => props.theme.toolbarIconSize}px;
	color: ${(props:any) => props.theme.color2};
	margin-right: 8px;
`;

export const StyledHeaderLabel = styled.span`
	flex: 1;
	color: ${(props:any) => props.theme.color2};
	font-size: ${(props:any) => Math.round(props.theme.fontSize * 1.1)}px;
	font-weight: bold;
`;

export const StyledListItem = styled.div`
	box-sizing: border-box;
	height: 25px;
	display: flex;
	flex-direction: row;
	padding-left: ${(props:any) => props.theme.mainPadding + ('depth' in props ? props.depth : 0) * 16}px;
	background: ${(props:any) => props.selected ? props.theme.selectedColor2 : 'none'};
	text-transform: ${(props:any) => props.isSpecialItem ? 'uppercase' : 'none'};
	transition: 0.1s;

	&:hover {
		background-color: ${(props:any) =>  props.theme.backgroundColorHover2};
	}
`;

function listItemTextColor(props:any) {
	if (props.isConflictFolder) return props.theme.colorError2;
	if (props.isSpecialItem) return props.theme.colorFaded2;
	return props.theme.color2;
}

export const StyledListItemAnchor = styled.a`
	font-size: ${(props:any) => Math.round(props.theme.fontSize * 1.0833333)}px;
	font-weight: 500;
	text-decoration: none;
	color: ${(props:any) => listItemTextColor(props)};
	cursor: default;
	opacity: ${(props:any) => props.selected ? 1 : 0.8};
	white-space: nowrap;
	display: flex;
	flex: 1;
	align-items: center;
	user-select: none;
`;

export const StyledExpandLink = styled.a`
	color: ${(props:any) => props.theme.color2};
	cursor: default;
	opacity: 0.8;
	text-decoration: none;
	padding-right: 8px;
	display: flex;
	align-items: center;
	width: 16px;
	max-width: 16px;
	min-width: 16px;
`;

export const StyledNoteCount = styled.div`
	color: ${(props:any) => props.theme.color2};
	padding-left: 8px;
	opacity: 0.5;
	user-select: none;
`;

// export const StyledNewFolderButton = styled(Button)`
// 	width: ${(props:any) => props.theme.toolbarHeight * 0.8}px;
// 	max-width: ${(props:any) => props.theme.toolbarHeight * 0.8}px;
// 	min-width: ${(props:any) => props.theme.toolbarHeight * 0.8}px;
// 	height: ${(props:any) => props.theme.toolbarHeight * 0.8}px;
// 	max-height: ${(props:any) => props.theme.toolbarHeight * 0.8}px;
// 	min-height: ${(props:any) => props.theme.toolbarHeight * 0.8}px;
// `;

export const StyledSynchronizeButton = styled(Button)`
	width: 100%;
`;

export const StyledSyncReport = styled.div`
	font-size: ${(props:any) => Math.round(props.theme.fontSize * 0.9)}px;
	color: ${(props:any) => props.theme.color2};
	opacity: 0.5;
	display: flex;
	flex-direction: column;
	margin-left: 5px;
	margin-right: 5px;
	margin-bottom: 10px;
	word-wrap: break-word;
`;

export const StyledSyncReportText = styled.div`
	color: ${(props:any) => props.theme.color2};
	word-wrap: break-word;
	width: 100%;
`;
