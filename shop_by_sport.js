//next step is to create divs in each "create" function
//reading # of images in each file and for loop?
//can i give them an ID if i do that?

function load_league() {
    var queryString = decodeURIComponent(window.location.search);
    var test = queryString.split("?league=");
    var league = test[1];

    if (league === "nba") {
        //load nba page
        create_NBA();
    }
    if (league === "nfl") {
        //load nfl page
        create_NFL();
    }
    if (league === "mlb") {
        //load mlb page
        create_MLB();
    }
    if (league === "nhl") {
        //load nhl page
        create_NHL();
    }
    if (league === "soccer") {
        //load soccer page
        create_SOCCER();
    }
}
function create_NBA() {
    //the default shop by sport page is already NBA
    //so far nothing needs to go in here
}
function create_NFL() {
    //changes league logo at top of page
    document.getElementById("league_logo").src = "../images/StoreFrontLogos/NFL.png";
    //changes the conference photos
    document.getElementById("conference_one_logo").src = "../images/team_logos_NFL/NFC.png";
    document.getElementById("conference_two_logo").src = "../images/team_logos_NFL/AFC.png";
}
function create_MLB() {
    document.getElementById("league_logo").src = "../images/StoreFrontLogos/MLB.png";
    document.getElementById("conference_one_logo").src = "../images/team_logos_MLB/National_League.png";
    document.getElementById("conference_two_logo").src = "../images/team_logos_MLB/American_League.png";
}
function create_NHL() {
    //add nhl images to project
    document.getElementById("league_logo").src = "../images/StoreFrontLogos/NHL.png";
}
function create_SOCCER() {
    //add prem and la liga images only
    //left will be prem, right will be la liga
    document.getElementById("league_logo").src = "../images/StoreFrontLogos/Soccer.png";
}