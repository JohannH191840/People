var body = document.body


var  div1 = document.createElement("div");
var img1 = document.createElement('img');
img1.src = "Ada.png";
img1.style.border = '3px solid black';
img1.style.width = '300px';
img1.style.height = '300px';
img1.style.margin = '10px';
div1.appendChild(img1);

var newparagraph = document.createElement('p');
var newText = document.createTextNode('Ada');
newparagraph.appendChild(newText);


var div2 = document.createElement("div");
var img2 = document.createElement('img');
img2.src = "Alan.jpg";
img2.style.border = '3px solid black';
img2.style.width = '300px';
img2.style.height = '300px';
img2.style.margin = '10px';
div2.appendChild(img2);

var newparagraph2 = document.createElement('p');
var newtext2 = document.createTextNode('Alan');
newparagraph2.appendChild(newtext2);

var div3 = document.createElement("div");
var img3 = document.createElement('img');
img3.src = "charles.jfif";
img3.style.border = '3px solid black';
img3.style.width = '300px';
img3.style.height = '300px';
img3.style.margin = '10px';
div3.appendChild(img3);

var newparagraph3 = document.createElement('p');
var newtext3 = document.createTextNode('charles');
newparagraph3.appendChild(newtext3);

var div4 = document.createElement("div");
var img4 = document.createElement('img');
img4.src = "steve.jfif";
img4.style.border = '3px solid black';
img4.style.width = '300px';
img4.style.height = '300px';
img4.style.margin = '10px';
div4.appendChild(img4);

var newparagraph4 = document.createElement('p');
var newtext4 = document.createTextNode('Steve');
newparagraph4.appendChild(newtext4);

var div5 = document.createElement("div");
var img5 = document.createElement('img');
img5.src = "Bill.jfif";
img5.style.border = '3px solid black';
img5.style.width = '300px';
img5.style.height = '300px';
img5.style.margin = '10px';
div5.appendChild(img5);

var newparagraph5 = document.createElement('p');
var newtext5 = document.createTextNode('Bill');
newparagraph5.appendChild(newtext5);

var div6 = document.createElement("div");
var img6 = document.createElement('img');
img6.src = "Elon.jfif";
img6.style.border = '3px solid black';
img6.style.width = '300px';
img6.style.height = '300px';
img6.style.margin = '10px';
div6.appendChild(img6);

var newparagraph6 = document.createElement('p');
var newtext6 = document.createTextNode('Bill');
newparagraph6.appendChild(newtext6);






















body.appendChild(newparagraph);
body.appendChild(div1);

body.appendChild(newparagraph2)
body.appendChild(div2);

body.appendChild(newparagraph3)
body.appendChild(div3);

body.appendChild(newparagraph4)
body.appendChild(div4);

body.appendChild(newparagraph5)
body.appendChild(div5);

body.appendChild(newparagraph6)
body.appendChild(div6);






body.style.display = 'flex';
body.style.flexWrap = 'wrap';
body.style.margin = '20px'