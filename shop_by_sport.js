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
    document.getElementById("conference_one_logo").src = "../images/team_logos_NFL/AFC.png";
    document.getElementById("conference_two_logo").src = "../images/team_logos_NFL/NFC.png"; 

   //Changes individual team logos left side 

   

    document.getElementById("team1_logo").href = "../product_pages/Football/nfl/shop_broncos.html"; 
    document.getElementById("team1_logo2").src = "../images/team_logos_NFL/AFC_Teams/broncos.png";



    //.src = "../images/team_logos_NFL/AFC_Teams/broncos.png"; 
    document.getElementById("team2_logo").href = "../product_pages/Football/nfl/shop_chargers.html";                    
    document.getElementById("team2_logo2").src = "../images/team_logos_NFL/AFC_Teams/chargers.png";

    document.getElementById("team3_logo").href = "../product_pages/Football/nfl/shop_bengals.html";
    document.getElementById("team3_logo2").src = "../images/team_logos_NFL/AFC_Teams/bengals.png";

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
    document.getElementById("team16_logo").href = "../product_pages/Football/nfl/shop_ArizonaCardinals.html";    
    document.getElementById("team16_logo2").src = "../images/team_logos_NFL/NFC_Teams/arizona-cardinals.png";

    document.getElementById("team17_logo").href = "../product_pages/Football/nfl/shop_bears.html";    
    document.getElementById("team17_logo2").src = "../images/team_logos_NFL/NFC_Teams/bears.gif";

    document.getElementById("team18_logo").href = "../product_pages/Football/nfl/shop.buccaneers.html";    
    document.getElementById("team18_logo2").src = "../images/team_logos_NFL/NFC_Teams/buccaneers.png";

    document.getElementById("team19_logo").href = "../product_pages/Football/nfl/shop.cowboys.html";    
    document.getElementById("team19_logo2").src = "../images/team_logos_NFL/NFC_Teams/cowboys.png";

    document.getElementById("team20_logo").href = "../product_pages/Football/nfl/shop.eagles.html";    
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

    document.getElementById("team30_logo").href = "../product_pages/Football/nfl/shop_sf_49ers.html";    
    document.getElementById("team30_logo2").src = "../images/team_logos_NFL/NFC_Teams/sf 49ers.png";

    document.getElementById("team31_logo2").src = "../images/team_logos_NFL/NFC_Teams/vikings.png";



    }
     

