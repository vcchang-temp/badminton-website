/* 

	This file contains the "class"/object defintions for the badminton places; 
	functionality for filtering the badminton places

TODO's

DONE 1. 	Finish creating badminton-place data variables: Ace Badminton, Badminton Vancouver and comm centres remaining 
	*Note: for second project iteration, data will be placed in database
DONE 2. 	Make two functions in time "class" that determines if given time 
	isAfter (session end-time) or isBefore (session start-time)
DONE 3. 	Make a "class" for storing user input (from search section)
4. 	Make function(s) that will find the user places to play with user input object parameter
	a. Make function that will filter by drop-in
	b. Make function that will filter by court rental
	c. Make function that will filter by start time
	d. Make function that will filter by racket/shoe rental
	e. Make function that will filter by community centre
	*Note: for second project iteration, will add Vancouver and potentially more cities in the Lower Mainland

eg: 

// let dropInRProSessions = richmondProSessions.filter(
// 	function(session) {
// 		return session.isDropIn;
// 	});

// function findPlacesToPlay(userInput) {
// 	//...
// }

// function filterByStartTime(time) {

// }

*/


/* FUNCTION DEFINITIONS */

// time constructor
function Time (numHours) {

	this.numHours = numHours;

}

// difference btw creating a global function vs. a function attached to a prototype?

// determines if this time is before user-input time; if so and if isAfter is true, session can be displayed
Time.prototype.isBefore = function (userTime) {

	return this.numHours <= userTime.numHours;

}

// determines if this time is after user-input time; if so and if isBefore is true, session can be displayed
Time.prototype.isAfter = function (userTime) {

	return this.numHours > userTime.numHours;

}

// Time.prototype.convertTo24HrClockTime = function (amPm) {

// 	if (amPm == "pm" && this.numHours < 1200) {

// 		return this.numHours += 1200;

// 	} 

// 	if (amPm == "am" && this.numHours == 1200) {

// 		return this.numHours += 1200;

// 	}

// }

function TimePeriod (startTime, endTime) {

	this.startTime = startTime;
	this.endTime = endTime;

}


var DayOfWeekEnum = {

	MON: 0,
	TUE: 1,
	WED: 2,
	THU: 3,
	FRI: 4,
	SAT: 5,
	SUN: 6,

}


function Session (dayOfWeekEnum, timePeriod, isDropIn, cost) {

	this.dayOfWeekEnum = dayOfWeekEnum;
	this.timePeriod = timePeriod;
	this.isDropIn = isDropIn;
	this.cost = cost;

}


function BadmintonPlace (name, address, hasShoeAndRacketRental, 
	isCommCentre, sessions, websiteURL) {

	this.name = name;
	this.address = address;
	this.hasShoeAndRacketRental = hasShoeAndRacketRental;
	this.isCommCentre = isCommCentre;
	this.sessions = sessions;
	this.websiteURL = websiteURL;

}


/* 	user input class: stores the user's selections of day, time, am or pm, location, and whether 
	they want drop-in and/or court rental and wants to include community centres in their search */
function UserInput (day, time, amPm, location, wantsDropIn, wantsCourtRental, wantsRacketShoeRental, includeCommCentres) {

	this.day = day;
	this.time = time;
	this.amPm = amPm;
	this.location = location;
	this.wantsDropIn = wantsDropIn;
	this.wantsCourtRental = wantsCourtRental;
	this.wantsRacketShoeRental = wantsRacketShoeRental;
	this.includeCommCentres = includeCommCentres;

}



/* 	BADMINTON PLACE DATA 
	
	Note: to be put in a database

*/

// Richmond Pro drop-in

// Mon
var monMorningStartTimeDI_RP = new Time (900); //9am
var monMorningEndTimeDI_RP = new Time (1300); //1pm
var monMorningTimePeriodDI_RP = new TimePeriod (monMorningStartTimeDI_RP, monMorningEndTimeDI_RP);
var monMorningSessionDI_RP = new Session (DayOfWeekEnum.MON, monMorningTimePeriodDI_RP, true, 6);


var monAfternoonStartTimeDI_RP = new Time (1300); //1pm
var monAfternoonEndTimeDI_RP = new Time (1800); //6pm
var monAfternoonTimePeriodDI_RP = new TimePeriod (monAfternoonStartTimeDI_RP, monAfternoonEndTimeDI_RP);
var monAfternoonSessionDI_RP = new Session (DayOfWeekEnum.MON, monAfternoonTimePeriodDI_RP, true, 6);

// Tue
var tueMorningStartTimeDI_RP = new Time (900); //9am
var tueMorningEndTimeDI_RP = new Time (1300); //1pm
var tueMorningTimePeriodDI_RP = new TimePeriod (tueMorningStartTimeDI_RP, tueMorningEndTimeDI_RP);
var tueMorningSessionDI_RP = new Session (DayOfWeekEnum.TUE, tueMorningTimePeriodDI_RP, true, 6);

var tueAfternoonStartTimeDI_RP = new Time (1300); //1pm
var tueAfternoonEndTimeDI_RP = new Time (1800); //6pm
var tueAfternoonTimePeriodDI_RP = new TimePeriod (tueAfternoonStartTimeDI_RP, tueAfternoonEndTimeDI_RP);
var tueAfternoonSessionDI_RP = new Session (DayOfWeekEnum.TUE, tueAfternoonTimePeriodDI_RP, true, 6);

// Wed
var wedMorningStartTimeDI_RP = new Time (900); //9am
var wedMorningEndTimeDI_RP = new Time (1300); //1pm
var wedMorningTimePeriodDI_RP = new TimePeriod (wedMorningStartTimeDI_RP, wedMorningEndTimeDI_RP);
var wedMorningSessionDI_RP = new Session (DayOfWeekEnum.WED, wedMorningTimePeriodDI_RP, true, 6);

var wedAfternoonStartTimeDI_RP = new Time (1300); //1pm
var wedAfternoonEndTimeDI_RP = new Time (1800); //6pm
var wedAfternoonTimePeriodDI_RP = new TimePeriod (wedAfternoonStartTimeDI_RP, wedAfternoonEndTimeDI_RP);
var wedAfternoonSessionDI_RP = new Session (DayOfWeekEnum.WED, wedAfternoonTimePeriodDI_RP, true, 6);

// Thu
var thuMorningStartTimeDI_RP = new Time (900); //9am
var thuMorningEndTimeDI_RP = new Time (1300); //1pm
var thuMorningTimePeriodDI_RP = new TimePeriod (wedMorningStartTimeDI_RP, wedMorningEndTimeDI_RP);
var thuMorningSessionDI_RP = new Session (DayOfWeekEnum.WED, wedMorningTimePeriodDI_RP, true, 6);

var thuAfternoonStartTimeDI_RP = new Time (1300); //1pm
var thuAfternoonEndTimeDI_RP = new Time (1800); //6pm
var thuAfternoonTimePeriodDI_RP = new TimePeriod (thuAfternoonStartTimeDI_RP, thuAfternoonEndTimeDI_RP);
var thuAfternoonSessionDI_RP = new Session (DayOfWeekEnum.THU, thuAfternoonTimePeriodDI_RP, true, 6);

// Fri_RP
var friMorningStartTimeDI_RP = new Time (900); //9am
var friMorningEndTimeDI_RP = new Time (1500); //3pm
var friMorningTimePeriodDI_RP = new TimePeriod (friMorningStartTimeDI_RP, friMorningEndTimeDI_RP);
var friMorningSessionDI_RP = new Session (DayOfWeekEnum.FRI, friMorningTimePeriodDI_RP, true, 6);

var friAfternoonStartTimeDI_RP = new Time (1500); //3pm
var friAfternoonEndTimeDI_RP = new Time (1800); //6pm
var friAfternoonTimePeriodDI_RP = new TimePeriod (friAfternoonStartTimeDI_RP, friAfternoonEndTimeDI_RP);
var friAfternoonSessionDI_RP = new Session (DayOfWeekEnum.FRI, friAfternoonTimePeriodDI_RP, true, 6);

var friNightStartTimeDI_RP = new Time (1000); //10pm
var friNightEndTimeDI_RP = new Time (100); //1amDI
var friNightTimePeriodDI_RP = new TimePeriod (friNightStartTimeDI_RP, friNightEndTimeDI_RP);
var friNightSessionDI_RP = new Session (DayOfWeekEnum.FRI, friNightTimePeriodDI_RP, true, 7);

// Sat
var satNightStartTimeDI_RP = new Time (1000); //10pm
var satNightEndTimeDI_RP = new Time (100); //1am
var satNightTimePeriodDI_RP = new TimePeriod (satNightStartTimeDI_RP, satNightEndTimeDI_RP);
var satNightSessionDI_RP = new Session (DayOfWeekEnum.SAT, satNightTimePeriodDI_RP, true, 7);

// Sun
var sunNightStartTimeDI_RP = new Time (1900); //7pm
var sunNightEndTimeDI_RP = new Time (2300); //11pm
var sunNightTimePeriodDI_RP = new TimePeriod (sunNightStartTimeDI_RP, sunNightEndTimeDI_RP);
var sunNightSessionDI_RP = new Session (DayOfWeekEnum.SUN, sunNightTimePeriodDI_RP, true, 6);


// Richmond Pro court rental

// Mon
var monStartTime_RP = new Time (900); //9am
var monEndTime_RP = new Time (2300); //11pm
var monTimePeriod_RP = new TimePeriod (monStartTime_RP, monEndTime_RP);
var monSession_RP = new Session (DayOfWeekEnum.MON, monTimePeriod_RP, false, 23);

// Tue
var tueStartTime_RP = new Time (900); //9am
var tueEndTime_RP = new Time (2300); //11pm
var tueTimePeriod_RP = new TimePeriod (tueStartTime_RP, tueEndTime_RP);
var tueSession_RP = new Session (DayOfWeekEnum.TUE, tueTimePeriod_RP, false, 23);

// Wed
var wedStartTime_RP = new Time (900); //9am
var wedEndTime_RP = new Time (2300); //11pm
var wedTimePeriod_RP = new TimePeriod (wedStartTime_RP, wedEndTime_RP);
var wedSession_RP = new Session (DayOfWeekEnum.WED, wedTimePeriod_RP, false, 23);

