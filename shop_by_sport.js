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

   //Changes individual team logos left side 

   

    document.getElementById("team1_logo").href = "../product_pages/Football/nfl/shop_broncos.html"; 
    document.getElementById("team1_logo2").src = "../images/team_logos_NFL/AFC_Teams/broncos.png";



    //.src = "../images/team_logos_NFL/AFC_Teams/broncos.png"; 
    document.getElementById("team2_logo").href = "../product_pages/Football/nfl/shop_chargers.html";                    
    document.getElementById("team2_logo2").src = "../images/team_logos_NFL/AFC_Teams/chargers.png";

    document.getElementById("team3_logo").href = "../product_pages/Football/nfl/shop_browns.html";
    document.getElementById("team3_logo2").src = "../images/team_logos_NFL/AFC_Teams/browns.png";

    document.getElementById("team4_logo").href = "../product_pages/Football/nfl/shop_bills.html";
    document.getElementById("team4_logo2").src = "../images/team_logos_NFL/AFC_Teams/bills.png";

    document.getElementById("team5_logo").href = "../product_pages/Football/nfl/shop_chiefs.html";
    document.getElementById("team5_logo2").src = "../images/team_logos_NFL/AFC_Teams/chiefs.png";

    document.getElementById("team6_logo").href = "../product_pages/Football/nfl/shop_colts.html";
    document.getElementById("team6_logo2").src = "../images/team_logos_NFL/AFC_Teams/colts.png";

    document.getElementById("team7_logo").href = "../product_pages/Football/nfl/shop_dolphins.html";
    document.getElementById("team7_logo2").src = "../images/team_logos_NFL/AFC_Teams/dolphins.png";

    document.getElementById("team8_logo").href = "../product_pages/Football/nfl/shop_jaguars.html";
    document.getElementById("team8_logo2").src = "../images/team_logos_NFL/AFC_Teams/jaguars.png";

    document.getElementById("team9_logo").href = "../product_pages/Football/nfl/shop_jets.html";
    document.getElementById("team9_logo2").src = "../images/team_logos_NFL/AFC_Teams/jets.png";

    document.getElementById("team10_logo").href = "../product_pages/Football/nfl/shop_patriots.html";
    document.getElementById("team10_logo2").src = "../images/team_logos_NFL/AFC_Teams/patriots.png";

    document.getElementById("team11_logo").href = "../product_pages/Football/nfl/shop_raiders.html";
    document.getElementById("team11_logo2").src = "../images/team_logos_NFL/AFC_Teams/raiders.png";

    document.getElementById("team12_logo").href = "../product_pages/Football/nfl/shop_ravens.html";
    document.getElementById("team12_logo2").src = "../images/team_logos_NFL/AFC_Teams/ravens.png";

    document.getElementById("team13_logo").href = "../product_pages/Football/nfl/shop_steelers.html";
    document.getElementById("team13_logo2").src = "../images/team_logos_NFL/AFC_Teams/steelers.png";

    document.getElementById("team14_logo").href = "../product_pages/Football/nfl/shop_texans.html";
    document.getElementById("team14_logo2").src = "../images/team_logos_NFL/AFC_Teams/texans.png";

    document.getElementById("team15_logo").href = "../product_pages/Football/nfl/shop_titans.html";    
    document.getElementById("team15_logo2").src = "../images/team_logos_NFL/AFC_Teams/titans.png";

    //changes individual team logos right side
    document.getElementById("team16_logo2").src = "../images/team_logos_NFL/NFC_Teams/arizona-cardinals.png";
    document.getElementById("team17_logo2").src = "../images/team_logos_NFL/NFC_Teams/bears.gif";
    document.getElementById("team18_logo2").src = "../images/team_logos_NFL/NFC_Teams/buccaneers.png";
    document.getElementById("team19_logo2").src = "../images/team_logos_NFL/NFC_Teams/cowboys.png";
    document.getElementById("team20_logo2").src = "../images/team_logos_NFL/NFC_Teams/eagles.png";
    document.getElementById("team21_logo2").src = "../images/team_logos_NFL/NFC_Teams/falcons.png";
    document.getElementById("team22_logo2").src = "../images/team_logos_NFL/NFC_Teams/giants.png";
    document.getElementById("team23_logo2").src = "../images/team_logos_NFL/NFC_Teams/lions.png";
    document.getElementById("team24_logo2").src = "../images/team_logos_NFL/NFC_Teams/packers.png";
    document.getElementById("team25_logo2").src = "../images/team_logos_NFL/NFC_Teams/panthers.svg";
    document.getElementById("team26_logo2").src = "../images/team_logos_NFL/NFC_Teams/rams.png";
    document.getElementById("team27_logo2").src = "../images/team_logos_NFL/NFC_Teams/redskins.png";
    document.getElementById("team28_logo2").src = "../images/team_logos_NFL/NFC_Teams/saints.svg";
    document.getElementById("team29_logo2").src = "../images/team_logos_NFL/NFC_Teams/seahawks.png";
    document.getElementById("team30_logo2").src = "../images/team_logos_NFL/NFC_Teams/sf 49ers.png";
    document.getElementById("team31_logo2").src = "../images/team_logos_NFL/NFC_Teams/vikings.png";


    }
     

