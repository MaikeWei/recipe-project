var cur = 0;

//shoppinlist wird globale Variable
shoppinglist = new Array ();

//lädt Inhalt des localStorage
restoreContents();

//setzt Variable rezeptListe global gleich mit der Funktion loadData () in der sich die zutatenListen befinden
var rezeptListe = loadData();

//Startseite, wird beim Öffnen der App aufgerufen
function zeigeMenue () {
	//Bild auf der Startseite
	var myString = "<div> <img id='start'src='gemüse.png'/> </div>";
	//+= fügt der Variablen neue Werte hinzu
	myString += "<h1 id='überschrift'>Studentenfutter</h1>";

	//Ansprache
	myString += "<p>Hallo, dir fehlen die Ideen was du kochen kannst? Dann bist du hier richtig! Mit diesen einfachen Rezepten verzichtest du gerne auf den langweiligen Mensafraß. Außerdem kannst du hier einfach und bequem deine ausgewählten Zutaten, die du nicht daheim hast, auf die Einkaufsliste setzen.</p>";

	//Navigation zu den einzelnen Seiten
	myString += "<button class='startseite' type='button' onclick='zeigeRezept()' href='#'> Rezepte </button><br/><br/>";

	myString += "<button type='button' class='startseite' onclick='zeigeShoppinglist()' href='#'>Einkaufsliste </button><br/><br/>";

	myString += "<button type='button' class='startseite' onclick='zeigeFormular()' href='#'>Formular </button><br/>";

	//zeigt zeigeMenue() beim Aufrufen auf dem Display an
	document.getElementById('display').innerHTML = myString;
}


