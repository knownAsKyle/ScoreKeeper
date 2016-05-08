let ScoreKeeper = ScoreKeeper || {};
(() => {
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
        let teamNameOne = document.createElement("div");
        let teamNameTwo = document.createElement("div");
        let scoreWrapper = document.createElement("div");
        let dateLocation = document.createElement("div");
        teamNameOne.className = "gameList-teamNameOne";
        teamNameTwo.className = "gameList-teamNameTwo";
        scoreWrapper.className = "gameList-scoreWrapper";
        dateLocation.className = "gameList-dateLocation";
        game.className = "gameListItem";
        game.id = data.id;
        teamNameOne.appendChild(document.createTextNode(data.team1));
        teamNameTwo.appendChild(document.createTextNode(data.team2));
        scoreWrapper.appendChild(document.createTextNode(data.score));
        if (data.timeStart) {
            dateLocation.appendChild(document.createTextNode(data.timeStart));
        } else {
            //game.id;
            var ico = document.createElement("i");
            ico.className = "icon-volleyball";
            ico.gameId = game.id;
            ico.addEventListener("click", ScoreKeeper.admin.addDate)
            dateLocation.appendChild(ico);
        }
        game.appendChild(teamNameOne);
        game.appendChild(teamNameTwo);
        game.appendChild(scoreWrapper);
        game.appendChild(dateLocation);
        let h = new Hammer(game);
        h.get('press').set({
            "time": 900
        });
        h.on("press", (e) => {
            if (ScoreKeeper.admin.status) {
                e = e.target.id && e.target.id !== "" ? e.target : e.target.parentNode;
                ScoreKeeper.constants.removeGame.text = data.team1Name + " vs " + data.team2Name;
                swal(ScoreKeeper.constants.removeGame, function(isConfirm) {
                    if (isConfirm) {
                        ScoreKeeper.dataBase.connection.child(e.id).remove();
                        swal("Deleted!", "Game removed", "success");
                    } else {
                        swal("Cancelled", "Action stopped, the game is still there!", "error");
                    }
                });
            }
        })
        game.addEventListener("click", ScoreKeeper.views.handleGameClick)
        ScoreKeeper.elements.gameListWrapper.appendChild(game);
    }
})();