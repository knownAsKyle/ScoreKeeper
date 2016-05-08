let ScoreKeeper = ScoreKeeper || {};
let eles = {
    "menuRight": "menuRight",
    "gameListWrapper": "gameListWrapper",
    "showRight": "showRight",
    "sideLeft": "sideLeft",
    "sideRight": "sideRight",
    "leftSideScore": "leftSideScore",
    "rightSideScore": "rightSideScore",
    "gameView": "gameView",
    "makeNewGame": "makeNewGame",
    "leftSideName": "leftSideName",
    "rightSideName": "rightSideName",
    "headerTitle": "headerTitle",
    "menuHeaderText": "menuHeaderText",
    "userProfileIconWrapper":"userProfileIconWrapper",
    "newGameSecondField":"newGameSecondField"
};
((elements = {},)=>{
	/*ELEMENTS*/
    ScoreKeeper.elements = elements;
    for (let ele in ScoreKeeper.elements) {
        ScoreKeeper.elements[ele] = ((id) => {
            return document.getElementById(id);
        })(ele);
    }
})(eles);