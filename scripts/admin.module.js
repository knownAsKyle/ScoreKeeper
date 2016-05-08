let ScoreKeeper = ScoreKeeper || {};
(() => {
    ScoreKeeper.admin = {};
    ScoreKeeper.admin.status = null;
    ScoreKeeper.admin.makeNewGame = (team1Name = ScoreKeeper.profile.teamName, team2Name = "Away Team", team1 = 0, team2 = 0) => {
        return {
            team1Name,
            team2Name,
            team1,
            team2,
        };
    }
    ScoreKeeper.admin.makeGame = () => {
        swal(ScoreKeeper.constants.makeNewGame, (inputValue) => {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You need to write something!");
                return false
            }
            ScoreKeeper.dataBase.connection.push(ScoreKeeper.admin.makeNewGame(ScoreKeeper.profile.teamName, inputValue), () => {
                swal("Game created!", ScoreKeeper.profile.teamName + " -vs- " + inputValue, "success");
            })
        });
    }
    ScoreKeeper.admin.addDate = (e) => {
        if (ScoreKeeper.admin.status) {
            swal(ScoreKeeper.constants.addDateTime, (inputValue) => {
                if (inputValue === false) return false;
                if (inputValue === "") {
                    swal.showInputError("You need to write something!");
                    return false
                }
                ScoreKeeper.dataBase.connection.child(e.target.gameId).update({
                    "timeStart": inputValue
                });
            });
        }
    }
    ScoreKeeper.admin.toggleUserProfile = () => {}
})();