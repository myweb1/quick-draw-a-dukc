function setup() {
    canvas=createCanvas(280,280)
    background("white")
    poio = ml5.imageClassifier("DoodleNet")
    canvas.mouseReleased(clasifie)
}

function draw() {
    stroke("black")
    strokeWeight(20)
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}

function clasifie() {
    poio.classify(canvas,respond)

}
var awua = ""
var moni = ""
var puntos = 0
function respond(road,result) {
    if (!road) {
        console.log(result)
        awua = result[0].label
        document.getElementById("awua").innerHTML = result[0].label
        if (awua==moni) {
            puntos=puntos+1
            clearInterval(reloj)
            document.getElementById("puntos").innerHTML = puntos+" puntos"
            ask()
            
        }
    }
}
function fino() {
    background ("white")
}

function timetime() {
    tiempo --
    document.getElementById("tiempoji").innerHTML = tiempo +":" ;
    if (tiempo == 0) {
        clearInterval(reloj)
        ask()
    }
}

var ala = ["aircraft_carrier","airplane","alarm_clock","ambulance","angel","animal_migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball_bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday_cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling_fan","cello","cell_phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee_cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise_ship","cup","diamond","dishwasher","diving_board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear","elbow","elephant","envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire_hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip_flops","floor_lamp","flower","flying_saucer","foot","fork","frog","frying_pan","garden","garden_hose","giraffe","goatee","golf_club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey_puck","hockey_stick","horse","hospital","hot_air_balloon","hot_dog","hot_tub","hourglass","house","house_plant","hurricane","ice_cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light_bulb","lighter","lighthouse","lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker","matches","megaphone","mermaid","microphone","microwave","monkey","moon","mosquito","motorbike","mountain","mouse","moustache","mouth","mug","mushroom","nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint_can","palm_tree","panda","pants","paper_clip","parachute","parrot","passport","peanut","pear","peas","pencil","penguin","piano","pickup_truck","picture_frame","pig","pillow","pineapple","pizza","pliers","police_car","pond","pool","popsicle","postcard","potato","power_outlet","purse","rabbit","raccoon","radio","rain","rainbow","rake","remote_control","rhinoceros","rifle","river","roller_coaster","rollerskates","sailboat","sandwich","saw","saxophone","school_bus","scissors","scorpion","screwdriver","sea_turtle","see_saw","shark","sheep","shoe","shorts","shovel","sink","skateboard","skull","skyscraper","sleeping_bag","smiley_face","snail","snake","snorkel","snowflake","snowman","soccer_ball","sock","speedboat","spider","spoon","spreadsheet","square","squiggle","squirrel","stairs","star","steak","stereo","stethoscope","stitches","stop_sign","stove","strawberry","streetlight","string_bean","submarine","suitcase","sun","swan","sweater","swingset","sword","syringe","table","teapot","teddy-bear","telephone","television","tennis_racquet","tent","The_Eiffel_Tower","The_Great_Wall_of_China","The_Mona_Lisa","tiger","toaster","toe","toilet","tooth","toothbrush","toothpaste","tornado","tractor","traffic_light","train","tree","triangle","trombone","truck","trumpet","tshirt","umbrella","underwear","van","vase","violin","washing_machine","watermelon","waterslide","whale","wheel","windmill","wine_bottle","wine_glass","wristwatch","yoga","zebra","zigzag"]
var reloj = ""
function ask() {
    var dadodemuuuchoslados = Math.round(Math.random()*ala.length)
    moni = ala [dadodemuuuchoslados]
    document.getElementById("moni").innerHTML = moni
    console.log(dadodemuuuchoslados)
    tiempo=60
    clearInterval(reloj)
    reloj = setInterval(timetime,1000)
    
}