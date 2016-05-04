/***DATABASE Connector***/
var ScoreKeeper = ScoreKeeper || {};
(() => {
    ScoreKeeper.dataBase = {};
    ScoreKeeper.dataBase.connection = (() => {
        return new Firebase(ScoreKeeper.constants.DB_URL);
    })()
    ScoreKeeper.dataBase.handleDbConnection = (data) => {
            if (data && data.forEach) {
                ScoreKeeper.elements.gameListWrapper.innerHTML = "";
                data.forEach((child) => {
                    console.log(child.key(), child.val())
                    ScoreKeeper.views.buildGameList({
                            "id": child.key(),
                            "name": child.val().team1Name + " -vs- " + child.val().team2Name,
                            "score": child.val().team1 + "  --  " + child.val().team2
                        })
                })
            }
        }
        //Listen for db change;
    ScoreKeeper.dataBase.connection.on("value", ScoreKeeper.dataBase.handleDbConnection);
})()