// Thu
var thuStartTime_RP = new Time (900); //9am
var thuEndTime_RP = new Time (2300); //11pm
var thuTimePeriod_RP = new TimePeriod (thuStartTime_RP, thuEndTime_RP);
var thuSession_RP = new Session (DayOfWeekEnum.THU, thuTimePeriod_RP, false, 23);

// Fri
var friStartTime_RP = new Time (900); //9am
var friEndTime_RP = new Time (2400); //12am
var friTimePeriod_RP = new TimePeriod (friStartTime_RP, friEndTime_RP);
var friSession_RP = new Session (DayOfWeekEnum.FRI, friTimePeriod_RP, false, 23);

// Sat
var satStartTime_RP = new Time (900); //9am
var satEndTime_RP = new Time (2400); //12am
var satTimePeriod_RP = new TimePeriod (satStartTime_RP, satEndTime_RP);
var satSession_RP = new Session (DayOfWeekEnum.SAT, satTimePeriod_RP, false, 23);

// Sun
var sunStartTime_RP = new Time (900); //9am
var sunEndTime_RP = new Time (2300); //11pm
var sunTimePeriod_RP = new TimePeriod (sunStartTime_RP, sunEndTime_RP);
var sunSession_RP = new Session (DayOfWeekEnum.SUN, sunTimePeriod_RP, false, 23);


var sessions_RP = [monMorningSessionDI_RP, monAfternoonSessionDI_RP, 
								 tueMorningSessionDI_RP, tueAfternoonSessionDI_RP, 
								 wedMorningSessionDI_RP, wedAfternoonSessionDI_RP, 
								 thuMorningSessionDI_RP, thuAfternoonSessionDI_RP, 
								 friMorningSessionDI_RP, friAfternoonSessionDI_RP, friNightSessionDI_RP, 
								 satNightSessionDI_RP, 
								 sunNightSessionDI_RP, 
								 monSession_RP, tueSession_RP, wedSession_RP, thuSession_RP,
								 friSession_RP, satSession_RP, sunSession_RP];


var richmondPro = new BadmintonPlace("Richmond Pro Badminton Centre", "#130-5800 Minoru Blvd., Richmond, BC", true, false, 
	sessions_RP, "https://rprobadminton.wordpress.com/");

console.log(richmondPro);



// ClearOne drop-in

// Mon
var monStartTimeDI_CO = new Time (900); //9am
var monEndTimeDI_CO = new Time (1600); //4pm
var monTimePeriodDI_CO = new TimePeriod (monStartTimeDI_CO, monEndTimeDI_CO);
var monSessionDI_CO = new Session (DayOfWeekEnum.MON, monTimePeriodDI_CO, true, 5);

// Tue
var tueStartTimeDI_CO = new Time (900); //9am
var tueEndTimeDI_CO = new Time (1600); //4pm
var tueTimePeriodDI_CO = new TimePeriod (tueStartTimeDI_CO, tueEndTimeDI_CO);
var tueSessionDI_CO = new Session (DayOfWeekEnum.TUE, tueTimePeriodDI_CO, true, 5);

// Wed
var wedStartTimeDI_CO = new Time (900); //9am
var wedEndTimeDI_CO = new Time (1600); //4pm
var wedTimePeriodDI_CO = new TimePeriod (wedStartTimeDI_CO, wedEndTimeDI_CO);
var wedSessionDI_CO = new Session (DayOfWeekEnum.WED, wedTimePeriodDI_CO, true, 5);

// Thu
var thuStartTimeDI_CO = new Time (900); //9am
var thuEndTimeDI_CO = new Time (1600); //4pm
var thuTimePeriodDI_CO = new TimePeriod (thuStartTimeDI_CO, thuEndTimeDI_CO);
var thuSessionDI_CO = new Session (DayOfWeekEnum.THU, thuTimePeriodDI_CO, true, 5);

// Fri
var friStartTimeDI_CO = new Time (900); //9am
var friEndTimeDI_CO = new Time (1600); //4pm
var friTimePeriodDI_CO = new TimePeriod (friStartTimeDI_CO, friEndTimeDI_CO);
var friSessionDI_CO = new Session (DayOfWeekEnum.FRI, friTimePeriodDI_CO, true, 5);

// Sat
var satStartTimeDI_CO = new Time (2000); //8pm
var satEndTimeDI_CO = new Time (100); //1am
var satTimePeriodDI_CO = new TimePeriod (satStartTimeDI_CO, satEndTimeDI_CO);
var satSessionDI_CO = new Session (DayOfWeekEnum.SAT, satTimePeriodDI_CO, true, 5);

// Sun
var sunStartTimeDI_CO = new Time (900); //9am
var sunEndTimeDI_CO = new Time (1300); //1pm
var sunTimePeriodDI_CO = new TimePeriod (sunStartTimeDI_CO, sunEndTimeDI_CO);
var sunSessionDI_CO = new Session (DayOfWeekEnum.SUN, sunTimePeriodDI_CO, true, 5);


// ClearOne court rental

// Mon
var monStartTime_CO = new Time (900); //9am
var monEndTime_CO = new Time (2300); //11pm
var monTimePeriod_CO = new TimePeriod (monStartTime_CO, monEndTime_CO);
var monSession_CO = new Session (DayOfWeekEnum.MON, monTimePeriod_CO, false, 20);

// Tue
var tueStartTime_CO = new Time (900); //9am
var tueEndTime_CO = new Time (2300); //11pm
var tueTimePeriod_CO = new TimePeriod (tueStartTime_CO, tueEndTime_CO);
var tueSession_CO = new Session (DayOfWeekEnum.TUE, tueTimePeriod_CO, false, 20);

// Wed
var wedStartTime_CO = new Time (900); //9am
var wedEndTime_CO = new Time (2300); //11pm
var wedTimePeriod_CO = new TimePeriod (wedStartTime_CO, wedEndTime_CO);
var wedSession_CO = new Session (DayOfWeekEnum.WED, wedTimePeriod_CO, false, 20);

// Thu
var thuStartTime_CO = new Time (900); //9am
var thuEndTime_CO = new Time (2300); //11pm
var thuTimePeriod_CO = new TimePeriod (thuStartTime_CO, thuEndTime_CO);
var thuSession_CO = new Session (DayOfWeekEnum.THU, thuTimePeriod_CO, false, 20);

// Fri
var friStartTime_CO = new Time (900); //9am
var friEndTime_CO = new Time (2400); //12am
var friTimePeriod_CO = new TimePeriod (friStartTime_CO, friEndTime_CO);
var friSession_CO = new Session (DayOfWeekEnum.FRI, friTimePeriod_CO, false, 20);

// Sat
var satStartTime_CO = new Time (900); //9am
var satEndTime_CO = new Time (100); //1am
var satTimePeriod_CO = new TimePeriod (satStartTime_CO, satEndTime_CO);
var satSession_CO = new Session (DayOfWeekEnum.SAT, satTimePeriod_CO, false, 20);

// Sun
var sunStartTime_CO = new Time (900); //9am
var sunEndTime_CO = new Time (2200); //10pm
var sunTimePeriod_CO = new TimePeriod (sunStartTime_CO, sunEndTime_CO);
var sunSession_CO = new Session (DayOfWeekEnum.SUN, sunTimePeriod_CO, false, 20);


var sessions_CO = [monSessionDI_CO, tueSessionDI_CO, wedSessionDI_CO,
						thuSessionDI_CO, friSessionDI_CO, satSessionDI_CO,
						sunSessionDI_CO, monSession_CO, tueSession_CO,
						wedSession_CO, thuSession_CO, friSession_CO,
						satSession_CO, sunSession_CO];


var clearOne = new BadmintonPlace("ClearOne Badminton Centre", "#100 – 4351 No.3 Rd., Richmond, BC", true, false, 
	sessions_CO, "https://www.clearonebadminton.com/");

console.log(clearOne);



// Drive drop-in

// Mon
var monMorningStartTimeDI_DR = new Time (900); //9am
var monMorningEndTimeDI_DR = new Time (1300); //1pm
var monMorningTimePeriodDI_DR = new TimePeriod (monMorningStartTimeDI_DR, monMorningEndTimeDI_DR);
var monMorningSessionDI_DR = new Session (DayOfWeekEnum.MON, monMorningTimePeriodDI_DR, true, 5);


var monAfternoonStartTimeDI_DR = new Time (1300); //1pm
var monAfternoonEndTimeDI_DR = new Time (1800); //6pm
var monAfternoonTimePeriodDI_DR = new TimePeriod (monAfternoonStartTimeDI_DR, monAfternoonEndTimeDI_DR);
var monAfternoonSessionDI_DR = new Session (DayOfWeekEnum.MON, monAfternoonTimePeriodDI_DR, true, 5);

var monNightStartTimeDI_DR = new Time (2200); //10pm
var monNightEndTimeDI_DR = new Time (2430); //1230am
var monNightTimePeriodDI_DR = new TimePeriod (monNightStartTimeDI_DR, monMorningEndTimeDI_DR);
var monNightSessionDI_DR = new Session (DayOfWeekEnum.MON, monNightTimePeriodDI_DR, true, 5);


// Tue
var tueMorningStartTimeDI_DR = new Time (900); //9am
var tueMorningEndTimeDI_DR = new Time (1300); //1pm
var tueMorningTimePeriodDI_DR = new TimePeriod (tueMorningStartTimeDI_RP, tueMorningEndTimeDI_DR);
var tueMorningSessionDI_DR = new Session (DayOfWeekEnum.TUE, tueMorningTimePeriodDI_DR, true, 5);

var tueAfternoonStartTimeDI_DR = new Time (1300); //1pm
var tueAfternoonEndTimeDI_DR = new Time (1800); //6pm
var tueAfternoonTimePeriodDI_DR = new TimePeriod (tueAfternoonStartTimeDI_DR, tueAfternoonEndTimeDI_DR);
var tueAfternoonSessionDI_DR = new Session (DayOfWeekEnum.TUE, tueAfternoonTimePeriodDI_DR, true, 5);

var tueNightStartTimeDI_DR = new Time (2200); //10pm
var tueNightEndTimeDI_DR = new Time (2430); //1230am
var tueNightTimePeriodDI_DR = new TimePeriod (tueNightStartTimeDI_DR, tueMorningEndTimeDI_DR);
var tueNightSessionDI_DR = new Session (DayOfWeekEnum.TUE, tueNightTimePeriodDI_DR, true, 5);