function create_MLB() {
    document.getElementById("league_logo").src = "../images/StoreFrontLogos/MLB.png";
    document.getElementById("conference_one_logo").src = "../images/team_logos_MLB/National_League.png";
    document.getElementById("conference_two_logo").src = "../images/team_logos_MLB/American_League.png";

    //Changes individual team logos left side 
    document.getElementById("team1_logo").href = "../product_pages/Baseball/shop_diamondbacks.html";    
    document.getElementById("team1_logo2").src = "../images/team_logos_MLB/National_League_Teams/arizona-diamondbacks.png";

    document.getElementById("team2_logo").href = "../product_pages/Baseball/shop_braves.html";    
    document.getElementById("team2_logo2").src = "../images/team_logos_MLB/National_League_Teams/atlanta-braves-logo.png";

    document.getElementById("team3_logo").href = "../product_pages/Baseball/shop_cubs.html";    
    document.getElementById("team3_logo2").src = "../images/team_logos_MLB/National_League_Teams/Chicago_Cubs_logo.svg.png";

    document.getElementById("team4_logo").href = "../product_pages/Baseball/shop_reds.html";    
    document.getElementById("team4_logo2").src = "../images/team_logos_MLB/National_League_Teams/Cincinnati_Reds_Logo.svg.png";

    document.getElementById("team5_logo").href = "../product_pages/Baseball/shop_rockies.html";    
    document.getElementById("team5_logo2").src = "../images/team_logos_MLB/National_League_Teams/colorado-rockies-vector-logo.png";

    document.getElementById("team6_logo").href = "../product_pages/Baseball/shop_dodgers.html";    
    document.getElementById("team6_logo2").src = "../images/team_logos_MLB/National_League_Teams/LA Dodgers.png";

    document.getElementById("team7_logo").href = "../product_pages/Baseball/shop_marlins.html";    
    document.getElementById("team7_logo2").src = "../images/team_logos_MLB/National_League_Teams/Marlins_team_logo.svg";

    document.getElementById("team8_logo").href = "../product_pages/Baseball/shop_brewers.html";      
    document.getElementById("team8_logo2").src = "../images/team_logos_MLB/National_League_Teams/milwaukee-brewers-logo.png";

    document.getElementById("team9_logo").href = "../product_pages/Baseball/shop_mets.html";      
    document.getElementById("team9_logo2").src = "../images/team_logos_MLB/National_League_Teams/new-york-mets-logo.png";

    document.getElementById("team10_logo").href = "../product_pages/Baseball/shop_phillies.html";      
    document.getElementById("team10_logo2").src = "../images/team_logos_MLB/National_League_Teams/phillies.svg";

    document.getElementById("team11_logo").href = "../product_pages/Baseball/shop_pirates.html";      
    document.getElementById("team11_logo2").src = "../images/team_logos_MLB/National_League_Teams/pirates.png";

    document.getElementById("team12_logo").href = "../product_pages/Baseball/shop_padres.html";      
    document.getElementById("team12_logo2").src = "../images/team_logos_MLB/National_League_Teams/san-diego-padres-2.svg";

    document.getElementById("team13_logo").href = "../product_pages/Baseball/shop_sfgiants.html";      
    document.getElementById("team13_logo2").src = "../images/team_logos_MLB/National_League_Teams/san-francisco-giants-vector-logo.png";

    document.getElementById("team14_logo").href = "../product_pages/Baseball/shop_cardinals.html";      
    document.getElementById("team14_logo2").src = "../images/team_logos_MLB/National_League_Teams/st-louis-cardinals-logo.png";

    document.getElementById("team15_logo").href = "../product_pages/Baseball/shop_nationals.html";      
    document.getElementById("team15_logo2").src = "../images/team_logos_MLB/National_League_Teams/Washington_Nationals_logo.svg.png";

    //changes individual team logos right side
    document.getElementById("team16_logo").href = "../product_pages/Baseball/shop_angels.html";      
    document.getElementById("team16_logo2").src = "../images/team_logos_MLB/American_League_Teams/anaheim-angels.svg";

    document.getElementById("team17_logo").href = "../product_pages/Baseball/shop_redsox.html";      
    document.getElementById("team17_logo2").src = "../images/team_logos_MLB/American_League_Teams/boston-red-sox.svg";

    document.getElementById("team18_logo").href = "../product_pages/Baseball/shop_whitesox.html";      
    document.getElementById("team18_logo2").src = "../images/team_logos_MLB/American_League_Teams/Chicago_White_Sox.png";

    document.getElementById("team19_logo").href = "../product_pages/Baseball/shop_tigers.html";      
    document.getElementById("team19_logo2").src = "../images/team_logos_MLB/American_League_Teams/Detroit_Tigers.svg.png";

    document.getElementById("team20_logo").href = "../product_pages/Baseball/shop_astros.html";      
    document.getElementById("team20_logo2").src = "../images/team_logos_MLB/American_League_Teams/Houston-Astros-Logo.svg.png";


    document.getElementById("team21_logo").href = "../product_pages/Baseball/shop_royals.html";      
    document.getElementById("team21_logo2").src = "../images/team_logos_MLB/American_League_Teams/kansas-city-royals.png";

    document.getElementById("team22_logo").href = "../product_pages/Baseball/shop_twins.html";      
    document.getElementById("team22_logo2").src = "../images/team_logos_MLB/American_League_Teams/minnesota-twins.png";

    document.getElementById("team23_logo").href = "../product_pages/Baseball/shop_yankees.html";      
    document.getElementById("team23_logo2").src = "../images/team_logos_MLB/American_League_Teams/new-york-yankees-logo-transparent.png";

    document.getElementById("team24_logo").href = "../product_pages/Baseball/shop_Athletics.html";      
    document.getElementById("team24_logo2").src = "../images/team_logos_MLB/American_League_Teams/Oakland_A's_logo.svg.png";

    document.getElementById("team25_logo").href = "../product_pages/Baseball/shop_orials.html";      
    document.getElementById("team25_logo2").src = "../images/team_logos_MLB/American_League_Teams/orials.png";

    document.getElementById("team26_logo").href = "../product_pages/Baseball/shop_Mariners.html";      
    document.getElementById("team26_logo2").src = "../images/team_logos_MLB/American_League_Teams/Seattle_Mariners.svg.png";

    document.getElementById("team27_logo").href = "../product_pages/Baseball/shop_rays.html";      
    document.getElementById("team27_logo2").src = "../images/team_logos_MLB/American_League_Teams/tampa-bay-rays-logo-transparent.png";

    document.getElementById("team28_logo").href = "../product_pages/Baseball/shop_rangers.html";      
    document.getElementById("team28_logo2").src = "../images/team_logos_MLB/American_League_Teams/Texas_Rangers.svg.png";

    document.getElementById("team29_logo").href = "../product_pages/Baseball/shop_bluejays.html";      
    document.getElementById("team29_logo2").src = "../images/team_logos_MLB/American_League_Teams/toronto-blue-jays-logo.png";

    document.getElementById("team30_logo").href = "../product_pages/Baseball/shop_indians.html";      
    document.getElementById("team30_logo2").src = "../images/team_logos_MLB/American_League_Teams/cleveland-indians-cap-logo.png";

    document.getElementById("team31_logo").href = "../product_pages/Baseball/shop_royals.html";      
    document.getElementById("team31_logo").src = "../images/team_logos_MLB/American_League_Teams/cleveland-indians-cap-logo.png";







}
function create_NHL() {
    //add nhl images to project
    document.getElementById("league_logo").src = "../images/StoreFrontLogos/NHL.png";
    document.getElementById("conference_one_logo").src = "../images/team_logos_NHL/eastern.png";
    document.getElementById("conference_two_logo").src = "../images/team_logos_NHL/western.png";

    //Changes individual team logos left side 
    document.getElementById("team1_logo").href = "../product_pages/Hockey/shop_diamondbacks.html";    
    document.getElementById("team1_logo2").src = "../images/team_logos_NHL/eastern_conference/carolina.png";

    document.getElementById("team2_logo").href = "../product_pages/Hockey/shop_braves.html";    
    document.getElementById("team2_logo2").src = "../images/team_logos_NHL/eastern_conference/detroit.png";

    document.getElementById("team3_logo").href = "../product_pages/Hockey/shop_cubs.html";    
    document.getElementById("team3_logo2").src = "../images/team_logos_NHL/eastern_conference/montreal.png";

    document.getElementById("team4_logo").href = "../product_pages/Hockey/shop_reds.html";    
    document.getElementById("team4_logo2").src = "../images/team_logos_NHL/eastern_conference/newjersey.png";

    document.getElementById("team5_logo").href = "../product_pages/Hockey/shop_rockies.html";    
    document.getElementById("team5_logo2").src = "../images/team_logos_NHL/eastern_conference/newyorkr.png";

    document.getElementById("team6_logo").href = "../product_pages/Hockey/shop_dodgers.html";    
    document.getElementById("team6_logo2").src = "../images/team_logos_NHL/eastern_conference/NHL_BlueJackets_Primary.png";

    document.getElementById("team7_logo").href = "../product_pages/Hockey/shop_marlins.html";    
    document.getElementById("team7_logo2").src = "../images/team_logos_NHL/eastern_conference/NHL_Bruins_Primary.png";

    document.getElementById("team8_logo").href = "../product_pages/Hockey/shop_brewers.html";      
    document.getElementById("team8_logo2").src = "../images/team_logos_NHL/eastern_conference/NY-Islanders-Primary.png";

    document.getElementById("team9_logo").href = "../product_pages/Hockey/shop_mets.html";      
    document.getElementById("team9_logo2").src = "../images/team_logos_NHL/eastern_conference/NHL_Capitals_Primary.png";

    document.getElementById("team10_logo").href = "../product_pages/Hockey/shop_phillies.html";      
    document.getElementById("team10_logo2").src = "../images/team_logos_NHL/eastern_conference/NHL_Lightning_Primary.png";

    document.getElementById("team11_logo").href = "../product_pages/Hockey/shop_pirates.html";      
    document.getElementById("team11_logo2").src = "../images/team_logos_NHL/eastern_conference/NHL_MapleLeafs_Primary.png";

    document.getElementById("team12_logo").href = "../product_pages/Hockey/shop_padres.html";      
    document.getElementById("team12_logo2").src = "../images/team_logos_NHL/eastern_conference/NHL_Panthers_Primary.png";

    document.getElementById("team13_logo").href = "../product_pages/Hockey/shop_sfgiants.html";      
    document.getElementById("team13_logo2").src = "../images/team_logos_NHL/eastern_conference/NHL_Penguins_Primary.png";

    document.getElementById("team14_logo").href = "../product_pages/Hockey/shop_cardinals.html";      
    document.getElementById("team14_logo2").src = "../images/team_logos_NHL/eastern_conference/NHL_Sabres_Primary.png";

    document.getElementById("team15_logo").href = "../product_pages/Hockey/shop_nationals.html";      
    document.getElementById("team15_logo2").src = "../images/team_logos_NHL/eastern_conference/NHL_Senators_Primary.png";

    //changes individual team logos right side
    document.getElementById("team16_logo").href = "../product_pages/Hockey/shop_angels.html";      
    document.getElementById("team16_logo2").src = "../images/team_logos_NHL/western_conference/calgary.png";

    document.getElementById("team17_logo").href = "../product_pages/Hockey/shop_redsox.html";      
    document.getElementById("team17_logo2").src = "../images/team_logos_NHL/western_conference/chicago.png";

    document.getElementById("team18_logo").href = "../product_pages/Hockey/shop_whitesox.html";      
    document.getElementById("team18_logo2").src = "../images/team_logos_NHL/western_conference/colorado.png";

    document.getElementById("team19_logo").href = "../product_pages/Hockey/shop_tigers.html";      
    document.getElementById("team19_logo2").src = "../images/team_logos_NHL/western_conference/NHL_Coyotes_Primary.png";

    document.getElementById("team20_logo").href = "../product_pages/Hockey/shop_astros.html";      
    document.getElementById("team20_logo2").src = "../images/team_logos_NHL/western_conference/NHL_Ducks_Primary.png";


    document.getElementById("team21_logo").href = "../product_pages/Hockey/shop_royals.html";      
    document.getElementById("team21_logo2").src = "../images/team_logos_NHL/western_conference/NHL_Jets_Primary.png";

    document.getElementById("team22_logo").href = "../product_pages/Hockey/shop_twins.html";      
    document.getElementById("team22_logo2").src = "../images/team_logos_NHL/western_conference/NHL_Kings_Primary.png";

    document.getElementById("team23_logo").href = "../product_pages/Hockey/shop_yankees.html";      
    document.getElementById("team23_logo2").src = "../images/team_logos_NHL/western_conference/NHL_Oilers_Primary.png";

    document.getElementById("team24_logo").href = "../product_pages/Hockey/shop_Athletics.html";      
    document.getElementById("team24_logo2").src = "../images/team_logos_NHL/western_conference/NHL_Predators_Primary.png";

    document.getElementById("team25_logo").href = "../product_pages/Hockey/shop_orials.html";      
    document.getElementById("team25_logo2").src = "../images/team_logos_NHL/western_conference/NHL_Sharks_Primary.png";

    document.getElementById("team26_logo").href = "../product_pages/Hockey/shop_Mariners.html";      
    document.getElementById("team26_logo2").src = "../images/team_logos_NHL/western_conference/NHL_Stars_Primary.png";

    document.getElementById("team27_logo").href = "../product_pages/Hockey/shop_rays.html";      
    document.getElementById("team27_logo2").src = "../images/team_logos_NHL/western_conference/NHL_Wild_Primary.png";

    document.getElementById("team28_logo").href = "../product_pages/Hockey/shop_rangers.html";      
    document.getElementById("team28_logo2").src = "../images/team_logos_NHL/western_conference/stlouis.png";

    document.getElementById("team29_logo").href = "../product_pages/Hockey/shop_bluejays.html";      
    document.getElementById("team29_logo2").src = "../images/team_logos_NHL/western_conference/Vancouver_Canucks.png";

    document.getElementById("team30_logo").href = "../product_pages/Hockey/shop_indians.html";      
    document.getElementById("team30_logo2").src = "../images/team_logos_NHL/western_conference/philadelphia.gif";

    document.getElementById("team31_logo").href = "../product_pages/Hockey/shop_royals.html";      
    document.getElementById("team31_logo").src = "../images/team_logos_NHL/western_conference/philadelphia.gif";



}
function create_SOCCER() {
    //add prem and la liga images only
    //left will be prem, right will be la liga
    document.getElementById("league_logo").src = "../images/StoreFrontLogos/Soccer.png";
    document.getElementById("conference_one_logo").src = "../images/team_logos_SOCCER/La_Liga_Logo.jpg";
    document.getElementById("conference_two_logo").src = "../images/team_logos_SOCCER/Premier_League.jpg";

    //Changes individual team logos left side 
    document.getElementById("team1_logo").href = "../product_pages/Soccer/shop_bilboa.html";    
    document.getElementById("team1_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Athletic_Club_Bilbao.svg";

    document.getElementById("team2_logo").href = "../product_pages/Soccer/shop_braves.html";    
    document.getElementById("team2_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Atletico_Madrid_logo.svg.png";

    document.getElementById("team3_logo").href = "../product_pages/Soccer/shop_cubs.html";    
    document.getElementById("team3_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/barcelona-2.svg";

    document.getElementById("team4_logo").href = "../product_pages/Soccer/shop_reds.html";    
    document.getElementById("team4_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Celta_Vigo.png";

    document.getElementById("team5_logo").href = "../product_pages/Soccer/shop_rockies.html";    
    document.getElementById("team5_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Deportivo_Alaves.png";

    document.getElementById("team6_logo").href = "../product_pages/Soccer/shop_dodgers.html";    
    document.getElementById("team6_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Deportivo_Leganes_logo.png";

    document.getElementById("team7_logo").href = "../product_pages/Soccer/shop_marlins.html";    
    document.getElementById("team7_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Espanyol.png";

    document.getElementById("team8_logo").href = "../product_pages/Soccer/shop_brewers.html";      
    document.getElementById("team8_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Getafe.jpeg";

    document.getElementById("team9_logo").href = "../product_pages/Soccer/shop_mets.html";      
    document.getElementById("team9_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Granada.png";

    document.getElementById("team10_logo").href = "../product_pages/Soccer/shop_phillies.html";      
    document.getElementById("team10_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Levante.png";

    document.getElementById("team11_logo").href = "../product_pages/Soccer/shop_pirates.html";      
    document.getElementById("team11_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Mallorca.png";

    document.getElementById("team12_logo").href = "../product_pages/Soccer/shop_padres.html";      
    document.getElementById("team12_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Osasuna.png";

    document.getElementById("team13_logo").href = "../product_pages/Soccer/shop_sfgiants.html";      
    document.getElementById("team13_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Real_Betis.png";

    document.getElementById("team14_logo").href = "../product_pages/Soccer/shop_cardinals.html";      
    document.getElementById("team14_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/Real_Sociedad.svg.png";

    document.getElementById("team15_logo").href = "../product_pages/Soccer/shop_nationals.html";      
    document.getElementById("team15_logo2").src = "../images/team_logos_SOCCER/La_Liga_Teams/real-madrid-c-f.svg";

    //changes individual team logos right side
    document.getElementById("team16_logo").href = "../product_pages/Soccer/shop_angels.html";      
    document.getElementById("team16_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Arsenal.png";

    document.getElementById("team17_logo").href = "../product_pages/Soccer/shop_redsox.html";      
    document.getElementById("team17_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Aston_Villa.png";

    document.getElementById("team18_logo").href = "../product_pages/Soccer/shop_whitesox.html";      
    document.getElementById("team18_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Bournemouth.png";

    document.getElementById("team19_logo").href = "../product_pages/Soccer/shop_tigers.html";      
    document.getElementById("team19_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Brighton.png";

    document.getElementById("team20_logo").href = "../product_pages/Soccer/shop_astros.html";      
    document.getElementById("team20_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Burnley.png";


    document.getElementById("team21_logo").href = "../product_pages/Soccer/shop_royals.html";      
    document.getElementById("team21_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Chelsea.png";

    document.getElementById("team22_logo").href = "../product_pages/Soccer/shop_twins.html";      
    document.getElementById("team22_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Crystal_Palace.png";

    document.getElementById("team23_logo").href = "../product_pages/Soccer/shop_yankees.html";      
    document.getElementById("team23_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Everton.png";

    document.getElementById("team24_logo").href = "../product_pages/Soccer/shop_Athletics.html";      
    document.getElementById("team24_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/FC_Southampton.svg";

    document.getElementById("team25_logo").href = "../product_pages/Soccer/shop_orials.html";      
    document.getElementById("team25_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Leicester.png";

    document.getElementById("team26_logo").href = "../product_pages/Soccer/shop_Mariners.html";      
    document.getElementById("team26_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Liverpool.png";

    document.getElementById("team27_logo").href = "../product_pages/Soccer/shop_rays.html";      
    document.getElementById("team27_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Manchester_City.png";

    document.getElementById("team28_logo").href = "../product_pages/Soccer/shop_rangers.html";      
    document.getElementById("team28_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Manchester_United.png";

    document.getElementById("team29_logo").href = "../product_pages/Soccer/shop_bluejays.html";      
    document.getElementById("team29_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Newcastle_United_Logo.svg.png";

    document.getElementById("team30_logo").href = "../product_pages/Soccer/shop_indians.html";      
    document.getElementById("team30_logo2").src = "../images/team_logos_SOCCER/Premier_League_Teams/Norwich.png";

    document.getElementById("team31_logo").href = "../product_pages/Soccer/shop_royals.html";      
    document.getElementById("team31_logo").src = "../images/team_logos_SOCCER/Premier_League_Teams/Wolverhampton.png";














}