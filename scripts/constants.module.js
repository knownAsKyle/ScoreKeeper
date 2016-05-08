let ScoreKeeper = ScoreKeeper || {};
(() => {
    /*Constants*/
    ScoreKeeper.constants = {};
    ScoreKeeper.constants.DB_URL = "https://keepscore.firebaseio.com/games";
    ScoreKeeper.constants.logInPopup = {
        title: "Login",
        text: "Log into Score Keeper with your code:",
        type: "input",
        inputType: "password",
        showCancelButton: true,
        closeOnConfirm: true,
        animation: "slide-from-top",
        inputPlaceholder: "Code...",
        inputValue: "admin",
    };
    ScoreKeeper.constants.makeNewGame = {
        title: "Make new game!",
        text: `
                <div style='color: #00ad93;'> 
                    ${ScoreKeeper.profile.teamName} 
                </div>
                        -vs- `,
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Enter opponent name...",
        html: true
    };
    ScoreKeeper.constants.removeGame = {
        title: "Remove this game?",
        text: "",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, Remove it!",
        cancelButtonText: "No, cancel please!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    ScoreKeeper.constants.addDateTime = {
        title: "Add date/time to this game",
        text: ``,
        type: "input",
        showCancelButton: true,
        closeOnConfirm: true,
        animation: "slide-from-top",
        inputPlaceholder: "Date/time",
        inputValue: ScoreKeeper.helper.getTime(),
        html: true
    };
})();