// Wed
var wedMorningStartTimeDI_DR = new Time (900); //9am
var wedMorningEndTimeDI_DR = new Time (1300); //1pm
var wedMorningTimePeriodDI_DR = new TimePeriod (wedMorningStartTimeDI_DR, wedMorningEndTimeDI_DR);
var wedMorningSessionDI_DR = new Session (DayOfWeekEnum.WED, wedMorningTimePeriodDI_DR, true, 5);

var wedAfternoonStartTimeDI_DR = new Time (1300); //1pm
var wedAfternoonEndTimeDI_DR = new Time (1800); //6pm
var wedAfternoonTimePeriodDI_DR = new TimePeriod (wedAfternoonStartTimeDI_DR, wedAfternoonEndTimeDI_DR);
var wedAfternoonSessionDI_DR = new Session (DayOfWeekEnum.WED, wedAfternoonTimePeriodDI_DR, true, 5);

var wedNightStartTimeDI_DR = new Time (2200); //10pm
var wedNightEndTimeDI_DR = new Time (2430); //1230am
var wedNightTimePeriodDI_DR = new TimePeriod (wedNightStartTimeDI_DR, wedMorningEndTimeDI_DR);
var wedNightSessionDI_DR = new Session (DayOfWeekEnum.WED, wedNightTimePeriodDI_DR, true, 5);


// Thu
var thuMorningStartTimeDI_DR = new Time (900); //9am
var thuMorningEndTimeDI_DR = new Time (1300); //1pm
var thuMorningTimePeriodDI_DR = new TimePeriod (wedMorningStartTimeDI_DR, wedMorningEndTimeDI_DR);
var thuMorningSessionDI_DR = new Session (DayOfWeekEnum.WED, wedMorningTimePeriodDI_DR, true, 5);

var thuAfternoonStartTimeDI_DR = new Time (1300); //1pm
var thuAfternoonEndTimeDI_DR = new Time (1800); //6pm
var thuAfternoonTimePeriodDI_DR = new TimePeriod (thuAfternoonStartTimeDI_DR, thuAfternoonEndTimeDI_DR);
var thuAfternoonSessionDI_DR = new Session (DayOfWeekEnum.THU, thuAfternoonTimePeriodDI_DR, true, 5);

var thuNightStartTimeDI_DR = new Time (2200); //10pm
var thuNightEndTimeDI_DR = new Time (2430); //1230am
var thuNightTimePeriodDI_DR = new TimePeriod (thuNightStartTimeDI_DR, thuMorningEndTimeDI_DR);
var thuNightSessionDI_DR = new Session (DayOfWeekEnum.THU, thuNightTimePeriodDI_DR, true, 5);


// Fri
var friMorningStartTimeDI_DR = new Time (900); //9am
var friMorningEndTimeDI_DR = new Time (1500); //3pm
var friMorningTimePeriodDI_DR = new TimePeriod (friMorningStartTimeDI_DR, friMorningEndTimeDI_DR);
var friMorningSessionDI_DR = new Session (DayOfWeekEnum.FRI, friMorningTimePeriodDI_DR, true, 5);

var friAfternoonStartTimeDI_DR = new Time (1500); //3pm
var friAfternoonEndTimeDI_DR = new Time (1800); //6pm
var friAfternoonTimePeriodDI_DR = new TimePeriod (friAfternoonStartTimeDI_DR, friAfternoonEndTimeDI_DR);
var friAfternoonSessionDI_DR = new Session (DayOfWeekEnum.FRI, friAfternoonTimePeriodDI_DR, true, 5);

var friNightStartTimeDI_DR = new Time (2200); //10pm
var friNightEndTimeDI_DR = new Time (2430); //1230am
var friNightTimePeriodDI_DR = new TimePeriod (friNightStartTimeDI_DR, friNightEndTimeDI_DR);
var friNightSessionDI_DR = new Session (DayOfWeekEnum.FRI, friNightTimePeriodDI_DR, true, 6);

// Sat
var satAfternoonStartTimeDI_DR = new Time (1300); //1pm
var satAfternoonEndTimeDI_DR = new Time (1800); //6pm
var satAfternoonTimePeriodDI_DR = new TimePeriod (satAfternoonStartTimeDI_DR, satAfternoonEndTimeDI_DR);
var satAfternoonSessionDI_DR = new Session (DayOfWeekEnum.SAT, satAfternoonTimePeriodDI_DR, true, 6);

var satNightStartTimeDI_DR = new Time (2000); //8pm
var satNightEndTimeDI_DR = new Time (100); //1am
var satNightTimePeriodDI_DR = new TimePeriod (satNightStartTimeDI_DR, satNightEndTimeDI_DR);
var satNightSessionDI_DR = new Session (DayOfWeekEnum.SAT, satNightTimePeriodDI_DR, true, 5);

// Sun
var sunMorningStartTimeDI_DR = new Time (900); //9am
var sunMorningEndTimeDI_DR = new Time (1500); //3pm
var sunMorningTimePeriodDI_DR = new TimePeriod (sunMorningStartTimeDI_DR, sunMorningEndTimeDI_DR);
var sunMorningSessionDI_DR = new Session (DayOfWeekEnum.SUN, sunMorningTimePeriodDI_DR, true, 5);

var sunAfternoonStartTimeDI_DR = new Time (1200); //12pm
var sunAfternoonEndTimeDI_DR = new Time (1600); //4pm
var sunAfternoonTimePeriodDI_DR = new TimePeriod (sunAfternoonStartTimeDI_DR, sunAfternoonEndTimeDI_DR);
var sunAfternoonSessionDI_DR = new Session (DayOfWeekEnum.SUN, sunAfternoonTimePeriodDI_DR, true, 5);

var sunNightStartTimeDI_DR = new Time (1900); //7pm
var sunNightEndTimeDI_DR = new Time (2300); //11pm
var sunNightTimePeriodDI_DR = new TimePeriod (sunNightStartTimeDI_DR, sunNightEndTimeDI_DR);
var sunNightSessionDI_DR = new Session (DayOfWeekEnum.SUN, sunNightTimePeriodDI_DR, true, 6);


// Drive court rental

// Mon
var monStartTime_DR = new Time (900); //9am
var monEndTime_DR = new Time (2430); //1230am
var monTimePeriod_DR = new TimePeriod (monStartTime_DR, monEndTime_DR);
var monSession_DR = new Session (DayOfWeekEnum.MON, monTimePeriod_DR, false, 22);

// Tue
var tueStartTime_DR = new Time (900); //9am
var tueEndTime_DR = new Time (2430); //1230am
var tueTimePeriod_DR = new TimePeriod (tueStartTime_DR, tueEndTime_DR);
var tueSession_DR = new Session (DayOfWeekEnum.TUE, tueTimePeriod_DR, false, 22);

// Wed
var wedStartTime_DR = new Time (900); //9am
var wedEndTime_DR = new Time (2430); //1230am
var wedTimePeriod_DR = new TimePeriod (wedStartTime_DR, wedEndTime_DR);
var wedSession_DR = new Session (DayOfWeekEnum.WED, wedTimePeriod_DR, false, 22);

// Thu
var thuStartTime_DR = new Time (900); //9am
var thuEndTime_DR = new Time (2430); //1230am
var thuTimePeriod_DR = new TimePeriod (thuStartTime_DR, thuEndTime_DR);
var thuSession_DR = new Session (DayOfWeekEnum.THU, thuTimePeriod_DR, false, 22);

// Fri
var friStartTime_DR = new Time (900); //9am
var friEndTime_DR = new Time (2430); //1230am
var friTimePeriod_DR = new TimePeriod (friStartTime_DR, friEndTime_DR);
var friSession_DR = new Session (DayOfWeekEnum.FRI, friTimePeriod_DR, false, 22);

// Sat
var satStartTime_DR = new Time (1000); //10am
var satEndTime_DR = new Time (100); //100am
var satTimePeriod_DR = new TimePeriod (satStartTime_DR, satEndTime_DR);
var satSession_DR = new Session (DayOfWeekEnum.SAT, satTimePeriod_DR, false, 22);

// Sun
var sunStartTime_DR = new Time (900); //9am
var sunEndTime_DR = new Time (2300); //11pm
var sunTimePeriod_DR = new TimePeriod (sunStartTime_DR, sunEndTime_DR);
var sunSession_DR = new Session (DayOfWeekEnum.SUN, sunTimePeriod_DR, false, 22);


var sessions_DR = [monMorningSessionDI_DR, monAfternoonSessionDI_DR, monNightSessionDI_DR, 
				   tueMorningSessionDI_DR, tueAfternoonSessionDI_DR, tueNightSessionDI_DR,
				   wedMorningSessionDI_DR, wedAfternoonSessionDI_DR, wedNightSessionDI_DR,
				   thuMorningSessionDI_DR, thuAfternoonSessionDI_DR, thuNightSessionDI_DR,
				   friMorningSessionDI_DR, friAfternoonSessionDI_DR, friNightSessionDI_DR, 
				   satAfternoonSessionDI_DR, satNightSessionDI_DR, 
				   sunMorningSessionDI_DR, sunAfternoonSessionDI_DR, sunNightSessionDI_DR, 
				   monSession_DR, tueSession_DR, wedSession_DR, thuSession_DR,
				   friSession_DR, satSession_DR, sunSession_DR];


var drive = new BadmintonPlace("Drive Badminton Centre", "#138-4551 No. 3 Rd., Richmond, BC", true, false, 
	sessions_DR, "http://drivebadminton.ca/");

console.log(drive);



// Stage 18 drop-in

// Mon
var monMorningStartTimeDI_S18 = new Time (900); //9am
var monMorningEndTimeDI_S18 = new Time (1300); //1pm
var monMorningTimePeriodDI_S18 = new TimePeriod (monMorningStartTimeDI_S18, monMorningEndTimeDI_S18);
var monMorningSessionDI_S18 = new Session (DayOfWeekEnum.MON, monMorningTimePeriodDI_S18, true, 5);

var monAfternoonStartTimeDI_S18 = new Time (1400); //2pm
var monAfternoonEndTimeDI_S18 = new Time (1800); //6pm
var monAfternoonTimePeriodDI_S18 = new TimePeriod (monAfternoonStartTimeDI_S18, monAfternoonEndTimeDI_S18);
var monAfternoonSessionDI_S18 = new Session (DayOfWeekEnum.MON, monAfternoonTimePeriodDI_S18, true, 5);

