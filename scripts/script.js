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
let ScoreKeeper = ScoreKeeper || {};
((dataBase = {}) => {
    /*CURRENT GAME Connection*/
    ScoreKeeper.currentConnection = {};
        /*Element EVENTS*/
    ScoreKeeper.elements.showRight.addEventListener("click", () => {
        classie.toggle(ScoreKeeper.elements.showRight, 'active');
        classie.toggle(ScoreKeeper.elements.showRight, 'open');
        classie.toggle(ScoreKeeper.elements.menuRight, 'menuRight-open');
    });
    ScoreKeeper.elements.makeNewGame.addEventListener("click", ScoreKeeper.admin.makeGame);
    ScoreKeeper.elements.userProfileIconWrapper.addEventListener("click", () => {
            alert("user profile ... coming soon")
        })
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
        if (ScoreKeeper.admin.status && data.direction && (data.direction === 16 || data.direction === 8)) {
            let val = Number(ScoreKeeper.elements.leftSideScore.innerText);
            if (ScoreKeeper.swipe.checkDirection(data.direction)) {
                val++;
            } else {
                val--;
            }
            val = val < 0 ? 0 : val;
            ScoreKeeper.currentConnection.update({
                "team1": val
            }, (err) => {
                if (!err) {
                    ScoreKeeper.elements.leftSideScore.innerText = val;
                }
            })
        }
    }
    ScoreKeeper.swipe.handleSwipeRightSide = (data) => {
        if (ScoreKeeper.admin.status && data.direction && (data.direction === 16 || data.direction === 8)) {
            let val = Number(ScoreKeeper.elements.rightSideScore.innerText);
            if (ScoreKeeper.swipe.checkDirection(data.direction)) {
                val++;
            } else {
                val--;
            }
            ScoreKeeper.currentConnection.update({
                "team2": val
            }, (err) => {
                if (!err) {
                    ScoreKeeper.elements.rightSideScore.innerText = val;
                }
            })
        }
    }
    ScoreKeeper.swipe.sideLeft.on("swipe", ScoreKeeper.swipe.handleSwipeLeftSide);
    ScoreKeeper.swipe.sideRight.on("swipe", ScoreKeeper.swipe.handleSwipeRightSide);
    let hammerEvent = new Hammer(ScoreKeeper.elements.menuHeaderText)
    hammerEvent.get('press').set({
        "time": 900
    });
    hammerEvent.on("press", (e) => {
        swal(ScoreKeeper.constants.logInPopup, (inputValue) => {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You need to provide your code!");
                return false
            }
            ScoreKeeper.dataBase.connection.authWithPassword({
                email: "sample@sample.com",
                password: inputValue
            }, (error, authData) => {
                if (error) {
                    swal("Error with login!", error, "error");
                    ScoreKeeper.dataBase.connection.unauth();
                } else {
                    swal("Logged in!", "Logged in as Administrator", "success");
                    classie.toggle(ScoreKeeper.elements.makeNewGame, 'adminControlDisplay');
                    classie.toggle(ScoreKeeper.elements.menuHeaderText, 'adminControlDisplay');
                    classie.toggle(ScoreKeeper.elements.userProfileIconWrapper, 'adminControlDisplay');
                    // console.log("Authenticated successfully with payload:", authData);
                }
            });
        });
    })
})()