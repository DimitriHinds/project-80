names_of_people = [];
function submit()
{
    var GuestName = document.getElementById("name_of_guest").value;
    names_of_people.push(GuestName);
    console.log(names_of_people);
    document.getElementById("name").innerHTML = names_of_people;
    var lenght = names_of_people.length;
    console.log(lenght);
}

function sorting()
{
names_of_people.sort();
var i = names_of_people.join("<br>");
console.log(names_of_people);
document.getElementById("sorted_list").innerHTML = i.toString();
}

function show()
{
    var t = names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("showed_list").innerHTML = t.toString();
}

function searching()
{
    var s = document.getElementById("search_name").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j])
        {
            found=found+1
        }
    }
document.getElementById("p2").innerHTML="name found "+found+" time/s";
console.log("found name "+found+" time/s");
}