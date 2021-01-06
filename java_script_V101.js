// ----------------------------------------------
// Stand 28.12.2020 version 1 (veröffentlicht)
// script für QuickCheck Fragebogen
// statische App

// ### INITIALIZATION 
// ----------------------------------------------
// ### VARIABLES
//-----------------------------------------------
// User variables
var antwort=[]
var sum=[]
var sum_max=[]
var ergebnis=[]
// Bewertungsmatrix
bewertung=[
	[2,2,0,0,3,3,0,1,1,3,1,0,2,3,3,0,3,0],
	[2,1,2,3,3,3,1,3,3,1,3,0,3,3,3,3,1,3],
	[1,1,2,3,0,0,1,3,2,1,2,2,2,3,1,0,0,3],
    [2,2,1,0,3,3,3,2,1,2,2,2,3,1,3,2,3,2],
    [3,3,1,2,2,0,1,2,1,1,2,2,2,2,0,0,1,3],
    [2,3,1,2,2,1,2,1,2,3,2,1,2,2,1,1,2,2],
    [1,2,2,1,2,2,1,1,3,1,3,2,3,3,2,1,1,2],
	[2,2,0,0,2,0,2,3,0,1,2,1,3,1,2,0,2,2],
	[2,2,3,1,0,1,1,1,3,0,2,2,2,2,1,0,2,3],
	[2,2,0,0,3,3,0,3,0,0,2,1,1,0,2,2,0,1],
	[0,0,0,0,2,0,2,1,0,2,2,2,2,2,1,0,0,1],
	[0,0,0,0,2,2,0,3,0,0,2,0,3,0,2,1,0,2],
	[0,0,3,3,0,2,3,3,2,2,1,3,0,2,0,0,3,1],
	[0,0,3,1,1,2,2,0,2,3,1,3,1,1,0,0,3,1]
   ];   
kriterien=["Augment Reality","Virtual Reality","Bewertungsportale","Blogs", "Chattools","Digitale Bezahlsysteme",
"Emails","externe E-Marketplace","Foren","Instant Messenger","Mobile Apps","Newsletter (Email)","Eigener Online-Shop",
"Social Media","Sprachassistenten","Track and Trace (Sendungsverfolgung)","Videokonferenzen","Webseite"]
// ----------------------------------------------
// ### FUNCTIONS 
// ----------------------------------------------

function initialize_page() { 
	// Initialize buttons
	// button1: Fragebogen zurücksetzten -> mode="default"
	// button2: Fragebogen auswerten -> mode="check" -> mode="asses"
	//document.getElementById('check').innerText="starten"
	//document.getElementById('F1A').checked=true

	document.getElementById("check").value="initialize"
	document.getElementById("F1A").checked=false
	document.getElementById("F1B").checked=true
	document.getElementById("F1C").checked=false
	document.getElementById("F1D").checked=false
	document.getElementById("F2A").checked=true
	document.getElementById("F2B").checked=false
	document.getElementById("F2C").checked=false
	document.getElementById("F2D").checked=false
	document.getElementById("F3A").checked=true
	document.getElementById("F3B").checked=false
	document.getElementById("F3C").checked=false
	document.getElementById("F3D").checked=false
	document.getElementById("F4A").checked=false
	document.getElementById("F4B").checked=false
	document.getElementById("F4C").checked=true
	document.getElementById("F4D").checked=false
	document.getElementById("F5A").checked=false
	document.getElementById("F5B").checked=false
	document.getElementById("F5C").checked=false
	document.getElementById("F5D").checked=true
	document.getElementById("F6A").checked=false
	document.getElementById("F6B").checked=false
	document.getElementById("F6C").checked=true
	document.getElementById("F6D").checked=false
	document.getElementById("F7A").checked=false
	document.getElementById("F7B").checked=true
	document.getElementById("F7C").checked=false
	document.getElementById("F7D").checked=false
	document.getElementById("F8A").checked=true
	document.getElementById("F8B").checked=false
	document.getElementById("F8C").checked=false
	document.getElementById("F8D").checked=false
	document.getElementById("F9A").checked=false
	document.getElementById("F9B").checked=false
	document.getElementById("F9C").checked=true
	document.getElementById("F9D").checked=false
	document.getElementById("F10A").checked=false
	document.getElementById("F10B").checked=true
	document.getElementById("F10C").checked=false
	document.getElementById("F10D").checked=false
	document.getElementById("F11A").checked=true
	document.getElementById("F11B").checked=false
	document.getElementById("F11C").checked=false
	document.getElementById("F11D").checked=false
	document.getElementById("F12A").checked=true
	document.getElementById("F12B").checked=false
	document.getElementById("F12C").checked=false
	document.getElementById("F12D").checked=false
	document.getElementById("F13A").checked=false
	document.getElementById("F13B").checked=false
	document.getElementById("F13C").checked=true
	document.getElementById("F13D").checked=false
	document.getElementById("F14A").checked=false
	document.getElementById("F14B").checked=false
	document.getElementById("F14C").checked=true
	document.getElementById("F14D").checked=false		
}