var monNightStartTimeDI_S18 = new Time (1800); //6pm
var monNightEndTimeDI_S18 = new Time (2300); //1100am
var monNightTimePeriodDI_S18 = new TimePeriod (monNightStartTimeDI_S18, monNightEndTimeDI_S18);
var monNightSessionDI_S18 = new Session (DayOfWeekEnum.MON, monNightTimePeriodDI_S18, true, 7);


// Tue
var tueAfternoonStartTimeDI_S18 = new Time (1400); //2pm
var tueAfternoonEndTimeDI_S18 = new Time (1800); //6pm
var tueAfternoonTimePeriodDI_S18 = new TimePeriod (tueAfternoonStartTimeDI_S18, tueAfternoonEndTimeDI_S18);
var tueAfternoonSessionDI_S18 = new Session (DayOfWeekEnum.TUE, tueAfternoonTimePeriodDI_S18, true, 5);


// Wed
var wedMorningStartTimeDI_S18 = new Time (900); //9am
var wedMorningEndTimeDI_S18 = new Time (1300); //1pm
var wedMorningTimePeriodDI_S18 = new TimePeriod (wedMorningStartTimeDI_S18, wedMorningEndTimeDI_S18);
var wedMorningSessionDI_S18 = new Session (DayOfWeekEnum.WED, wedMorningTimePeriodDI_S18, true, 5);

var wedAfternoonStartTimeDI_S18 = new Time (1400); //2pm
var wedAfternoonEndTimeDI_S18 = new Time (1900); //7pm
var wedAfternoonTimePeriodDI_S18 = new TimePeriod (wedAfternoonStartTimeDI_S18, wedAfternoonEndTimeDI_S18);
var wedAfternoonSessionDI_S18 = new Session (DayOfWeekEnum.WED, wedAfternoonTimePeriodDI_S18, true, 5);


// Thu
var thuAfternoonStartTimeDI_S18 = new Time (1300); //1pm
var thuAfternoonEndTimeDI_S18 = new Time (1800); //6pm
var thuAfternoonTimePeriodDI_S18 = new TimePeriod (thuAfternoonStartTimeDI_S18, thuAfternoonEndTimeDI_S18);
var thuAfternoonSessionDI_S18 = new Session (DayOfWeekEnum.THU, thuAfternoonTimePeriodDI_S18, true, 5);


// Fri
var friMorningStartTimeDI_S18 = new Time (900); //9am
var friMorningEndTimeDI_S18 = new Time (1300); //1pm
var friMorningTimePeriodDI_S18 = new TimePeriod (friMorningStartTimeDI_S18, friMorningEndTimeDI_S18);
var friMorningSessionDI_S18 = new Session (DayOfWeekEnum.FRI, friMorningTimePeriodDI_S18, true, 5);

var friAfternoonStartTimeDI_S18 = new Time (1300); //1pm
var friAfternoonEndTimeDI_S18 = new Time (1700); //5pm
var friAfternoonTimePeriodDI_S18 = new TimePeriod (friAfternoonStartTimeDI_S18, friAfternoonEndTimeDI_S18);
var friAfternoonSessionDI_S18 = new Session (DayOfWeekEnum.FRI, friAfternoonTimePeriodDI_S18, true, 5);

var friEarlyNightStartTimeDI_S18 = new Time (1700); //5pm
var friEarlyNightEndTimeDI_S18 = new Time (2100); //9pm
var friEarlyNightTimePeriodDI_S18 = new TimePeriod (friEarlyNightStartTimeDI_S18, friEarlyNightEndTimeDI_S18);
var friEarlyNightSessionDI_S18 = new Session (DayOfWeekEnum.FRI, friEarlyNightTimePeriodDI_S18, true, 6);

var friNightStartTimeDI_S18 = new Time (2100); //9pm
var friNightEndTimeDI_S18 = new Time (100); //1am
var friNightTimePeriodDI_S18 = new TimePeriod (friNightStartTimeDI_S18, friNightEndTimeDI_S18);
var friNightSessionDI_S18 = new Session (DayOfWeekEnum.FRI, friNightTimePeriodDI_S18, true, 6);

// Sat
var satMorningStartTimeDI_S18 = new Time (900); //9am
var satMorningEndTimeDI_S18 = new Time (1300); //1pm
var satMorningTimePeriodDI_S18 = new TimePeriod (satMorningStartTimeDI_S18, satMorningEndTimeDI_S18);
var satMorningSessionDI_S18 = new Session (DayOfWeekEnum.SAT, satMorningTimePeriodDI_S18, true, 6);

var satAfternoonStartTimeDI_S18 = new Time (1300); //1pm
var satAfternoonEndTimeDI_S18 = new Time (1700); //5pm
var satAfternoonTimePeriodDI_S18 = new TimePeriod (satAfternoonStartTimeDI_S18, satAfternoonEndTimeDI_S18);
var satAfternoonSessionDI_S18 = new Session (DayOfWeekEnum.SAT, satAfternoonTimePeriodDI_S18, true, 6);

var satEarlyNightStartTimeDI_S18 = new Time (1700); //5pm
var satEarlyNightEndTimeDI_S18 = new Time (2100); //9pm
var satEarlyNightTimePeriodDI_S18 = new TimePeriod (satEarlyNightStartTimeDI_S18, satEarlyNightEndTimeDI_S18);
var satEarlyNightSessionDI_S18 = new Session (DayOfWeekEnum.SAT, satEarlyNightTimePeriodDI_S18, true, 6);

var satNightStartTimeDI_S18 = new Time (2100); //9pm
var satNightEndTimeDI_S18 = new Time (100); //1am
var satNightTimePeriodDI_S18 = new TimePeriod (satNightStartTimeDI_S18, satNightEndTimeDI_S18);
var satNightSessionDI_S18 = new Session (DayOfWeekEnum.SAT, satNightTimePeriodDI_S18, true, 6);

// Sun
var sunMorningStartTimeDI_S18 = new Time (900); //9am
var sunMorningEndTimeDI_S18 = new Time (1300); //1pm
var sunMorningTimePeriodDI_S18 = new TimePeriod (sunMorningStartTimeDI_S18, sunMorningEndTimeDI_S18);
var sunMorningSessionDI_S18 = new Session (DayOfWeekEnum.SUN, sunMorningTimePeriodDI_S18, true, 6);

var sunAfternoonStartTimeDI_S18 = new Time (1300); //1pm
var sunAfternoonEndTimeDI_S18 = new Time (1800); //6pm
var sunAfternoonTimePeriodDI_S18 = new TimePeriod (sunAfternoonStartTimeDI_S18, sunAfternoonEndTimeDI_S18);
var sunAfternoonSessionDI_S18 = new Session (DayOfWeekEnum.SUN, sunAfternoonTimePeriodDI_S18, true, 6);

var sunNightStartTimeDI_S18 = new Time (1800); //6pm
var sunNightEndTimeDI_S18 = new Time (2200); //10pm
var sunNightTimePeriodDI_S18 = new TimePeriod (sunNightStartTimeDI_S18, sunNightEndTimeDI_S18);
var sunNightSessionDI_S18 = new Session (DayOfWeekEnum.SUN, sunNightTimePeriodDI_S18, true, 6);


// Stage 18 court rental

// Mon
var monDayStartTime_S18 = new Time (900); //9am
var monDayEndTime_S18 = new Time (1800); //6pm
var monDayTimePeriod_S18 = new TimePeriod (monDayStartTime_S18, monDayEndTime_S18);
var monDaySession_S18 = new Session (DayOfWeekEnum.MON, monDayTimePeriod_S18, false, 15);

var monNightStartTime_S18 = new Time (1800); //6pm
var monNightEndTime_S18 = new Time (2300); //11pm
var monNightTimePeriod_S18 = new TimePeriod (monNightStartTime_S18, monNightEndTime_S18);
var monNightSession_S18 = new Session (DayOfWeekEnum.MON, monNightTimePeriod_S18, false, 20);

// Tue
var tueDayStartTime_S18 = new Time (1400); //2pm
var tueDayEndTime_S18 = new Time (1800); //6pm
var tueDayTimePeriod_S18 = new TimePeriod (tueDayStartTime_S18, tueDayEndTime_S18);
var tueDaySession_S18 = new Session (DayOfWeekEnum.TUE, tueDayTimePeriod_S18, false, 15);

var tueNightStartTime_S18 = new Time (1800); //6pm
var tueNightEndTime_S18 = new Time (2300); //11pm
var tueNightTimePeriod_S18 = new TimePeriod (tueNightStartTime_S18, tueNightEndTime_S18);
var tueNightSession_S18 = new Session (DayOfWeekEnum.TUE, tueNightTimePeriod_S18, false, 20);

// Wed
var wedDayStartTime_S18 = new Time (900); //9am
var wedDayEndTime_S18 = new Time (1800); //6pm
var wedDayTimePeriod_S18 = new TimePeriod (wedDayStartTime_S18, wedDayEndTime_S18);
var wedDaySession_S18 = new Session (DayOfWeekEnum.WED, wedDayTimePeriod_S18, false, 15);

var wedNightStartTime_S18 = new Time (1800); //6pm
var wedNightEndTime_S18 = new Time (2300); //11pm
var wedNightTimePeriod_S18 = new TimePeriod (wedNightStartTime_S18, wedNightEndTime_S18);
var wedNightSession_S18 = new Session (DayOfWeekEnum.WED, wedNightTimePeriod_S18, false, 20);

// Thu
var thuDayStartTime_S18 = new Time (1400); //2pm
var thuDayEndTime_S18 = new Time (1800); //6pm
var thuDayTimePeriod_S18 = new TimePeriod (thuDayStartTime_S18, thuDayEndTime_S18);
var thuDaySession_S18 = new Session (DayOfWeekEnum.THU, thuDayTimePeriod_S18, false, 15);

var thuNightStartTime_S18 = new Time (1800); //6pm
var thuNightEndTime_S18 = new Time (2300); //11pm
var thuNightTimePeriod_S18 = new TimePeriod (thuNightStartTime_S18, thuNightEndTime_S18);
var thuNightSession_S18 = new Session (DayOfWeekEnum.THU, thuNightTimePeriod_S18, false, 20);