//ZutatenListen
function loadData(){

	var rezeptBuch = new Array ();

	//1. Rezept, Lasagne, cur = 0, wird als erstes angezeigt
	var zutatenListe = new Array();
	
	//push hängt die Elemente an das Ende der Zutatenliste
	zutatenListe.push ({name: "Zwiebel(n)", menge: 1, einheit: " "});
	zutatenListe.push ({name: "Knoblauch", menge: 2, einheit: "Zehe/n"});
	zutatenListe.push ({name: "Olivenöl", menge: 2, einheit: "EL"});
	zutatenListe.push ({name: "Hackfleisch", menge: 400, einheit: "g"});
	zutatenListe.push ({name: "Tomaten Dose", menge: 500, einheit: "g"});
	zutatenListe.push ({name: "Rotwein", menge: 100, einheit: "ml"});
	zutatenListe.push ({name: "Basilikum", menge: 0.5, einheit: "Bund"});
	zutatenListe.push ({name: "Butter", menge: 2, einheit: "EL"});
	zutatenListe.push ({name: "Mehl", menge: 2, einheit: "EL"});
	zutatenListe.push ({name: "Milch", menge: 300, einheit: "ml"});
	zutatenListe.push ({name: "Lasagneblätter", menge: 16, einheit: "Stück"});
	zutatenListe.push ({name: "Käse gerieben", menge: 150, einheit: "g"});

	//die zutatenListe wird in das rezeptBuch integriert
	rezeptBuch.push( 
		{titel: "Lasagne", 
		 bild: "<img id='rezepte_bild' src='lasagne_rezept.png'/>",
		 zutaten : zutatenListe, 
		 zeit : 90,
		 text_schwierigkeit:"<b>Schwierigkeit: einfach</b>",
		 text_txt: "<button type='button' onclick=zählerx() id='counterx'>Test</button><br/>Den Backofen auf 200°C Ober-und Unterhitze vorheizen. Die Zwiebel und den Knoblauch abzhiehen, fein hacken und in einem Topf mit 2 EL heißem Öl glasig dünsten. Das Hackfleisch zugeben, krümelig braten und die Tomaten zugeben. Den Rotwein angießen, salzen, pfeffern und bei mittlerer Hitze <button type='button' onclick=zähler() id='counter'> 20 Minuten</button> unter gelegentlichem Rühren köcheln lassen. Das Basilikum abbrausen, trocken schütteln, die Blättchen grob hacken und unter die Hackfleischsauce rühren. Für die Béchamel die Butter in einem Topf zerlassen, das Mehl darüber stauben und unter Rühren anschwitzen. Die Milch nach und nach zugießen und mit einem Schneebesen kräftig verrühren, damit sich keine Klumpen bilden. <button type='button' onclick=zähler1() id='counter1'> 2 Minuten</button>dicklich einköcheln lassen, mit Salz, Pfeffer und Muskat würzen und vom Herd ziehen. 1-2 Schöpfkellen von der Hackfleischmasse in eine gefettete Auflaufform verteilen, mit Lasagneplatten bedecken und diese mit etwas Béchamelsauce bestreichen. Diesen Vorgang so oft wiederholen, bis alle Zutaten aufgebraucht sind und die Lasagne aus mehrerer Schichten besteht. Dabei mit der Hackfleischmasse abschließen und diese mit dem Käse bestreuen. Im vorgeheizten Ofen <button type='button' onclick=zähler2() id='counter2'> 40 Minuten</button> goldbraun backen. Herausnehmen und in Stücke portioniert auf Teller angerichtet servieren. Nach Belieben frischen, grünen Salat dazu reichen."
		}
	);

	//2. Rezept, cur = 1, beim Pfeil nach rechts angezeigt
	zutatenListe = new Array();
	
	zutatenListe.push ({name: "Salat", menge: 1, einheit: "Kopf"});
	zutatenListe.push ({name: "Tomaten", menge: 300, einheit: "g"});
	zutatenListe.push ({name: "Gurke", menge: 150, einheit: "g"});
	zutatenListe.push ({name: "Feta", menge: 200, einheit: "g"});
	zutatenListe.push ({name: "Oliven", menge: 120, einheit: "g"});
	zutatenListe.push ({name: "Olivenöl", menge: 6, einheit: "EL"});
	zutatenListe.push ({name: "Balsamico Essig", menge: 2, einheit: "EL"});

	rezeptBuch.push( 
		{titel: "Griechischer Salat", 
		 bild: "<img id='rezepte_bild' src='salat_rezept.png'/>",
		 zutaten : zutatenListe, 
		 zeit : 15,
		 text_schwierigkeit:"<b>Schwierigkeit: leicht </b>",
		 text_txt: "Die Tomaten waschen und in Spalten schneiden. Die Salatgurke waschen und in Scheiben schneiden. Den Schafskäse abtropfen lassen und würfeln. Die Oliven ebenfalls abtropfen lassen. Alle vorbereiteten Zutaten in eine Schüssel geben. Den Salat waschen, abtropfen lassen und in mundgerechte Stücke reißen. Anschließend den Salat auch in die Schüssel geben. Alle Zutaten durcheinander mischen. Danach das Öl und den Essig über das Gemüse geben. Den Salat mit Salz und Pfeffer würzen und noch einmal durcheinander mischen. Jetzt den Salat servieren.",
		 text_notiz:""
		}
	);
	

	//3. Rezept, cur = 2
	zutatenListe = new Array();
	
	zutatenListe.push ({name: "Frühlingszwiebel(n)", menge: 4, einheit: "Stück"});
	zutatenListe.push ({name: "Chilischote(n)", menge: 1, einheit: "Stück"});
	zutatenListe.push ({name: "Koriandergrün", menge: 15, einheit: "g"});
	zutatenListe.push ({name: "Tomaten", menge: 750, einheit: "g"});
	zutatenListe.push ({name: "Knoblauch", menge: 2, einheit: "Zehe/n"});
	zutatenListe.push ({name: "Kichererbsen", menge: 400, einheit: "g"});
	zutatenListe.push ({name: "Feta", menge: 30, einheit: "g"});
	zutatenListe.push ({name: "Limette(n)", menge: 1, einheit: " "});
	rezeptBuch.push( 
		{titel: "Mexikanische Tomatensuppe", 
		 bild: "<img id='rezepte_bild' src='suppe_rezept.png'/>",
		 zutaten : zutatenListe, 
		 zeit: 30,
		 text_schwierigkeit:"<b>Schwierigkeit: total einfach</b>",
		 text_txt: "Die Frühlingszwiebeln putzen und mit der Chilischote und den Korianderstängeln fein schneiden. Die Tomaten von den Stielansätzen befreien und vierteln. Von den weißen Teilen der Frühlingszwiebeln die Hälfte beiseitestellen, ebenso die Hälfte der Chili sowie der Korianderblätter. Den Rest mit 2 TL Öl in einen großen Topf geben. Den Knoblauch durch die Presse drücken und alles bei mittlerer Hitze <button type='button' onclick=zähler3() id='counter3'> 2 Minuten</button> braten, dann die Tomaten hinzufügen. Die Kichererbsen mitsamt der Flüssigkeit und 600ml kochendem Wasser dazugießen, den Deckel auflegen. Die Suppe <button type='button' onclick=zähler4() id='counter4'> 20 Minuten</button> köcheln lassen, dann mit Salz und Pfeffer abschmecken, die Tomaten zerdrücken. Zum Servieren den Feta zerbröseln und darüberkrümeln, die Reste von Frühlingszwiebeln, Chili und Korianderblättern daraufstreuen und Limettenspalten dazu servieren."
		}
	);

	//4. Rezept, cur = 3
	zutatenListe = new Array();
	
	zutatenListe.push ({name: "Paprika", menge: 200, einheit: "g"});
	zutatenListe.push ({name: "Zucchini", menge: 250, einheit: "g"});
	zutatenListe.push ({name: "Chilischote(n)", menge: 1, einheit: "Stück"});
	zutatenListe.push ({name: "Vollkorn-Baguette", menge: 40, einheit: "g"});
	zutatenListe.push ({name: "Olivenöl", menge: 2, einheit: "EL"});
	zutatenListe.push ({name: "Bandnudeln", menge: 400, einheit: "g"});

	zutatenListe.push ({name: "Rapsöl", menge: 1, einheit: "EL"});
	zutatenListe.push ({name: "Knoblauch", menge: 1, einheit: "Zehe/n"});
	rezeptBuch.push( 
		{titel: "Paprika-Zucchini-Nudeln", 
		 bild: "<img id='rezepte_bild' src='paprika_rezept.png'/>",
		 zutaten : zutatenListe, 
		 zeit : 45,
		 text_schwierigkeit:"<b>Schwierigkeit: leicht</b>",
		 text_txt: "Paprikaschoten halbieren, entkernen und waschen. Ein Backblech mit Alufolie auslegen. Paprikahälften mit der Hautseite nach oben darauf verteilen. Unter dem vorgeheizten Backofengrill <button type='button' onclick=zähler5() id='counter5'>7 Minuten</button> rösten, bis die Haut leicht schwarz wird. Inzwischen Zucchini putzen, waschen, quer halbieren und längs in schmale Streifen schneiden. Kapern abtropfen lassen. Paprikaschoten aus dem Backofen nehmen und etwa <button type='button' onclick=zähler6() id='counter6'>5 Minuten</button>  mit einem feuchten Küchentuch bedecken. Anschließend häuten und würfeln. Chilischote längs halbieren, entkernen, waschen und fein hacken. Brot würfeln, mit den Händen fein zerkrümeln und in eine Schüssel geben. In einer kleinen beschichteten Pfanne 1 EL Olivenöl erhitzen. Brotkrümel und Chili darin unter häufigem Rühren goldbraun rösten. Nudeln nach Packungsanleitung in reichlich kochendem Salzwasser bissfest garen. Inzwischen restliches Öl in einer großen beschichteten Pfanne erhitzen. Zucchini darin unter Rühren bei mittlerer Hitze weichdünsten. Knoblauch schälen und durch eine Knoblauchpresse direkt zu den Zucchini geben. Paprikawürfel und Kapern unterrühren. Salzen, pfeffern und warm halten. Nudeln abgießen und abtropfen lassen, dabei 75 ml Nudelwasser auffangen. Nudeln und Gemüse mischen, Nudelwasser darunterrühren. Die Paprika-Zucchini-Nudeln mit Chilibröseln bestreuen und servieren.",
		 text_notiz:""
		}
	);	
	return rezeptBuch; //gibt aus

}