function create_MLB() {
    document.getElementById("league_logo").src = "../images/StoreFrontLogos/MLB.png";
    document.getElementById("conference_one_logo").src = "../images/team_logos_MLB/National_League.png";
    document.getElementById("conference_two_logo").src = "../images/team_logos_MLB/American_League.png";

    //Changes individual team logos left side 
    document.getElementById("team1_logo").src = "../images/team_logos_MLB/National_League_Teams/arizona-diamondbacks.png";
    document.getElementById("team2_logo").src = "../images/team_logos_MLB/National_League_Teams/atlanta-braves-logo.png";
    document.getElementById("team3_logo").src = "../images/team_logos_MLB/National_League_Teams/Chicago_Cubs_logo.svg.png";
    document.getElementById("team4_logo").src = "../images/team_logos_MLB/National_League_Teams/Cincinnati_Reds_Logo.svg.png";
    document.getElementById("team5_logo").src = "../images/team_logos_MLB/National_League_Teams/colorado-rockies-vector-logo.png";
    document.getElementById("team6_logo").src = "../images/team_logos_MLB/National_League_Teams/LA Dodgers.png";
    document.getElementById("team7_logo").src = "../images/team_logos_MLB/National_League_Teams/Marlins_team_logo.svg";
    document.getElementById("team8_logo").src = "../images/team_logos_MLB/National_League_Teams/milwaukee-brewers-logo.png";
    document.getElementById("team9_logo").src = "../images/team_logos_MLB/National_League_Teams/new-york-mets-logo.png";
    document.getElementById("team10_logo").src = "../images/team_logos_MLB/National_League_Teams/phillies.svg";
    document.getElementById("team11_logo").src = "../images/team_logos_MLB/National_League_Teams/pirates.png";
    document.getElementById("team12_logo").src = "../images/team_logos_MLB/National_League_Teams/san-diego-padres-2.svg";
    document.getElementById("team13_logo").src = "../images/team_logos_MLB/National_League_Teams/san-francisco-giants-vector-logo.png";
    document.getElementById("team14_logo").src = "../images/team_logos_MLB/National_League_Teams/st-louis-cardinals-logo.png";
    document.getElementById("team15_logo").src = "../images/team_logos_MLB/National_League_Teams/Washington_Nationals_logo.svg.png";

    //changes individual team logos right side
    document.getElementById("team16_logo").src = "../images/team_logos_MLB/American_League_Teams/anaheim-angels.svg";
    document.getElementById("team17_logo").src = "../images/team_logos_MLB/American_League_Teams/boston-red-sox.svg";
    document.getElementById("team18_logo").src = "../images/team_logos_MLB/American_League_Teams/Chicago_White_Sox.png";
    document.getElementById("team19_logo").src = "../images/team_logos_MLB/American_League_Teams/Detroit_Tigers.svg.png";
    document.getElementById("team20_logo").src = "../images/team_logos_MLB/American_League_Teams/Houston-Astros-Logo.svg.png";
    document.getElementById("team21_logo").src = "../images/team_logos_MLB/American_League_Teams/kansas-city-royals.png";
    document.getElementById("team22_logo").src = "../images/team_logos_MLB/American_League_Teams/minnesota-twins.png";
    document.getElementById("team23_logo").src = "../images/team_logos_MLB/American_League_Teams/new-york-yankees-logo-transparent.png";
    document.getElementById("team24_logo").src = "../images/team_logos_MLB/American_League_Teams/Oakland_A's_logo.svg.png";
    document.getElementById("team25_logo").src = "../images/team_logos_MLB/American_League_Teams/orials.png";
    document.getElementById("team26_logo").src = "../images/team_logos_MLB/American_League_Teams/Seattle_Mariners.svg.png";
    document.getElementById("team27_logo").src = "../images/team_logos_MLB/American_League_Teams/tampa-bay-rays-logo-transparent.png";
    document.getElementById("team28_logo").src = "../images/team_logos_MLB/American_League_Teams/Texas_Rangers.svg.png";
    document.getElementById("team29_logo").src = "../images/team_logos_MLB/American_League_Teams/toronto-blue-jays-logo.png";
    document.getElementById("team30_logo").src = "../images/team_logos_MLB/American_League_Teams/cleveland-indians-cap-logo.png";
    document.getElementById("team31_logo").src = "../images/team_logos_MLB/American_League_Teams/cleveland-indians-cap-logo.png";







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