// Fri
var friDayStartTime_S18 = new Time (900); //9am
var friDayEndTime_S18 = new Time (1800); //6pm
var friDayTimePeriod_S18 = new TimePeriod (friDayStartTime_S18, friDayEndTime_S18);
var friDaySession_S18 = new Session (DayOfWeekEnum.FRI, friDayTimePeriod_S18, false, 15);

var friNightStartTime_S18 = new Time (1800); //6pm
var friNightEndTime_S18 = new Time (2300); //11pm
var friNightTimePeriod_S18 = new TimePeriod (friNightStartTime_S18, friNightEndTime_S18);
var friNightSession_S18 = new Session (DayOfWeekEnum.FRI, friNightTimePeriod_S18, false, 20);

// Sat
var satStartTime_S18 = new Time (900); //9am
var satEndTime_S18 = new Time (100); //1am
var satTimePeriod_S18 = new TimePeriod (satStartTime_S18, satEndTime_S18);
var satSession_S18 = new Session (DayOfWeekEnum.SAT, satTimePeriod_S18, false, 20);

// Sun
var sunStartTime_S18 = new Time (900); //9am
var sunEndTime_S18 = new Time (2200); //10pm
var sunTimePeriod_S18 = new TimePeriod (sunStartTime_S18, sunEndTime_S18);
var sunSession_S18 = new Session (DayOfWeekEnum.SUN, sunTimePeriod_S18, false, 20);


var sessions_S18 = [monMorningSessionDI_S18, monAfternoonSessionDI_S18, monNightSessionDI_S18,
					tueAfternoonSessionDI_S18, wedMorningSessionDI_S18, wedAfternoonSessionDI_S18,
					thuAfternoonSessionDI_S18, friMorningSessionDI_S18, friAfternoonSessionDI_S18,
					friEarlyNightSessionDI_S18, friNightSessionDI_S18, satMorningSessionDI_S18,
					satAfternoonSessionDI_S18, satEarlyNightSessionDI_S18, satNightSessionDI_S18,
					sunMorningSessionDI_S18, sunAfternoonSessionDI_S18, sunNightSessionDI_S18,
					monDaySession_S18, monNightSession_S18, tueDaySession_S18, tueNightSession_S18,
					wedDaySession_S18, wedNightSession_S18, thuDaySession_S18, thuNightSession_S18,
					friDaySession_S18, friNightSession_S18, satSession_S18, sunSession_S18];


var stage18 = new BadmintonPlace("Stage 18 Badminton Centre", "#170-2351 No 6 Rd., Richmond, BC", true, false, 
	sessions_S18, "http://stage18badminton.com/");

console.log(stage18);




// Ace drop-in

// Mon
var monMorningStartTimeDI_ACE = new Time (900); //9am
var monMorningEndTimeDI_ACE = new Time (1200); //12pm
var monMorningTimePeriodDI_ACE = new TimePeriod (monMorningStartTimeDI_ACE, monMorningEndTimeDI_ACE);
var monMorningSessionDI_ACE = new Session (DayOfWeekEnum.MON, monMorningTimePeriodDI_ACE, true, 5);

var monAfternoonStartTimeDI_ACE = new Time (1200); //12pm
var monAfternoonEndTimeDI_ACE = new Time (1500); //3pm
var monAfternoonTimePeriodDI_ACE = new TimePeriod (monAfternoonStartTimeDI_ACE, monAfternoonEndTimeDI_ACE);
var monAfternoonSessionDI_ACE = new Session (DayOfWeekEnum.MON, monAfternoonTimePeriodDI_ACE, true, 5);

var monNightStartTimeDI_ACE = new Time (2100); //9pm
var monNightEndTimeDI_ACE = new Time (2300); //1100pm
var monNightTimePeriodDI_ACE = new TimePeriod (monNightStartTimeDI_ACE, monNightEndTimeDI_ACE);
var monNightSessionDI_ACE = new Session (DayOfWeekEnum.MON, monNightTimePeriodDI_ACE, true, 5);


// Tue
var tueMorningStartTimeDI_ACE = new Time (900); //9am
var tueMorningEndTimeDI_ACE = new Time (1200); //12pm
var tueMorningTimePeriodDI_ACE = new TimePeriod (tueMorningStartTimeDI_ACE, tueMorningEndTimeDI_ACE);
var tueMorningSessionDI_ACE = new Session (DayOfWeekEnum.TUE, tueMorningTimePeriodDI_ACE, true, 5);

var tueAfternoonStartTimeDI_ACE = new Time (1200); //12pm
var tueAfternoonEndTimeDI_ACE = new Time (1500); //3pm
var tueAfternoonTimePeriodDI_ACE = new TimePeriod (tueAfternoonStartTimeDI_S18, tueAfternoonEndTimeDI_ACE);
var tueAfternoonSessionDI_ACE = new Session (DayOfWeekEnum.TUE, tueAfternoonTimePeriodDI_ACE, true, 5);

var tueNightStartTimeDI_ACE = new Time (2100); //9pm
var tueNightEndTimeDI_ACE = new Time (2300); //1100pm
var tueNightTimePeriodDI_ACE = new TimePeriod (tueNightStartTimeDI_ACE, tueMorningEndTimeDI_ACE);
var tueNightSessionDI_ACE = new Session (DayOfWeekEnum.TUE, tueNightTimePeriodDI_ACE, true, 5);


// Wed
var wedMorningStartTimeDI_ACE = new Time (900); //9am
var wedMorningEndTimeDI_ACE = new Time (1200); //12pm
var wedMorningTimePeriodDI_ACE = new TimePeriod (wedMorningStartTimeDI_ACE, wedMorningEndTimeDI_ACE);
var wedMorningSessionDI_ACE = new Session (DayOfWeekEnum.WED, wedMorningTimePeriodDI_ACE, true, 5);

var wedAfternoonStartTimeDI_ACE = new Time (1200); //12pm
var wedAfternoonEndTimeDI_ACE = new Time (1500); //3pm
var wedAfternoonTimePeriodDI_ACE = new TimePeriod (wedAfternoonStartTimeDI_ACE, wedAfternoonEndTimeDI_ACE);
var wedAfternoonSessionDI_ACE = new Session (DayOfWeekEnum.WED, wedAfternoonTimePeriodDI_ACE, true, 5);

var wedNightStartTimeDI_ACE = new Time (2100); //9pm
var wedNightEndTimeDI_ACE = new Time (2300); //1100pm
var wedNightTimePeriodDI_ACE = new TimePeriod (wedNightStartTimeDI_ACE, wedMorningEndTimeDI_ACE);
var wedNightSessionDI_ACE = new Session (DayOfWeekEnum.WED, wedNightTimePeriodDI_ACE, true, 5);


// Thu
var thuMorningStartTimeDI_ACE = new Time (900); //9am
var thuMorningEndTimeDI_ACE = new Time (1300); //1pm
var thuMorningTimePeriodDI_ACE = new TimePeriod (thuMorningStartTimeDI_ACE, thuMorningEndTimeDI_ACE);
var thuMorningSessionDI_ACE = new Session (DayOfWeekEnum.THU, thuMorningTimePeriodDI_ACE, true, 5);

var thuAfternoonStartTimeDI_ACE = new Time (1300); //1pm
var thuAfternoonEndTimeDI_ACE = new Time (1800); //6pm
var thuAfternoonTimePeriodDI_ACE = new TimePeriod (thuAfternoonStartTimeDI_S18, thuAfternoonEndTimeDI_ACE);
var thuAfternoonSessionDI_ACE = new Session (DayOfWeekEnum.THU, thuAfternoonTimePeriodDI_ACE, true, 5);

var thuNightStartTimeDI_ACE = new Time (2100); //9pm
var thuNightEndTimeDI_ACE = new Time (2300); //1100pm
var thuNightTimePeriodDI_ACE = new TimePeriod (thuNightStartTimeDI_ACE, thuMorningEndTimeDI_ACE);
var thuNightSessionDI_ACE = new Session (DayOfWeekEnum.THU, thuNightTimePeriodDI_ACE, true, 5);


// Fri
var friMorningStartTimeDI_ACE = new Time (900); //9am
var friMorningEndTimeDI_ACE = new Time (1200); //12pm
var friMorningTimePeriodDI_ACE = new TimePeriod (friMorningStartTimeDI_ACE, friMorningEndTimeDI_ACE);
var friMorningSessionDI_ACE = new Session (DayOfWeekEnum.FRI, friMorningTimePeriodDI_ACE, true, 5);

var friAfternoonStartTimeDI_ACE = new Time (1200); //12pm
var friAfternoonEndTimeDI_ACE = new Time (1500); //3pm
var friAfternoonTimePeriodDI_ACE = new TimePeriod (friAfternoonStartTimeDI_ACE, friAfternoonEndTimeDI_ACE);
var friAfternoonSessionDI_ACE = new Session (DayOfWeekEnum.FRI, friAfternoonTimePeriodDI_ACE, true, 5);

var friNightStartTimeDI_ACE = new Time (2100); //9pm
var friNightEndTimeDI_ACE = new Time (100); //1am
var friNightTimePeriodDI_ACE = new TimePeriod (friNightStartTimeDI_ACE, friMorningEndTimeDI_ACE);
var friNightSessionDI_ACE = new Session (DayOfWeekEnum.FRI, friNightTimePeriodDI_ACE, true, 5);


// Sat
var satMorningStartTimeDI_ACE = new Time (900); //9am
var satMorningEndTimeDI_ACE = new Time (1300); //1pm
var satMorningTimePeriodDI_ACE = new TimePeriod (satMorningStartTimeDI_ACE, satMorningEndTimeDI_ACE);
var satMorningSessionDI_ACE = new Session (DayOfWeekEnum.SAT, satMorningTimePeriodDI_ACE, true, 6);

var satAfternoonStartTimeDI_ACE = new Time (1300); //1pm
var satAfternoonEndTimeDI_ACE = new Time (1700); //5pm
var satAfternoonTimePeriodDI_ACE = new TimePeriod (satAfternoonStartTimeDI_ACE, satAfternoonEndTimeDI_ACE);
var satAfternoonSessionDI_ACE = new Session (DayOfWeekEnum.SAT, satAfternoonTimePeriodDI_ACE, true, 6);