function zeigeRezept(){ //für 4 Personen
	var rezeptListe = loadData();

	//Navigation durch Buttons, Rezeptseite und Einkaufsliste gleich
	var myString = "<div id='top'><button class='nav' type='button' onclick='zeigeMenue()' href='#'> Menü </button>"+"  "+"<button class='nav' type='button' onclick='zeigeRezept()' href='#'> Rezepte </button>"+"  "+"<button class='nav' type='button' onclick='zeigeShoppinglist()' href='#'>Einkaufsliste </button>"+"  "+"<button class='nav' type='button' onclick='zeigeFormular()' href='#'> Formular </button></div><br/>";

	myString += "<h1 id='überschrift'>Rezepte</h1>";

	//Name des Rezeptes mit Navigation zu vorherigem Rezept und folgendem
	myString += "<a onclick='zurueck()' href='#'><img class='vorzurück' id='pfeile' src='pfeil_links.png'/></a><h2 class='vorzurück' id='rezeptTitel'>"+rezeptListe[cur].titel+"</h2><a onclick='vor()' href='#'><img class='vorzurück' id='pfeile' src='pfeil_rechts.png'/></a><p>- 4 Portionen -</p>";
	//Verlinkung durch Button zu 1 Portion
	myString += "<button onClick='zeigePortionSingle()' >1 Portion</button>";

	//Verlinkung durch Button zu 2 Portionen
	myString += "<button onClick='zeigePortion()' >2 Portionen</button>";

	//myString += "<label>Portionen:</label><select id='mySelect' onchange='myPortionen()'/><option value='--'> ------ </option><option value='single'>1 Portion</option><option value='two' >2 Portionen</option><option value='four'>4 Portionen</option></select>";

	myString+= "<table>";

	myString += "<tr><td>"+rezeptListe[cur].bild+"</td></tr>";

	myString += "</table><br/>";

	//Zutatenliste
	myString += "<table>";

	myString += "<tr><td id='spalte1'><b>Zutaten</b></td><td id='spalte2'><b>Menge</b></td><td id='spalte3'></td></tr>";	
	for (var i = 0; i < rezeptListe[cur].zutaten.length; i++){	
	myString += "<tr><td id='spalte1'>"+rezeptListe[cur].zutaten[i].name+"</td><td id='spalte2'>"+rezeptListe[cur].zutaten[i].menge+" "+rezeptListe[cur].zutaten[i].einheit+"</td><td id='spalte3'><a href='#' onClick='addToListe(\""+rezeptListe[cur].zutaten[i].menge+' '+rezeptListe[cur].zutaten[i].einheit+' '+rezeptListe[cur].zutaten[i].name+"\")' ><img class='plus' src='plus.png'/></a></td></tr>";
	}
	myString += "</table><br/>";

	//Zeit für Rezept
	myString += "<table>";
	myString += "<tr><td id='spalte1'><b>Dauer</b></td><td id='spalte2'>"+rezeptListe[cur].zeit+" Minuten</td></tr>";
	
    myString += "</table><br/>";

    //Zubereitungstext mit Schwierigkeit
	myString += "<table>";
	myString += "<tr><td id='spalte1'><b>Zubereitung <br/>" +' '+rezeptListe[cur].text_schwierigkeit+"</b></td></tr><tr><td id='spalte1'>"+rezeptListe[cur].text_txt+"</td></tr>";
	myString += "</table><br/>";
	
	myString += "<table>";
	myString += "<tr><td id='Begründung'><b>Notiz<br></td><td> <textarea rows='5' cols='100' name:'notizfeld'>Füge hier eine Notiz ein.</textarea></td></tr>";
	myString += "<tr><td></td><td><button type='button' onclick='notieren()' href='#'>Speichern </button><br/></td></tr>";
	myString += "</table><br/>";
	
	var mytext = "<table>";
	mytext += "<tr><td id='Begründung'><b>Notiz<br></td><td> <textarea name:'notizfeld'>Füge hier eine Notiz ein.</textarea><button type='button' onclick='notieren()' href='#'>Speichern </button><br/></td></tr><tr><td><td id='begründungHinzu'></td>" + notiz + "</td></tr>";
	mytext += "</table><br/>";

	//document.getElementById(begründungHinzu).innerHTML = mytext;
	
	document.getElementById('display').innerHTML = myString;
}	

