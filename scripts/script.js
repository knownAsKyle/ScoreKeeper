/*
Constants
DB connector
View handler
	view builder
	main view
	list view
Admin Options
	CRUD for games
	Control score of individual game
		scores +/-
		game complete button

Wish list
	Save all games some how.

*/
let eles = {
    "menuRight": "menuRight",
    "showRight": "showRight",
    "sideLeft": "sideLeft",
    "sideRight": "sideRight",
    "leftSideScore": "leftSideScore",
    "rightSideScore": "rightSideScore",
    "gameView" : "gameView"
};
((elements = {}, dataBase = {}) => {
    let ScoreKeeper = ScoreKeeper || {};
    /*Constants*/
    ScoreKeeper.constants = {};
    ScoreKeeper.constants.DB_URL = "https://keepscore.firebaseio.com/";
    /*ELEMENTS*/
    ScoreKeeper.elements = elements;
    for (let ele in ScoreKeeper.elements) {
        ScoreKeeper.elements[ele] = ((id) => {
            return document.getElementById(id);
        })(ele);
    }
    /*View*/
    ScoreKeeper.views = {};
    ScoreKeeper.views.build = {};
    ScoreKeeper.views.build.game = (()=>{
    	// ScoreKeeper.elements.gameView
    })()
    /*Element Actions*/
    ScoreKeeper.elements.showRight.addEventListener("click", () => {
        classie.toggle(ScoreKeeper.elements.showRight, 'active');
        classie.toggle(ScoreKeeper.elements.showRight, 'open');
        classie.toggle(ScoreKeeper.elements.menuRight, 'menuRight-open');
    });
    /*Listen for Swipes*/
    ScoreKeeper.swipe = {};
    ScoreKeeper.swipe.sideLeft = (() => {
        let h = new Hammer(ScoreKeeper.elements.sideLeft);
        h.get('swipe').set({
            direction: Hammer.DIRECTION_VERTICAL
        });
        return h;
    })();
    ScoreKeeper.swipe.sideRight = (() => {
        let h = new Hammer(ScoreKeeper.elements.sideRight);
        h.get('swipe').set({
            direction: Hammer.DIRECTION_VERTICAL
        });
        return h;
    })();
    ScoreKeeper.swipe.checkDirection = (direction) => {
        return direction === 16 ? false : true;
    }
    ScoreKeeper.swipe.handleSwipeLeftSide = (data) => {
        if (data.direction && (data.direction === 16 || data.direction === 8)) {
        	let val = Number(ScoreKeeper.elements.leftSideScore.innerText);
            if (ScoreKeeper.swipe.checkDirection(data.direction)) {
            	val++;
            } else {
            	val--;
            }
            ScoreKeeper.elements.leftSideScore.innerText = val;
        }
    }
    ScoreKeeper.swipe.handleSwipeRightSide = (data) => {
        if (data.direction && (data.direction === 16 || data.direction === 8)) {
        	let val = Number(ScoreKeeper.elements.rightSideScore.innerText);
            if (ScoreKeeper.swipe.checkDirection(data.direction)) {
            	val++;
            } else {
            	val--;
            }
            ScoreKeeper.elements.rightSideScore.innerText = val;
        }
    }
    ScoreKeeper.swipe.sideLeft.on("swipe", ScoreKeeper.swipe.handleSwipeLeftSide);
    ScoreKeeper.swipe.sideRight.on("swipe", ScoreKeeper.swipe.handleSwipeRightSide);
    /***DATABASE Connector***/
    ScoreKeeper.dataBase = dataBase;
    ScoreKeeper.dataBase.connection = (() => {
        return new Firebase(ScoreKeeper.constants.DB_URL);
    })()
    ScoreKeeper.dataBase.handleDbConnection = (data) => {
            if (data && data.forEach) {
                data.forEach((child) => {
                    console.log(child.key(), child.val())
                    if(child.key() === "team1" ){
                    	ScoreKeeper.elements.rightSideScore.innerText = child.val()
                    }
                    if(child.key() === "team2" ){
                    	ScoreKeeper.elements.leftSideScore.innerText = child.val()
                    }
                })
            }
        }
        //Listen for db change;
    ScoreKeeper.dataBase.connection.on("value", ScoreKeeper.dataBase.handleDbConnection);
})(eles)