var satNightStartTimeDI_ACE = new Time (2100); //9pm
var satNightEndTimeDI_ACE = new Time (100); //1am
var satNightTimePeriodDI_ACE = new TimePeriod (satNightStartTimeDI_ACE, satMorningEndTimeDI_ACE);
var satNightSessionDI_ACE = new Session (DayOfWeekEnum.SAT, satNightTimePeriodDI_ACE, true, 5);


// Sun
var sunMorningStartTimeDI_ACE = new Time (900); //9am
var sunMorningEndTimeDI_ACE = new Time (1200); //12pm
var sunMorningTimePeriodDI_ACE = new TimePeriod (sunMorningStartTimeDI_ACE, sunMorningEndTimeDI_ACE);
var sunMorningSessionDI_ACE = new Session (DayOfWeekEnum.SUN, sunMorningTimePeriodDI_ACE, true, 6);

var sunNightStartTimeDI_ACE = new Time (2000); //8pm
var sunNightEndTimeDI_ACE = new Time (2400); //12am
var sunNightTimePeriodDI_ACE = new TimePeriod (sunNightStartTimeDI_ACE, sunNightEndTimeDI_ACE);
var sunNightSessionDI_ACE = new Session (DayOfWeekEnum.SUN, sunNightTimePeriodDI_ACE, true, 6);


// Ace court rental

// Mon
var monStartTime_ACE = new Time (900); //9am
var monEndTime_ACE = new Time (2300); //1100pm
var monTimePeriod_ACE = new TimePeriod (monStartTime_ACE, monEndTime_ACE);
var monSession_ACE = new Session (DayOfWeekEnum.MON, monTimePeriod_ACE, false, 22);

// Tue
var tueStartTime_ACE = new Time (900); //9am
var tueEndTime_ACE = new Time (2300); //1100pm
var tueTimePeriod_ACE = new TimePeriod (tueStartTime_ACE, tueEndTime_ACE);
var tueSession_ACE = new Session (DayOfWeekEnum.TUE, tueTimePeriod_ACE, false, 22);

// Wed
var wedStartTime_ACE = new Time (900); //9am
var wedEndTime_ACE = new Time (2300); //1100pm
var wedTimePeriod_ACE = new TimePeriod (wedStartTime_ACE, wedEndTime_ACE);
var wedSession_ACE = new Session (DayOfWeekEnum.WED, wedTimePeriod_ACE, false, 22);

// Thu
var thuStartTime_ACE = new Time (900); //9am
var thuEndTime_ACE = new Time (2400); //1200am
var thuTimePeriod_ACE = new TimePeriod (thuStartTime_ACE, thuEndTime_ACE);
var thuSession_ACE = new Session (DayOfWeekEnum.THU, thuTimePeriod_ACE, false, 22);

// Fri
var friStartTime_ACE = new Time (900); //9am
var friEndTime_ACE = new Time (100); //100am
var friTimePeriod_ACE = new TimePeriod (friStartTime_ACE, friEndTime_ACE);
var friSession_ACE = new Session (DayOfWeekEnum.FRI, friTimePeriod_ACE, false, 22);

// Sat
var satStartTime_ACE = new Time (900); //9am
var satEndTime_ACE = new Time (100); //100am
var satTimePeriod_ACE = new TimePeriod (satStartTime_ACE, satEndTime_ACE);
var satSession_ACE = new Session (DayOfWeekEnum.SAT, satTimePeriod_ACE, false, 22);

// Sun
var sunStartTime_ACE = new Time (900); //9am
var sunEndTime_ACE = new Time (2400); //12am
var sunTimePeriod_ACE = new TimePeriod (sunStartTime_ACE, sunEndTime_ACE);
var sunSession_ACE = new Session (DayOfWeekEnum.SUN, sunTimePeriod_ACE, false, 22);


var sessions_ACE = [monMorningSessionDI_ACE, monAfternoonSessionDI_ACE, monNightSessionDI_ACE,
					tueMorningSessionDI_ACE, tueAfternoonSessionDI_ACE, tueNightSessionDI_ACE,
					wedMorningSessionDI_ACE, wedAfternoonSessionDI_ACE, wedNightSessionDI_ACE,
					thuMorningSessionDI_ACE, thuAfternoonSessionDI_ACE, thuNightSessionDI_ACE,
					friMorningSessionDI_ACE, friAfternoonSessionDI_ACE, friNightSessionDI_ACE,
					satMorningSessionDI_ACE, satAfternoonSessionDI_ACE, satNightSessionDI_ACE,
					sunMorningSessionDI_ACE, sunNightSessionDI_ACE,
					monSession_ACE, tueSession_ACE, wedSession_ACE, thuSession_ACE, friSession_ACE,
					satSession_ACE, sunSession_ACE];


var ace = new BadmintonPlace("Ace Badminton Centre", "9151 Van Horne Way, Richmond, BC", true, false, 
	sessions_ACE, "http://acebadmintoncentre.com/portal.php");

console.log(ace);



// Badminton Vancouver drop-in

// Mon
var monMorningStartTimeDI_BV = new Time (900); //9am
var monMorningEndTimeDI_BV = new Time (1500); //3pm
var monMorningTimePeriodDI_BV = new TimePeriod (monMorningStartTimeDI_BV, monMorningEndTimeDI_BV);
var monMorningSessionDI_BV = new Session (DayOfWeekEnum.MON, monMorningTimePeriodDI_BV, true, 5);

var monNightStartTimeDI_BV = new Time (1500); //3pm
var monNightEndTimeDI_BV = new Time (2400); //12am
var monNightTimePeriodDI_BV = new TimePeriod (monNightStartTimeDI_BV, monMorningEndTimeDI_BV);
var monNightSessionDI_BV = new Session (DayOfWeekEnum.MON, monNightTimePeriodDI_BV, true, 7);


// Tue
var tueMorningStartTimeDI_BV = new Time (900); //9am
var tueMorningEndTimeDI_BV = new Time (1500); //3pm
var tueMorningTimePeriodDI_BV = new TimePeriod (tueMorningStartTimeDI_BV, tueMorningEndTimeDI_BV);
var tueMorningSessionDI_BV = new Session (DayOfWeekEnum.TUE, tueMorningTimePeriodDI_BV, true, 3);

var tueNightStartTimeDI_BV = new Time (1500); //3pm
var tueNightEndTimeDI_BV = new Time (2400); //12am
var tueNightTimePeriodDI_BV = new TimePeriod (tueNightStartTimeDI_BV, tueMorningEndTimeDI_BV);
var tueNightSessionDI_BV = new Session (DayOfWeekEnum.TUE, tueNightTimePeriodDI_BV, true, 7);


// Wed
var wedMorningStartTimeDI_BV = new Time (900); //9am
var wedMorningEndTimeDI_BV = new Time (1500); //3pm
var wedMorningTimePeriodDI_BV = new TimePeriod (wedMorningStartTimeDI_BV, wedMorningEndTimeDI_BV);
var wedMorningSessionDI_BV = new Session (DayOfWeekEnum.WED, wedMorningTimePeriodDI_BV, true, 5);

var wedNightStartTimeDI_BV = new Time (1500); //3pm
var wedNightEndTimeDI_BV = new Time (2400); //12am
var wedNightTimePeriodDI_BV = new TimePeriod (wedNightStartTimeDI_BV, wedNightEndTimeDI_BV);
var wedNightSessionDI_BV = new Session (DayOfWeekEnum.WED, wedNightTimePeriodDI_BV, true, 7);


// Thu
var thuMorningStartTimeDI_BV = new Time (900); //9am
var thuMorningEndTimeDI_BV = new Time (1300); //1pm
var thuMorningTimePeriodDI_BV = new TimePeriod (thuMorningStartTimeDI_BV, thuMorningEndTimeDI_BV);
var thuMorningSessionDI_BV = new Session (DayOfWeekEnum.THU, thuMorningTimePeriodDI_BV, true, 3);

var thuNightStartTimeDI_BV = new Time (1500); //3pm
var thuNightEndTimeDI_BV = new Time (2400); //12am
var thuNightTimePeriodDI_BV = new TimePeriod (thuNightStartTimeDI_BV, thuMorningEndTimeDI_BV);
var thuNightSessionDI_BV = new Session (DayOfWeekEnum.THU, thuNightTimePeriodDI_BV, true, 7);


// Fri
var friMorningStartTimeDI_BV = new Time (900); //9am
var friMorningEndTimeDI_BV = new Time (1500); //3pm
var friMorningTimePeriodDI_BV = new TimePeriod (friMorningStartTimeDI_BV, friMorningEndTimeDI_BV);
var friMorningSessionDI_BV = new Session (DayOfWeekEnum.FRI, friMorningTimePeriodDI_BV, true, 5);

var friNightStartTimeDI_BV = new Time (1500); //3pm
var friNightEndTimeDI_BV = new Time (100); //1am
var friNightTimePeriodDI_BV = new TimePeriod (friNightStartTimeDI_BV, friMorningEndTimeDI_BV);
var friNightSessionDI_BV = new Session (DayOfWeekEnum.FRI, friNightTimePeriodDI_BV, true, 7);


// Sat
var satAllDayStartTimeDI_BV = new Time (900); //9am
var satAllDayEndTimeDI_BV = new Time (2400); //12am
var satAllDayTimePeriodDI_BV = new TimePeriod (satAllDayStartTimeDI_BV, satAllDayEndTimeDI_BV);
var satAllDaySessionDI_BV = new Session (DayOfWeekEnum.SAT, satAllDayTimePeriodDI_BV, true, 7);


// Sun
var sunMorningStartTimeDI_BV = new Time (900); //9am
var sunMorningEndTimeDI_BV = new Time (1800); //6pm
var sunMorningTimePeriodDI_BV = new TimePeriod (sunMorningStartTimeDI_BV, sunMorningEndTimeDI_BV);
var sunMorningSessionDI_BV = new Session (DayOfWeekEnum.SUN, sunMorningTimePeriodDI_BV, true, 7);

var sunNightStartTimeDI_BV = new Time (1800); //6pm
var sunNightEndTimeDI_BV = new Time (2400); //12am
var sunNightTimePeriodDI_BV = new TimePeriod (sunNightStartTimeDI_BV, sunNightEndTimeDI_BV);
var sunNightSessionDI_BV = new Session (DayOfWeekEnum.SUN, sunNightTimePeriodDI_BV, true, 4.50);