// Initialize buttons
//$('#button2').html("  Next Question  ")
// $('#button2').on("click", function() {
function function_button2() {
	document.getElementById("check").value="initialize"
	document.getElementById("F1A").checked=false
	document.getElementById("F1B").checked=false
	document.getElementById("F1C").checked=false
	document.getElementById("F1D").checked=false
	document.getElementById("F2A").checked=false
	document.getElementById("F2B").checked=false
	document.getElementById("F2C").checked=false
	document.getElementById("F2D").checked=false
	document.getElementById("F3A").checked=false
	document.getElementById("F3B").checked=false
	document.getElementById("F3C").checked=false
	document.getElementById("F3D").checked=false
	document.getElementById("F4A").checked=false
	document.getElementById("F4B").checked=false
	document.getElementById("F4C").checked=false
	document.getElementById("F4D").checked=false
	document.getElementById("F5A").checked=false
	document.getElementById("F5B").checked=false
	document.getElementById("F5C").checked=false
	document.getElementById("F5D").checked=false
	document.getElementById("F6A").checked=false
	document.getElementById("F6B").checked=false
	document.getElementById("F6C").checked=false
	document.getElementById("F6D").checked=false
	document.getElementById("F7A").checked=false
	document.getElementById("F7B").checked=false
	document.getElementById("F7C").checked=false
	document.getElementById("F7D").checked=false
	document.getElementById("F8A").checked=false
	document.getElementById("F8B").checked=false
	document.getElementById("F8C").checked=false
	document.getElementById("F8D").checked=false
	document.getElementById("F9A").checked=false
	document.getElementById("F9B").checked=false
	document.getElementById("F9C").checked=false
	document.getElementById("F9D").checked=false
	document.getElementById("F10A").checked=false
	document.getElementById("F10B").checked=false
	document.getElementById("F10C").checked=false
	document.getElementById("F10D").checked=false
	document.getElementById("F11A").checked=false
	document.getElementById("F11B").checked=false
	document.getElementById("F11C").checked=false
	document.getElementById("F11D").checked=false
	document.getElementById("F12A").checked=false
	document.getElementById("F12B").checked=false
	document.getElementById("F12C").checked=false
	document.getElementById("F12D").checked=false
	document.getElementById("F13A").checked=false
	document.getElementById("F13B").checked=false
	document.getElementById("F13C").checked=false
	document.getElementById("F13D").checked=false
	document.getElementById("F14A").checked=false
	document.getElementById("F14B").checked=false
	document.getElementById("F14C").checked=false
    document.getElementById("F14D").checked=false
    // set default color
    document.getElementById("Q1").style.backgroundColor="floralwhite"
    document.getElementById("Q2").style.backgroundColor="floralwhite"
    document.getElementById("Q3").style.backgroundColor="floralwhite"
    document.getElementById("Q4").style.backgroundColor="floralwhite"
    document.getElementById("Q5").style.backgroundColor="floralwhite"
    document.getElementById("Q6").style.backgroundColor="floralwhite"
    document.getElementById("Q7").style.backgroundColor="floralwhite"
    document.getElementById("Q8").style.backgroundColor="floralwhite"
    document.getElementById("Q9").style.backgroundColor="floralwhite"
    document.getElementById("Q10").style.backgroundColor="floralwhite"
    document.getElementById("Q11").style.backgroundColor="floralwhite"
    document.getElementById("Q12").style.backgroundColor="floralwhite"
    document.getElementById("Q13").style.backgroundColor="floralwhite"
    document.getElementById("Q14").style.backgroundColor="floralwhite"		
}