var notiz= new Array();
	function notieren(){

	notiz.push(document.getElementById("notizfeld").value);
}

function zeigePortion(){ //2Portionen
	var rezeptListe = loadData();

	var myString = "<div id='top'><button class='nav' type='button' onclick='zeigeMenue()' href='#'> Menü </button>"+"  "+"<button class='nav' type='button' onclick='zeigeRezept()' href='#'> Rezepte </button>"+"  "+"<button class='nav' type='button' onclick='zeigeShoppinglist()' href='#'>Einkaufsliste </button>"+"  "+"<button class='nav' type='button' onclick='zeigeFormular()' href='#'> Formular </button></div><br/>";

	myString += "<h1 id='überschrift'>Rezepte</h1>";

	myString += "<a onclick='zurueck()' href='#'><img class='vorzurück' id='pfeile' src='pfeil_links.png'/></a><h2 class='vorzurück' id='rezeptTitel'>"+rezeptListe[cur].titel+"</h2><a onclick='vor()' href='#'><img class='vorzurück' id='pfeile' src='pfeil_rechts.png'/></a><p>- 2 Portionen -</p>";

	myString += "<button onClick='zeigePortionSingle()' >1 Portion</button>";

	myString += "<button onClick='zeigeRezept()' >4 Portionen</button>";

	myString+= "<table>";
	myString += "<tr><td>"+rezeptListe[cur].bild+"</td></tr>";
	myString += "</table><br/>";

	myString += "<table>";
	myString += "<tr><td><b>Zutaten</b></td><td><b>Menge</b></td><td></td></tr>";	
	for (var i = 0; i < rezeptListe[cur].zutaten.length; i++){	

	//Menge der Zutaten wird durch 2 geteilt
	myString += "<tr><td id='spalte1'>"+rezeptListe[cur].zutaten[i].name+"</td><td id='spalte2'>"+rezeptListe[cur].zutaten[i].menge/2+" "+rezeptListe[cur].zutaten[i].einheit+"</td><td id='spalte3'><a href='#' onClick='addToListe(\""+rezeptListe[cur].zutaten[i].menge/2+" "+rezeptListe[cur].zutaten[i].einheit+" "+rezeptListe[cur].zutaten[i].name+"\")'><img class='plus' src='plus.png'/></a></td></tr>";
	}

	myString += "</table><br/>";

	myString += "<table>";
	myString += "<tr><td id='spalte1'><b>Dauer</b></td><td id='spalte2'>"+rezeptListe[cur].zeit+" Minuten</td></tr>";
	
    myString += "</table><br/>";


	myString += "<table>";
	myString += "<tr><td id='spalte1'><b>Zubereitung <br/>" +' '+rezeptListe[cur].text_schwierigkeit+"</b></td></tr><tr><td id='spalte1'>"+rezeptListe[cur].text_txt+"</td></tr>";
	myString += "</table><br/>";
	
	myString += "<table>";
	myString += "<tr><td id='Begründung'><b>Notiz<br></td><td> <textarea rows='5' cols='100' name:'notizfeld'>Füge hier eine Notiz ein.</textarea></td></tr>";
	myString += "<tr><td></td><td><button type='button' onclick='notieren()' href='#'>Speichern </button><br/></td></tr>";
	myString += "</table><br/>";
	
	var mytext = "<table>";
	mytext += "<tr><td id='Begründung'><b>Notiz<br></td><td> <textarea name:'notizfeld'>Füge hier eine Notiz ein.</textarea><button type='button' onclick='notieren()' href='#'>Speichern </button><br/></td></tr><tr><td><td id='begründungHinzu'></td>" + notiz + "</td></tr>";
	mytext += "</table><br/>";


	document.getElementById('display').innerHTML = myString;
}	


