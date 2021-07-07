function userLanguages(users)
{
    for (var i = 0; i < users.length; i++)
    {
        msg = (users[i].fname + " " + users[i].lname + " knows")
        for (var p = 0; p < users[i].languages.length; p++)
        {
            if(p == users[i].languages.length - 1)
                msg += " and"
            msg += " " + users[i].languages[p];
        }
        console.log(msg += ".");
    }

}

users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]
  
  userLanguages(users)