// Initialize buttons
//$('#button1').html("  Next Question  ")
//$('#button1').on("click", function() {
function function_button1() {

	document.getElementById('check').value="Check_answer"
	for (var i = 1; i <= 14; i++){
			antwort[i]=1
    }
    // set default color
    document.getElementById("Q1").style.backgroundColor="floralwhite"
    document.getElementById("Q2").style.backgroundColor="floralwhite"
    document.getElementById("Q3").style.backgroundColor="floralwhite"
    document.getElementById("Q4").style.backgroundColor="floralwhite"
    document.getElementById("Q5").style.backgroundColor="floralwhite"
    document.getElementById("Q6").style.backgroundColor="floralwhite"
    document.getElementById("Q7").style.backgroundColor="floralwhite"
    document.getElementById("Q8").style.backgroundColor="floralwhite"
    document.getElementById("Q9").style.backgroundColor="floralwhite"
    document.getElementById("Q10").style.backgroundColor="floralwhite"
    document.getElementById("Q11").style.backgroundColor="floralwhite"
    document.getElementById("Q12").style.backgroundColor="floralwhite"
    document.getElementById("Q13").style.backgroundColor="floralwhite"
    document.getElementById("Q14").style.backgroundColor="floralwhite"

	// test ob alle Fragen beantwortet
	
	if (document.getElementsByName("F1")[0].checked==false && document.getElementsByName("F1")[1].checked==false && document.getElementsByName("F1")[2].checked==false && document.getElementsByName("F1")[3].checked==false) {
        antwort[1]=0
        document.getElementById("Q1").style.backgroundColor="lightpink"
    }
	
    if (document.getElementsByName("F2")[0].checked==false && document.getElementsByName("F2")[1].checked==false && document.getElementsByName("F2")[2].checked==false && document.getElementsByName("F2")[3].checked==false) {
        antwort[2]=0
        document.getElementById("Q2").style.backgroundColor="lightpink"        
    }

    if (document.getElementsByName("F3")[0].checked==false && document.getElementsByName("F3")[1].checked==false && document.getElementsByName("F3")[2].checked==false && document.getElementsByName("F3")[3].checked==false) {
        antwort[3]=0
        document.getElementById("Q3").style.backgroundColor="lightpink" 
    }

    if (document.getElementsByName("F4")[0].checked==false && document.getElementsByName("F4")[1].checked==false && document.getElementsByName("F4")[2].checked==false && document.getElementsByName("F4")[3].checked==false) {
        antwort[4]=0
        document.getElementById("Q4").style.backgroundColor="lightpink" 
    }

    if (document.getElementsByName("F5")[0].checked==false && document.getElementsByName("F5")[1].checked==false && document.getElementsByName("F5")[2].checked==false && document.getElementsByName("F5")[3].checked==false) {
        antwort[5]=0
        document.getElementById("Q5").style.backgroundColor="lightpink" 
    }

    if (document.getElementsByName("F6")[0].checked==false && document.getElementsByName("F6")[1].checked==false && document.getElementsByName("F6")[2].checked==false && document.getElementsByName("F6")[3].checked==false) {
        antwort[6]=0
        document.getElementById("Q6").style.backgroundColor="lightpink" 
    }
 
    if (document.getElementsByName("F7")[0].checked==false && document.getElementsByName("F7")[1].checked==false && document.getElementsByName("F7")[2].checked==false && document.getElementsByName("F7")[3].checked==false) {
        antwort[7]=0
        document.getElementById("Q7").style.backgroundColor="lightpink" 
    }
	
    if (document.getElementsByName("F8")[0].checked==false && document.getElementsByName("F8")[1].checked==false && document.getElementsByName("F8")[2].checked==false && document.getElementsByName("F8")[3].checked==false) {
        antwort[8]=0
        document.getElementById("Q8").style.backgroundColor="lightpink" 
    }
	
    if (document.getElementsByName("F9")[0].checked==false && document.getElementsByName("F9")[1].checked==false && document.getElementsByName("F9")[2].checked==false && document.getElementsByName("F9")[3].checked==false) {
        antwort[9]=0
        document.getElementById("Q9").style.backgroundColor="lightpink" 
    }
	
    if (document.getElementsByName("F10")[0].checked==false && document.getElementsByName("F10")[1].checked==false && document.getElementsByName("F10")[2].checked==false && document.getElementsByName("F10")[3].checked==false) {
        antwort[10]=0
        document.getElementById("Q10").style.backgroundColor="lightpink" 
    }
	
    if (document.getElementsByName("F11")[0].checked==false && document.getElementsByName("F11")[1].checked==false && document.getElementsByName("F11")[2].checked==false && document.getElementsByName("F11")[3].checked==false) {
        antwort[11]=0
        document.getElementById("Q11").style.backgroundColor="lightpink" 
    }

    if (document.getElementsByName("F12")[0].checked==false && document.getElementsByName("F12")[1].checked==false && document.getElementsByName("F12")[2].checked==false && document.getElementsByName("F12")[3].checked==false) {
        antwort[12]=0
        document.getElementById("Q12").style.backgroundColor="lightpink" 
    }

    if (document.getElementsByName("F13")[0].checked==false && document.getElementsByName("F13")[1].checked==false && document.getElementsByName("F13")[2].checked==false && document.getElementsByName("F13")[3].checked==false) {
        antwort[13]=0
        document.getElementById("Q13").style.backgroundColor="lightpink" 
    }

    if (document.getElementsByName("F14")[0].checked==false && document.getElementsByName("F14")[1].checked==false && document.getElementsByName("F14")[2].checked==false && document.getElementsByName("F14")[3].checked==false) {
        antwort[14]=0
        document.getElementById("Q14").style.backgroundColor="lightpink" 
    }
			// anzeige der fehlenden Fragen
	var j=0
	check_string=""
	for (var i = 1; i <= 14; i++){
		if (antwort[i]==0){
			check_string=check_string + antwort[i]
			j=j+1
		}
	}
	if (j>0){
		document.getElementById('check').value="Bitte fehlende " + j + " Fragen beantworten"
		}
	else{
        document.getElementById('check').value="alle Fragen ok " + kriterien[2]
		// identifikation der Antwort
		for (i=0;i<4;i++){
			if (document.getElementsByName("F1")[i].checked==true) {
				antwort[1]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F2")[i].checked==true) {
				antwort[2]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F3")[i].checked==true) {
				antwort[3]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F4")[i].checked==true) {
				antwort[4]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F5")[i].checked==true) {
				antwort[5]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F6")[i].checked==true) {
				antwort[6]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F7")[i].checked==true) {
				antwort[7]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F8")[i].checked==true) {
				antwort[8]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F9")[i].checked==true) {
				antwort[9]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F10")[i].checked==true) {
				antwort[10]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F11")[i].checked==true) {
				antwort[11]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F12")[i].checked==true) {
				antwort[12]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F13")[i].checked==true) {
				antwort[13]=i}
			}
		for (i=0;i<4;i++){
			if (document.getElementsByName("F14")[i].checked==true) {
				antwort[14]=i}
			}
		for (i=1;i<15;i++){
				if (antwort[i]==0) {antwort[i]=6}
				if (antwort[i]==1) {antwort[i]=4}
				if (antwort[i]==2) {antwort[i]=2}
				if (antwort[i]==3) {antwort[i]=0}
			}
		for (i=0;i<18;i++){
			sum[i]=0
			sum_max[i]=0
			for (ij=1;ij<15;ij++){
				sum[i]=sum[i]+antwort[ij]*bewertung[ij-1][i]
				sum_max[i]=sum_max[i]+6*bewertung[ij-1][i]}
		}

		console.log(" antwort: ",antwort, "sum", sum," sum_max ", sum_max)

		// Bestimmung des %-Erfüllungsgrades
		for (i=0;i<18;i++){
			ergebnis[i]=sum[i]/sum_max[i]
		}	
		// Sortierung der Rangfolge (Größe) nach
		ergebnis.sort(function(a,b){
			return a[0]-b[0]
        })
		console.log("ergebnis ", ergebnis)
		for (i=1;i<18;i++){
			feld="Rang"+i
			document.getElementById(feld).value=i
			feld="Schnitt"+i
			document.getElementById(feld).value=kriterien[i]
			feld="Wert"+i
			document.getElementById(feld).value=sum[i] + "% der möglichen Punkte"
		}

	}
}


// ----------------------------------------
// ### EXECUTE 
// ----------------------------------------
initialize_page()
// ---------------------------------------