function zeigePortionSingle(){ //Rezept für 1 Portion
	var rezeptListe = loadData();

	var myString = "<div id='top'><button class='nav' type='button' onclick='zeigeMenue()' href='#'> Menü </button>"+"  "+"<button class='nav' type='button' onclick='zeigeRezept()' href='#'> Rezepte </button>"+"  "+"<button class='nav' type='button' onclick='zeigeShoppinglist()' href='#'>Einkaufsliste </button>"+"  "+"<button class='nav' type='button' onclick='zeigeFormular()' href='#'> Formular </button></div><br/>";

	myString += "<h1 id='überschrift'>Rezepte</h1>";

	myString += "<a onclick='zurueck()' href='#'><img class='vorzurück' id='pfeile' src='pfeil_links.png'/></a><h2 class='vorzurück' id='rezeptTitel'>"+rezeptListe[cur].titel+"</h2><a onclick='vor()' href='#'><img class='vorzurück' id='pfeile' src='pfeil_rechts.png'/></a><p>- 1 Portion -</p>";

//myString += "<select size='10'> <option onClick='zeigePortionSingle()' >1 Portion</option><option value='2Portionen' onClick='zeigePortion()' >2 Portionen</option> <option value='4Portionen' onClick='zeigeRezept()' >4 Portionen</option></select>";

	myString += "<button onClick='zeigePortion()' >2 Portionen</button>";

	myString += "<button onClick='zeigeRezept()' >4 Portionen</button>";

	myString+= "<table>";
	myString += "<tr><td>"+rezeptListe[cur].bild+"</td></tr>";
	myString += "</table><br/>";

	myString += "<table>";
	myString += "<tr><td><b>Zutaten</b></td><td><b>Menge</b></td><td></td></tr>";
	for (var i = 0; i < rezeptListe[cur].zutaten.length; i++){	
		myString += "<tr><td id='spalte1'>"+rezeptListe[cur].zutaten[i].name+"</td><td id='spalte2'>"+rezeptListe[cur].zutaten[i].menge/4+" "+rezeptListe[cur].zutaten[i].einheit+"</td><td id='spalte3'><a href='#' onClick='addToListe(\""+rezeptListe[cur].zutaten[i].menge/4+' '+rezeptListe[cur].zutaten[i].einheit+' '+rezeptListe[cur].zutaten[i].name+"\")'><img class='plus' src='plus.png'/></a></td></tr>";
	} 
	//Menge der Zutaten wird von 4 Portionen ausgehend durch 4 geteilt

	myString += "</table><br/>";

	myString += "<table>";
	myString += "<tr><td id='spalte1'><b>Dauer</b></td><td id='spalte2'>"+rezeptListe[cur].zeit+" Minuten</td></tr>";
	
    myString += "</table><br/>";


	myString += "<table>";
	myString += "<tr><td id='spalte1'><b>Zubereitung <br/>" +' '+rezeptListe[cur].text_schwierigkeit+"</b></td></tr><tr><td id='spalte1'>"+rezeptListe[cur].text_txt+"</td></tr>";
	myString += "</table><br/>";
	
	myString += "<table>";
	myString += "<tr><td id='Begründung'><b>Notiz<br></td><td> <textarea rows='5' cols='100' name:'notizfeld'>Füge hier eine Notiz ein.</textarea></td></tr>";
	myString += "<tr><td></td><td><button type='button' onclick='notieren()' href='#'>Speichern </button><br/></td></tr>";
	myString += "</table><br/>";
	
	var mytext = "<table>";
	mytext += "<tr><td id='Begründung'><b>Notiz<br></td><td> <textarea name:'notizfeld'>Füge hier eine Notiz ein.</textarea><button type='button' onclick='notieren()' href='#'>Speichern </button><br/></td></tr><tr><td><td id='begründungHinzu'></td>" + notiz + "</td></tr>";
	mytext += "</table><br/>";

	document.getElementById('display').innerHTML = myString;
}	


