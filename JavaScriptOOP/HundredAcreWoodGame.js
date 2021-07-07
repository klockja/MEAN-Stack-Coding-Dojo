var pooh = 
{ 
    character: "Winnie The Pooh", 
    greet: function()
    {
        console.log("Oh bother.");
    } 
};
var tigger = 
{ 
    character: "Tigger",
    greet: function()
    {
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }  
};
var kanga = 
{ 
    character: "Kanga",
    greet: function()
    {
        console.log("Hello there, dear.");
    }   
};
var piglet = { character: "Piglet",
greet: function()
{
    console.log("Oh d-d-d-dear! I wasn't expecting company!");
}    };
var christopher = { character: "Christopher",
greet: function()
{
    console.log("Hey there!");
}    };
var owl = { character: "Owl" ,
greet: function()
{
    console.log("Why hello there.");
}   };
var bees = { character: "Bees" ,
greet: function()
{
    console.log("BZZZZZZ!");
}   };
var rabbit = { character: "Rabbit" ,
greet: function()
{
    console.log("Oh, good day to you!");
}   };
var gopher = { character: "Gopher" ,
greet: function()
{
    console.log("Hey there.");
}   };
var eeyore = { character: "Eeyore" ,
greet: function()
{
    console.log("Why bother.");
}   };
var heffalumps = { character: "Heffalumps" ,
greet: function()
{
    console.log("...");
}   };

pooh.south = tigger;
tigger.north = pooh;
pooh.east = bees;
bees.west = pooh;
pooh.west = piglet;
piglet.east = pooh;
piglet.north = owl;
owl.south = piglet;
christopher.west = owl;
owl.east = christopher;
christopher.south = pooh;
pooh.north = christopher;
christopher.east = rabbit;
rabbit.west = christopher;
rabbit.south = bees;
bees.north = rabbit;
rabbit.east = gopher;
gopher.west = rabbit;
christopher.north = kanga;
kanga.south = christopher;
kanga.north = eeyore;
eeyore.south = kanga;
eeyore.east = heffalumps;
heffalumps.west = eeyore;

var player = {
    location: tigger,
    hasHoney: false
}

function pickUp()
{
    if(player.location == bees)
    {
        player.hasHoney = true;
        console.log("You picked up some honey!");
    }
    else
        console.log("There is no honey to pick up here.");
}

function drop()
{
    if(player.location == missionLocation && player.hasHoney)
    {
        player.hasHoney = false;
        console.log("Good job! You delivered the honey to " + player.location.character + "!")
        mission();
    }
    else
        console.log("Whoops! " + player.location.character + " did not request honey!");
}

function north() 
{
    if(player.location.north != null)
    {
        player.location = player.location.north;
        console.log("You moved north to " + player.location.character + ".");
        player.location.greet();
        return player.location;
    }
    else
        console.log("There is nothing north of here.");
}
function south() 
{
    if(player.location.south != null)
    {
        player.location = player.location.south;
        console.log("You moved south to " + player.location.character + ".");
        player.location.greet();
        return player.location;
    }
    else
        console.log("There is nothing south of here.");
}
function west() 
{
    if(player.location.west != null)
    {
        player.location = player.location.west;
        console.log("You moved west to " + player.location.character + ".");
        player.location.greet();
        return player.location;
    }
    else
        console.log("There is nothing west of here.");
}
function east() 
{
    if(player.location.east != null)
    {
        player.location = player.location.east;
        console.log("You moved east to " + player.location.character + ".");
        player.location.greet();
        return player.location;
    }
    else
    console.log("There is nothing east of here.");
}

var missionLocation = pooh;
function mission()
{
    var randNum = Math.random();
    var options = [pooh, tigger, piglet, owl, rabbit, gopher, kanga, christopher, eeyore, heffalumps]
    randNum = Math.floor(randNum * options.length);
    missionLocation = options[randNum];
    console.log(missionLocation.character + " requests honey!");
}

function startLocation()
{
    var randNum = Math.random();
    var options = [pooh, tigger, piglet, owl, rabbit, gopher, kanga, christopher, eeyore, heffalumps]
    randNum = Math.floor(randNum * options.length);
    player.location = options[randNum];
    console.log("You start at " + player.location.character + ".");
    player.location.greet();
}

startLocation();
mission();
