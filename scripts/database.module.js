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
                    ScoreKeeper.views.buildGameList({
                            "id": child.key(),
                            "team1": child.val().team1Name,
                            "team2": child.val().team2Name,
                            "score": child.val().team1 + "  --  " + child.val().team2,
                            "timeStart": child.val().timeStart,
                        })
                })
            }
        }

        //Listen for db change;
    ScoreKeeper.dataBase.connection.on("value", ScoreKeeper.dataBase.handleDbConnection);
    ScoreKeeper.dataBase.connection.onAuth((authData)=>{
        ScoreKeeper.admin.status = authData;
    });

    ScoreKeeper.dataBase.connection.unauth();
})()