//Formular
function zeigeFormular (){
	var rezeptListe = loadData();

	var myString = "<div id='top'><button class='nav' type='button' onclick='zeigeMenue()' href='#'> Menü </button>"+"  "+"<button class='nav' type='button' onclick='zeigeRezept()' href='#'> Rezepte </button>"+"  "+"<button class='nav' type='button' onclick='zeigeShoppinglist()' href='#'>Einkaufsliste </button>"+"  "+"<button class='nav' type='button' onclick='zeigeFormular()' href='#'> Formular </button></div><br/>";
	
	myString += "<label>Titel des Rezepts : </label>"+" <input type='text' name:'rezeptfeld'><br/><br/>";

	for (var i = 0; i < rezeptListe[cur].zutaten.length; i++){
	myString += "<label>Zutaten : </label>"+" <input size='20' maxlength='20' type='text' name:'zutatfeld'> <label>Menge: </label>"+" <input size='20' maxlength='4' type='text' name:'mengefeld'><label>Einheit : </label>"+" <input size='20' maxlength='5' type='text' name:'einheitfeld'><br/><br/>";
	}

	myString += "<label>Zeit in Minuten : </label>"+" <input size='20'  maxlength='3' type='' name:'zeitfeld'><br/><br/>";

	myString += "<label>Schwierigkeit: </label>"+" <input size='20'  maxlength='15' type='text' name:'schwierigkeitsfeld'><br/><br/>";

	myString += "<label>Beschreibung: </label>"+" <textarea rows='5' cols='100' name:'textfeld'>Füge hier eine Beschreibung ein.</textarea><br/><br/>";


	myString += "<button type='button' onClick='nZutat()' href='#'>hinzufügen</button>"
	
	document.getElementById('display').innerHTML = myString;	

}