// Badminton Vancouver court rental

// Mon
var monStartTime_BV = new Time (900); //9am
var monEndTime_BV = new Time (2400); //12am
var monTimePeriod_BV = new TimePeriod (monStartTime_BV, monEndTime_BV);
var monSession_BV = new Session (DayOfWeekEnum.MON, monTimePeriod_BV, false, 21);

// Tue
var tueStartTime_BV = new Time (900); //9am
var tueEndTime_BV = new Time (2400); //12am
var tueTimePeriod_BV = new TimePeriod (tueStartTime_BV, tueEndTime_BV);
var tueSession_BV = new Session (DayOfWeekEnum.TUE, tueTimePeriod_BV, false, 21);

// Wed
var wedStartTime_BV = new Time (900); //9am
var wedEndTime_BV = new Time (2400); //12am
var wedTimePeriod_BV = new TimePeriod (wedStartTime_BV, wedEndTime_BV);
var wedSession_BV = new Session (DayOfWeekEnum.WED, wedTimePeriod_BV, false, 21);

// Thu
var thuStartTime_BV = new Time (900); //9am
var thuEndTime_BV = new Time (2400); //1200am
var thuTimePeriod_BV = new TimePeriod (thuStartTime_BV, thuEndTime_BV);
var thuSession_BV = new Session (DayOfWeekEnum.THU, thuTimePeriod_BV, false, 21);

// Fri
var friStartTime_BV = new Time (900); //9am
var friEndTime_BV = new Time (2400); //1200am
var friTimePeriod_BV = new TimePeriod (friStartTime_BV, friEndTime_BV);
var friSession_BV = new Session (DayOfWeekEnum.FRI, friTimePeriod_BV, false, 21);

// Sat
var satStartTime_BV = new Time (900); //9am
var satEndTime_BV = new Time (1200); //1200am
var satTimePeriod_BV = new TimePeriod (satStartTime_BV, satEndTime_BV);
var satSession_BV = new Session (DayOfWeekEnum.SAT, satTimePeriod_BV, false, 16);

// Sun
var sunMorningStartTime_BV = new Time (900); //9am
var sunMorningEndTime_BV = new Time (1800); //6pm
var sunMorningTimePeriod_BV = new TimePeriod (sunMorningStartTime_BV, sunMorningEndTime_BV);
var sunMorningSession_BV = new Session (DayOfWeekEnum.SUN, sunMorningTimePeriod_BV, false, 16);

var sunNightStartTime_BV = new Time (900); //6pm
var sunNightEndTime_BV = new Time (2400); //12am
var sunNightTimePeriod_BV = new TimePeriod (sunNightStartTime_BV, sunNightEndTime_BV);
var sunNightSession_BV = new Session (DayOfWeekEnum.SUN, sunNightTimePeriod_BV, false, 21);


var sessions_BV = [monMorningSessionDI_BV, monNightSessionDI_BV,
					tueMorningSessionDI_BV, tueNightSessionDI_BV,
					wedMorningSessionDI_BV, wedNightSessionDI_BV,
					thuMorningSessionDI_BV, thuNightSessionDI_BV,
					friMorningSessionDI_BV, friNightSessionDI_BV,
					satAllDaySessionDI_BV,
					sunMorningSessionDI_BV, sunNightSessionDI_BV,
					monSession_BV, tueSession_BV, wedSession_BV, thuSession_BV, friSession_BV,
					satSession_BV, sunMorningSession_BV, sunNightSession_BV];


var badmintonVancouver = new BadmintonPlace("Badminton Vancouver", "13100 Mitchell Road, Richmond, BC", true, false, 
	sessions_BV, "http://www.badminton-vancouver.com/");

console.log(badmintonVancouver);


// Cambie comm centre drop-in

// Mon
var monStartTimeDI_CMBCC = new Time (1145); //1145am
var monEndTimeDI_CMBCC = new Time (1430); //230pm
var monTimePeriodDI_CMBCC = new TimePeriod (monStartTimeDI_CMBCC, monEndTimeDI_CMBCC);
var monSessionDI_CMBCC = new Session (DayOfWeekEnum.MON, monTimePeriodDI_CMBCC, true, 4.75);


// Wed
var wedMorningStartTimeDI_CMBCC = new Time (1145); //1145am
var wedMorningEndTimeDI_CMBCC = new Time (1430); //230pm
var wedMorningTimePeriodDI_CMBCC = new TimePeriod (wedMorningStartTimeDI_CMBCC, wedMorningEndTimeDI_CMBCC);
var wedMorningSessionDI_CMBCC = new Session (DayOfWeekEnum.WED, wedMorningTimePeriodDI_CMBCC, true, 4.75);

var wedNightStartTimeDI_CMBCC = new Time (1900); //7pm
var wedNightEndTimeDI_CMBCC = new Time (2130); //930pm
var wedNightTimePeriodDI_CMBCC = new TimePeriod (wedNightStartTimeDI_CMBCC, wedNightEndTimeDI_CMBCC);
var wedNightSessionDI_CMBCC = new Session (DayOfWeekEnum.WED, wedNightTimePeriodDI_CMBCC, true, 4.75);


// Fri
var friStartTimeDI_CMBCC = new Time (1145); //1145am
var friEndTimeDI_CMBCC = new Time (1430); //230pm
var friTimePeriodDI_CMBCC = new TimePeriod (friStartTimeDI_CMBCC, friEndTimeDI_CMBCC);
var friSessionDI_CMBCC = new Session (DayOfWeekEnum.FRI, friTimePeriodDI_CMBCC, true, 4.75);


// Cambie comm centre court rental

// Sat
var satStartTime_CMBCC = new Time (915); //915am
var satEndTime_CMBCC = new Time (1900); //7pm
var satTimePeriod_CMBCC = new TimePeriod (satStartTime_CMBCC, satEndTime_CMBCC);
var satSession_CMBCC = new Session (DayOfWeekEnum.SAT, satTimePeriod_CMBCC, false, 9.75);


var sessions_CMBCC = [monSessionDI_CMBCC, wedMorningSessionDI_CMBCC, wedNightSessionDI_CMBCC,
					  friSessionDI_CMBCC, satSession_CMBCC];


var cambieCommCentre = new BadmintonPlace("Cambie Community Centre", "12800 Cambie Rd, Richmond, BC", false, true, 
	sessions_CMBCC, "http://www.richmond.ca/__shared/assets/racquetsportsdropinschwinterspring201746061.pdf");

console.log(cambieCommCentre);


// Steveston comm centre drop-in

// Wed
var wedStartTimeDI_STVCC = new Time (515); //515pm
var wedEndTimeDI_STVCC = new Time (1845); //645pm
var wedTimePeriodDI_STVCC = new TimePeriod (wedStartTimeDI_STVCC, wedEndTimeDI_STVCC);
var wedSessionDI_STVCC = new Session (DayOfWeekEnum.WED, wedTimePeriodDI_STVCC, true, 4.75);


// Sun
var sunStartTimeDI_STVCC = new Time (1030); //1030am
var sunEndTimeDI_STVCC = new Time (1200); //12pm
var sunTimePeriodDI_STVCC = new TimePeriod (sunStartTimeDI_STVCC, sunEndTimeDI_STVCC);
var sunSessionDI_STVCC = new Session (DayOfWeekEnum.SUN, sunTimePeriodDI_STVCC, true, 4.75);


// Steveston comm centre court rental

// Mon
var monStartTime_STVCC = new Time (2030); //830pm
var monEndTime_STVCC = new Time (2115); //915pm
var monTimePeriod_STVCC = new TimePeriod (monStartTime_STVCC, monEndTime_STVCC);
var monSession_STVCC = new Session (DayOfWeekEnum.MON, monTimePeriod_STVCC, false, 9.75);

// Sun
var sunStartTime_STVCC = new Time (900); //9am
var sunEndTime_STVCC = new Time (1030); //1030am
var sunTimePeriod_STVCC = new TimePeriod (sunStartTime_STVCC, sunEndTime_STVCC);
var sunSession_STVCC = new Session (DayOfWeekEnum.SUN, sunTimePeriod_STVCC, false, 9.75);


var sessions_STVCC = [wedSessionDI_STVCC, sunSessionDI_STVCC, monSession_STVCC, sunSession_STVCC];


var stevestonCommCentre = new BadmintonPlace("Steveston Community Centre", "4111 Moncton Street, Richmond, BC", false, true, 
	sessions_STVCC, "http://www.richmond.ca/__shared/assets/racquetsportsdropinschwinterspring201746061.pdf");

console.log(stevestonCommCentre);


// South Arm comm centre drop-in

// Thu
var thuStartTimeDI_SACC = new Time (1915); //715pm
var thuEndTimeDI_SACC = new Time (2115); //915pm
var thuTimePeriodDI_SACC = new TimePeriod (thuStartTimeDI_SACC, thuEndTimeDI_SACC);
var thuSessionDI_SACC = new Session (DayOfWeekEnum.THU, thuTimePeriodDI_SACC, true, 4.75);


// South Arm comm centre court rental

// Sat
var satStartTime_SACC = new Time (1630); //430pm
var satEndTime_SACC = new Time (2015); //815pm
var satTimePeriod_SACC = new TimePeriod (satStartTime_SACC, satEndTime_SACC);
var satSession_SACC = new Session (DayOfWeekEnum.SAT, satTimePeriod_SACC, false, 9.75);

// Sun
var sunStartTime_SACC = new Time (1630); //430pm
var sunEndTime_SACC = new Time (2015); //815pm
var sunTimePeriod_SACC = new TimePeriod (sunStartTime_SACC, sunEndTime_SACC);
var sunSession_SACC = new Session (DayOfWeekEnum.SUN, sunTimePeriod_SACC, false, 9.75);


var sessions_SACC = [thuSessionDI_SACC, satSession_SACC, sunSession_SACC];


var southArmCommCentre = new BadmintonPlace("South Arm Community Centre", "8880 Williams Rd, Richmond, BC", false, true, 
	sessions_SACC, "http://www.richmond.ca/__shared/assets/racquetsportsdropinschwinterspring201746061.pdf");

console.log(stevestonCommCentre);


// Thompson comm centre drop-in

