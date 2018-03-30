var names = ["Lars","Jan","Peter","Bo","Frederik","Rune"];
//var ulNames = '<ul>'+ names.map(name => '<li>' + name +'</li>').join(' ') + '</ul>';
//console.log(ulNames);

var evenMorenames = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];



var tableNames = '<table><thead><tr><th>Name</th><th>Phone</th></thead><tbody>' +
                 evenMorenames.map(name => '<tr><td>' + name.name + '</td><td>' + name.phone + '</td></tr>').join('')
                 + '</tbody></table>';

                

//console.log(tableNames)
document.getElementById('names').innerHTML = tableNames;

var filterNames = '<table><thead><tr><th>Name</th><th>Phone</th></thead><tbody>' + evenMorenames.filter(person=> person.name.length  >=3)
.map((name => '<tr><td>' + name.name + '</td><td>' + name.phone + '</td></tr>').join('')
+ '</tbody></table>')


function filtering(){


    document.getElementById("filtering").addEventListener("click", function(){
        document.getElementById("names").innerHTML = filterNames;
    });

}