//function nZutat(){
	//var myString = "<p>Zutaten : </p> <input type='text' name:'zutatfeld'> <p>Menge: </p> <input type='text' name:'mengefeld'><p>Einheit : </p> <input type='text' name:'einheitfeld'><button type='button' onClick='nZutat()' href='#'>hinzufügen</button>";
	//rezeptListe.rezeptBuch.titel.push(rezeptfeld.value);
	//document.getElementById('display').innerHTML = myString;
//}


// myPortionen(Feld){
		//if (Feld == '1 Portion') {onchange='zeigePortionSingle()'};
		//if (Feld == '2 Portionen') {onchange='zeigePortion()'};
		//if (Feld == "4 Portionen") {onchange = "zeigeRezept()"};
//}



//Mit Button verknüpft, leitet zum folgenden Rezept weiter
function vor(){
	if (cur < 4){cur++;} //Länge des Rezeptes
	console.log("Aktuelles Rezept:"+cur);
	zeigeRezept();
}

//mit Button verknüpft, leitet zum vorherigen Rezept weiter
function zurueck(){
	if (cur > 0){cur--;}
	console.log("Aktuelles Rezept:"+cur);
	zeigeRezept();
}

//Einkaufsliste
function zeigeShoppinglist(){
	restoreContents();

	var myString = "<div id='top'><button class='nav' type='button' onclick='zeigeMenue()' href='#'> Menü </button>"+"  "+"<button class='nav' type='button' onclick='zeigeRezept()' href='#'> Rezepte </button>"+"  "+"<button class='nav' type='button' onclick='zeigeShoppinglist()' href='#'>Einkaufsliste </button>"+"  "+"<button class='nav' type='button' onclick='zeigeFormular()' href='#'> Formular </button></div><br/>";

	myString += "<h1 id='überschrift'>Einkaufsliste</h1>";

	//über der Shoppinglist-Tabelle befindet sich ein Button, der die gesamte Liste löscht
	myString += "<button onclick='allesLoeschen(\""+shoppinglist[i]+"\")' >Alles löschen</button>";

	myString += "<table><ul>"; //in einer Tabelle sind die Elemente in der Linken Spalte integriert und in die rechte Spalte beinhaltet löschen-Buttons
	for (var i = 0; i < shoppinglist.length; i++){	
		myString += "<tr><td><li>"+shoppinglist[i]+"</li></td><td><input type='button' value='löschen' onclick='loeschen(\""+ i +"\")'></td></tr>";
	}
	myString += "</ul></table>";

	document.getElementById('display').innerHTML = myString;
}


function populateStorage (){ //speichert die Shoppinglist im localStorage, wird in JSON überschrieben
	localStorage.setItem('shoppingInhalt', JSON.stringify(shoppinglist)); //shoppingInhalt = key
	console.log("populate: " + JSON.stringify(shoppinglist));
}

function restoreContents (){ //gibt den localStorage in JavaScript aus
	console.log("restore: " + localStorage.getItem('shoppingInhalt'));
	shoppinglist = JSON.parse(localStorage.getItem('shoppingInhalt')); //parse übersetzt JSON zurück in JavaScript
	//if (shoppinglist == undefined){alert("Deine Einkaufsliste ist leer!");} //Pop-Up-Fenster popt auf, wenn nichts in der Einkaufsliste ist
}

