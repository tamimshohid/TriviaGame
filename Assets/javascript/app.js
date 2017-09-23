$(document).ready(function() {
	$("button").click(function(){
	$("#start").on("click",timer.start);
	
	$("#start").fadeOut();


var game= {

		questions:{

	first:{
		Q:"Which team won the Super Bowl in 2016?",
	answers:["NY Giants","NE Patriots","Dal Cowboys","Denver Broncos"],
	correctAnswer:1,
			},
	second: {
		Q:"Name the most recent Superbowl winner Quarterback for NY Giants?",
	answers:["Eli Manning","Tom Brady","Jay Cutler","Michael Vick"],
	correctAnswer:1,
			},
	third:{
		Q:"What city is home of Broncos",
	answers:["Dallas","Montana","Denver","Florida"],
	correctAnswer:2,
			},

	fourth:{
	Q:"How many quarters in a football game?",
	answers:["2","4","3","1"],
	correctAnswer:1,
			},
	fifth:{
	Q:"Who led the NFL in rushing yards in 2016? ",
	answers:["Le'veon Bell","Ezekiel Elliott","David Johnson","Demarco Murray"],
	correctAnswer:1,
		},
	},

	time:60,
	correct:0,
	Wrong:0,
	questionsArray:[],
	numQuestions:0,
	userguess:0,

	displayTimer: function(timer){
		$("timer").html("Time Left"+ timer + "seconds");
	},
	startTimer: function(){
		game.timer= 60;
		game.displayTimer(game.timer);
		game.timer.interval= setInterval(function(){game.decrementTimer();},1000);
	},

	stopTimer: function(){
		clearInterval(game.interval)
	},

	decrementTimer: function(){
		game.timer--;
		game.displayTimer(game.timer);

		if (game.timer===0){
			handleTimeout();
		
	}
},




timeConverter: function(t){
        var seconds= Math.floor(t/1000);
        
        if(seconds<=0){
        	
       alert("times up")
        }
    },
}
});
       
    

});