// Sun
var sunStartTimeDI_THPCC = new Time (930); //930am
var sunEndTimeDI_THPCC = new Time (1230); //1230pm
var sunTimePeriodDI_THPCC = new TimePeriod (sunStartTimeDI_THPCC, sunEndTimeDI_THPCC);
var sunSessionDI_THPCC = new Session (DayOfWeekEnum.SUN, sunTimePeriodDI_THPCC, true, 4.75);


// Thompson comm centre court rental

// Wed
var wedStartTime_THPCC = new Time (1745); //545pm
var wedEndTime_THPCC = new Time (2130); //930pm
var wedTimePeriod_THPCC = new TimePeriod (wedStartTime_THPCC, wedEndTime_THPCC);
var wedSession_THPCC = new Session (DayOfWeekEnum.WED, wedTimePeriod_THPCC, false, 9.75);

// Sat
var satStartTime_THPCC = new Time (1645); //445pm
var satEndTime_THPCC = new Time (2030); //830pm
var satTimePeriod_THPCC = new TimePeriod (satStartTime_THPCC, satEndTime_THPCC);
var satSession_THPCC = new Session (DayOfWeekEnum.SAT, satTimePeriod_THPCC, false, 9.75);


var sessions_THPCC = [sunSessionDI_THPCC, wedSession_THPCC, satSession_THPCC];


var thompsonCommCentre = new BadmintonPlace("Thompson Community Centre", "5151 Granville Ave, Richmond, BC", false, true, 
	sessions_THPCC, "http://www.richmond.ca/__shared/assets/racquetsportsdropinschwinterspring201746061.pdf");

console.log(thompsonCommCentre);



// West Richmond comm centre court rental

// Sun
var sunStartTime_WRCC = new Time (1000); //1000am
var sunEndTime_WRCC = new Time (1300); //1pm
var sunTimePeriod_WRCC = new TimePeriod (sunStartTime_WRCC, sunEndTime_WRCC);
var sunSession_WRCC = new Session (DayOfWeekEnum.SUN, sunTimePeriod_WRCC, false, 9.75);


var sessions_WRCC = [sunSession_WRCC];


var westRichmondCommCentre = new BadmintonPlace("West Richmond Community Centre", "9180 No 1 Rd, Richmond, BC", false, true, 
	sessions_WRCC, "http://www.richmond.ca/__shared/assets/racquetsportsdropinschwinterspring201746061.pdf");

console.log(westRichmondCommCentre);


// West Richmond comm centre - Hugh Boyd court rental

// Fri
var friStartTime_WRCCHB = new Time (1800); //6pm
var friEndTime_WRCCHB = new Time (2100); //9pm
var friTimePeriod_WRCCHB = new TimePeriod (friStartTime_WRCCHB, friEndTime_WRCCHB);
var friSession_WRCCHB = new Session (DayOfWeekEnum.FRI, friTimePeriod_WRCCHB, false, 9.75);


var sessions_WRCCHB = [friSession_WRCCHB];


var westRichmondCommCentre_HughBoyd = new BadmintonPlace("West Richmond Community Centre - Hugh Boyd Secondary School", "9200 No 1 Rd, Richmond, BC", false, true, 
	sessions_WRCCHB, "http://www.richmond.ca/__shared/assets/badmintoncrtrentalschwinterspring201746060.pdf");

console.log(westRichmondCommCentre_HughBoyd);


// City Centre comm centre - Anderson court rental

// Sat
var satStartTime_CTYCCAND = new Time (1615); //415pm
var satEndTime_CTYCCAND = new Time (1745); //545pm
var satTimePeriod_CTYCCAND = new TimePeriod (satStartTime_CTYCCAND, satEndTime_CTYCCAND);
var satSession_CTYCCAND = new Session (DayOfWeekEnum.SAT, satTimePeriod_CTYCCAND, false, 9.75);


var sessions_CTYCCAND = [satSession_CTYCCAND];


var cityCentreCommCentre_Anderson = new BadmintonPlace("City Centre Community Centre - Anderson Elementary School", "9460 Alberta Rd, Richmond, BC", false, true, 
	sessions_CTYCCAND, "http://www.richmond.ca/__shared/assets/badmintoncrtrentalschwinterspring201746060.pdf");

console.log(cityCentreCommCentre_Anderson);


// Time functions tests
var testUserInput = new Time(1600);
var result1 = satTimePeriod_CTYCCAND.startTime.isBefore(testUserInput);
var result2 = satTimePeriod_CTYCCAND.endTime.isAfter(testUserInput);




/* GLOBAL VARIABLES */

var badmintonPlacesArray = [richmondPro, clearOne, drive, stage18, ace, badmintonVancouver, 
							cambieCommCentre, stevestonCommCentre, stevestonCommCentre,
							southArmCommCentre, thompsonCommCentre, westRichmondCommCentre,
							westRichmondCommCentre_HughBoyd, cityCentreCommCentre_Anderson];
var userInput;
var results = badmintonPlacesArray;

// let dropInRProSessions = richmondProSessions.filter(
// 	function(session) {
// 		return session.isDropIn;
// 	});

// function findPlacesToPlay(userInput) {
// 	//...
// }

// function filterByStartTime(time) {

// }


/* FUNCTIONALITY THAT BEGINS WHEN USER HITS SUBMIT */

/* Helper functions */

function findPlacesToPlay(userInput) {

	if (!userInput.includeCommCentres) {

		results = results.filter(function(badmintonPlace) {

			return (!badmintonPlace.isCommCentre);

		});

	}


	if (userInput.wantsRacketShoeRental) {

		results = results.filter(function(badmintonPlace) {

			return (badmintonPlace.hasShoeAndRacketRental);

		});

	}


	// filter sessions by day first, then filter by time, then filter places that don't have any sessions left
	if (userInput.wantsDropIn && userInput.wantsCourtRental) {
		
		results.forEach(function(badmintonPlace) {

			badmintonPlace.sessions = badmintonPlace.sessions.filter(function(session) {

				return session.dayOfWeekEnum == userInput.day;

			});

		});

		results.forEach(function(badmintonPlace) {

			badmintonPlace.sessions = badmintonPlace.sessions.filter(function(session) {

				return session.timePeriod.startTime.isBefore(userInput.time) &&
					   session.timePeriod.endTime.isAfter(userInput.time);

			});

		});

		results = results.filter(function(badmintonPlace) {

			return badmintonPlace.sessions !== null && badmintonPlace.sessions.length > 0;

		});

	}


	if (userInput.wantsDropIn) {

		results.forEach(function(badmintonPlace) {

			badmintonPlace.sessions = badmintonPlace.sessions.filter(function(session) {

				return session.isDropIn;

			});

		});

		results.forEach(function(badmintonPlace) {

			badmintonPlace.sessions = badmintonPlace.sessions.filter(function(session) {

				return session.dayOfWeekEnum == userInput.day;

			});

		});

		results.forEach(function(badmintonPlace) {

			badmintonPlace.sessions = badmintonPlace.sessions.filter(function(session) {

				return session.timePeriod.startTime.isBefore(userInput.time) &&
					   session.timePeriod.endTime.isAfter(userInput.time);

			});

		});

		results = results.filter(function(badmintonPlace) {

			return badmintonPlace.sessions !== null && badmintonPlace.sessions.length > 0;

		});

	}


	if (userInput.wantsCourtRental) {

		results.forEach(function(badmintonPlace) {

			badmintonPlace.sessions = badmintonPlace.sessions.filter(function(session) {

				return !session.isDropIn;

			});

		});

		results.forEach(function(badmintonPlace) {

			badmintonPlace.sessions = badmintonPlace.sessions.filter(function(session) {

				return session.dayOfWeekEnum == userInput.day;

			});

		});

		results.forEach(function(badmintonPlace) {

			badmintonPlace.sessions = badmintonPlace.sessions.filter(function(session) {

				return session.timePeriod.startTime.isBefore(userInput.time) &&
					   session.timePeriod.endTime.isAfter(userInput.time);

			});

		});

		results = results.filter(function(badmintonPlace) {

			return badmintonPlace.sessions !== null && badmintonPlace.sessions.length > 0;

		});

	}	

	return results;
	
}

/*	populate UserInput object upon user submission */

$("#submitButton").click(function() {

	var date = "";
	var day = "";
	var time = "";
	var amPm = "";
	var location = "";
	var wantsDropIn = "";
	var wantsCourtRental = "";
	var wantsRacketShoeRental = "";
	var includeCommCentres = "";
	var errorMsg = "";
	var currDate = new Date();
	var currDayInMonth = currDate.getDate();
	var currMonth = currDate.getMonth();
	var currTime = currDate.getHours();

	function reset() {

		$("#errorMsg").html(errorMsg);

	}

	reset();

	date = $("#calendar").datepicker("getDate");

	dayInMonthFromUser = date.getDate();
	monthFromUser = date.getMonth();

	dayOfWeek = date.getDay();

	if ((dayInMonthFromUser < currDayInMonth) | (monthFromUser < currMonth)) {

		errorMsg += "<p>Please select a valid date (today or later).</p>";

	}

	timeInInt = parseInt($("#time").val()); // parse time to int to make calculations easier
	amPm = $("#amPm").val();

	// convert time into 24-hr-clock and special case of 12am
	if ((amPm == "pm" && timeInInt < 1200) || (amPm == "am" && timeInInt == 1200)) {

		timeInInt += 1200;

	}

	if ((timeInInt < (currTime * 100)) 
		&& currDayInMonth >= dayInMonthFromUser 
		&& currMonth >= monthFromUser) {

		errorMsg += "<p>Please select a valid time (current or later time).</p>"

	}

	time = new Time(timeInInt); // create time object for later use in filtering

	location = $("#location").val();

	wantsDropIn = $("#diCheckBox").is(":checked");
	
	wantsCourtRental = $("#crCheckBox").is(":checked");

	if (!wantsDropIn && !wantsCourtRental) {

		errorMsg += "<p>Please select one (or both) of drop-in and court rental.</p>";

	}

	wantsRacketShoeRental = $("#rsrCheckBox").is(":checked");

	includeCommCentres = $("#ccCheckBox").is(":checked");

	if (errorMsg == "") {

		userInput = new UserInput(dayOfWeek, time, amPm, location, wantsDropIn, 
		wantsCourtRental, wantsRacketShoeRental, includeCommCentres);

		results = findPlacesToPlay(userInput);

		console.log(results);
		
	} else {

		$("#errorMsg").html(errorMsg);

	}

});

