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
    "headerTitle": "headerTitle"
};
let ScoreKeeper = ScoreKeeper || {};
((elements = {}, dataBase = {}) => {
    /*Constants*/
    ScoreKeeper.constants = {};
    ScoreKeeper.constants.DB_URL = "https://keepscore.firebaseio.com/games";
    /*USER PROFILE*/
    ScoreKeeper.profile = {};
    ScoreKeeper.profile.teamName = "Wisconsin Priemier";
    /*ELEMENTS*/
    ScoreKeeper.elements = elements;
    for (let ele in ScoreKeeper.elements) {
        ScoreKeeper.elements[ele] = ((id) => {
            return document.getElementById(id);
        })(ele);
    }
    /*CURRENT GAME Connection*/
    ScoreKeeper.currentConnection = {};
    /*ADMIN*/
    ScoreKeeper.admin = {};
    ScoreKeeper.admin.makeNewGame = (team1Name = ScoreKeeper.profile.teamName, team2Name = "Away Team", team1 = 0, team2 = 0) => {
            return {
                team1Name,
                team2Name,
                team1,
                team2
            };
        }
        /*VIEWS*/
    ScoreKeeper.views = {};
    ScoreKeeper.views.handleGameClick = (data) => {
        if (ScoreKeeper.currentConnection.off) {
            ScoreKeeper.currentConnection.off();
        }
        classie.remove(ScoreKeeper.elements.showRight, 'active');
        classie.remove(ScoreKeeper.elements.showRight, 'open');
        classie.remove(ScoreKeeper.elements.menuRight, 'menuRight-open');
        //TD: validate id for firebase
        let id = (data.target.id && data.target.id !== "") ? data.target.id : data.target.parentNode.id;
        if (id) {
            ScoreKeeper.currentConnection = ScoreKeeper.dataBase.connection.child(id)
            ScoreKeeper.currentConnection.on("value", (snap) => {
                if (snap && snap.val()) {
                    ScoreKeeper.views.buildGame(snap.val());
                } else {
                    ScoreKeeper.views.buildGame();
                }
            });
        }
    }
    ScoreKeeper.views.setGame = (name1 = "", score1 = 0, name2 = "", score2 = 0) => {
        let headerText = (name1 === "" && name2 === "") ? "Score Keeper 1.0" : name1 + " -vs- " + name2;
        ScoreKeeper.elements.leftSideName.textContent = name1;
        ScoreKeeper.elements.leftSideScore.textContent = score1;
        ScoreKeeper.elements.rightSideName.textContent = name2;
        ScoreKeeper.elements.rightSideScore.textContent = score2;
        ScoreKeeper.elements.headerTitle.textContent = headerText;
    }
    ScoreKeeper.views.buildGame = (data) => {
        if (data) {
            ScoreKeeper.views.setGame(data.team1Name, data.team1, data.team2Name, data.team2);
        } else {
            ScoreKeeper.views.setGame();
        }
    }
    ScoreKeeper.views.buildGameList = (data) => {
            let game = document.createElement("div");
            let scoreWrapper = document.createElement("span");
            scoreWrapper.className = "gameListScoreWrapper";
            game.className = "gameListItem";
            game.id = data.id;
            game.appendChild(document.createTextNode(data.name));
            scoreWrapper.appendChild(document.createTextNode(data.score))
            game.appendChild(scoreWrapper)
            let h = new Hammer(game);
            h.get('press').set({
                "time": 900
            });
            h.on("press", (e) => {
                e = e.target.id && e.target.id !== "" ? e : e.target.parentNode;
                swal({
                    title: "Remove this game?",
                    text: e.target.innerText,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, Remove it!",
                    cancelButtonText: "No, cancel please!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function(isConfirm) {
                    if (isConfirm) {
                        ScoreKeeper.dataBase.connection.child(e.target.id).remove();
                        swal("Deleted!", "Game removed", "success");
                    } else {
                        swal("Cancelled", "Action stopped, the game is still there!", "error");
                    }
                });
            })
            game.addEventListener("click", ScoreKeeper.views.handleGameClick)
            ScoreKeeper.elements.gameListWrapper.appendChild(game);
            // ScoreKeeper.elements.menuRight
        }
        /*Element EVENTS*/
    ScoreKeeper.elements.showRight.addEventListener("click", () => {
        classie.toggle(ScoreKeeper.elements.showRight, 'active');
        classie.toggle(ScoreKeeper.elements.showRight, 'open');
        classie.toggle(ScoreKeeper.elements.menuRight, 'menuRight-open');
    });
    ScoreKeeper.elements.makeNewGame.addEventListener("click", () => {
            swal({
                title: "Make new game!",
                text: ScoreKeeper.profile.teamName + " -vs- ",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "Enter opponent name..."
            }, (inputValue) => {
                if (inputValue === false) return false;
                if (inputValue === "") {
                    swal.showInputError("You need to write something!");
                    return false
                }
                ScoreKeeper.dataBase.connection.push(ScoreKeeper.admin.makeNewGame(ScoreKeeper.profile.teamName, inputValue), () => {
                    swal("Game created!", ScoreKeeper.profile.teamName + " -vs- " + inputValue, "success");
                })
            });
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
        if (data.direction && (data.direction === 16 || data.direction === 8)) {
            let val = Number(ScoreKeeper.elements.leftSideScore.innerText);
            if (ScoreKeeper.swipe.checkDirection(data.direction)) {
                val++;
            } else {
                val--;
            }
            ScoreKeeper.currentConnection.update({
                "team1": val
            }, () => {
                ScoreKeeper.elements.leftSideScore.innerText = val;
            })
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
            ScoreKeeper.currentConnection.update({
                "team2": val
            }, () => {
                ScoreKeeper.elements.rightSideScore.innerText = val;
            })
        }
    }
    ScoreKeeper.swipe.sideLeft.on("swipe", ScoreKeeper.swipe.handleSwipeLeftSide);
    ScoreKeeper.swipe.sideRight.on("swipe", ScoreKeeper.swipe.handleSwipeRightSide);
})(eles)