//nimmt die Einträge von name, menge und einheit und pusht sie in die Shoppingliste
function addToListe(eintrag) {
	//var shoppinglist = JSON.parse(window.localStorage.getItem('shoppinglist')); //liest vom localStorage

	//var currentEntry; //wird mit entryNumber gleichgesetzt

	//erzeugt für jede Zutat eine eigene hochzählende Nummer in der Shoppinglist, solange wie shoppinglist ist
	//for(var entryNumber = 0; shoppinglist.length; entryNumber++) {
		//currentEntry = shoppinglist[entryNumber];

	//}

	shoppinglist.push(eintrag);
	populateStorage(); //speichert aktuellen Inhalt im localStorage
}

//leert den gespeicherten Inhalt in der Shoppingliste
function allesLoeschen () {
	shoppinglist = new Array(); //neues Array überschreibt die alte gefüllte Shoppinglist durch eine neue leere
	populateStorage(); 
 	zeigeShoppinglist(); //lädt die Seite Shoppinglist erneut
	}


function loeschen(index){
	shoppinglist.splice(index, 1); //entfernt aus der shoppinglist ein ausgewähltes Element, Element = index, ist in der Shoppinglist definiert
	
	console.log("loeschen");
	populateStorage();
	zeigeShoppinglist();
}





//Timer
//prototypische Erweiterung, durch Zuweisung ".Timer" verfügen alle Funktionen über das Notierte als gewöhnliche Unterobjekte 
Function.prototype.Timer = function (interval, calls, onend) { //beim Klicken auf den Timer-Button wird Timer gestartet; interval = Zeit zwischen Aufrufen in Millisekunden; calls = Anzahl der Aufrufe; onend = Wird am Ende der Wiederholung gestartet
	var count = 0; //beginnt bei 0 zu zählen
	var payloadFunction = this; //ermöglicht Zugriff
	var startTime = new Date(); //speichert Startzeitpunkt
	var callbackFunction = function () {
		return payloadFunction(startTime, count);
	}

	var endFunction = function () { //prüft am Ende des Ablaufs, und beendet die Funktion, indem es complete() einleitet
		if (onend) {
			onend(startTime, count, calls);
		}
	}

	var timerFunction = function () { //Wiederholt den Ablauf, bei Timerzeit = 0 wird auf endfunction() zugegriffen
		count++;
		if (count < calls && callbackFunction() != false) {
			window.setTimeout(timerFunction, interval);
		} else {
			endFunction();
		}
	}

	timerFunction();
}

function leadingzero(number) {
	return (number < 10) ? '0' + number : number; //0 wird vor einstellige Zahl geschrieben, damit immer gleiche Anzahl an Zahlen da steht
}

var audio = new Audio ('timer_sound.mp3'); //setzt Ton des Timers fest

function countdown(seconds, target) { 
	var element = document.getElementById(target);
	var calculateAndShow = function () {
		if (seconds > 0) { //Funktion rechnet selbstständig angegebene Sekunden aus der Zähler-function in Minuten und Stunden um
			var h = Math.floor(seconds / 3600); 
			var m = Math.floor((seconds % 3600) / 60);
			var s = seconds % 60;
			element.innerHTML = leadingzero(h) + ':' + leadingzero(m) + ':' +
				leadingzero(s); //gibt Zahlen in einem String aus
			seconds--; //zählt runter
		} else {
			return false;
		}
	}

	var completed = function () { //wenn Timer auf 0 abgelaufen, wird Ton gespielt und Pop-Up geöffnet
		audio.play();
		alert("Fertig!");
	}

	calculateAndShow.Timer(1000, Infinity, completed); //Hauptfunktion, durchläuft. beendet. verbindet obere Funktion mit CalculateAndShow()
}

//einzelne Timerzahlen, die im Zubereitungstext sind
function zähler (){
	new countdown(1200, 'counter'); //alle Zeiten werden in Sekunden angegeben, rechnet selbst auf Minuten und Stunden um
}

function zähler1 (){
	new countdown(120, 'counter1');
}

function zähler2 (){
	new countdown(2400, 'counter2');
}

function zähler3 (){
	new countdown(120, 'counter3');
}

function zähler4 (){
	new countdown(1200, 'counter4');
}

function zähler5(){
	new countdown(420, 'counter5');
}

function zähler6 (){
	new countdown(350, 'counter6');
}
function zählerx (){
	new countdown(10, 'counterx');
}