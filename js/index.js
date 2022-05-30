const ShowPopupMain=(CardOnePupUpMain)=>{
    document.getElementById(CardOnePupUpMain).style.display="block"
}

const CloseAll=(CardOnePupUpMain,CardTwoPupMain,CardThreePupMain,CardFourPupMain,CardFivePupMain)=>{
    document.getElementById(CardOnePupUpMain).style.display="none"
    document.getElementById(CardTwoPupMain).style.display="none"
    document.getElementById(CardThreePupMain).style.display="none"
    document.getElementById(CardFourPupMain).style.display="none"
    document.getElementById(CardFivePupMain).style.display="none"

}
const ShowCalenderOne=(CardOneCalenderOne,CardOneCalenderTwo,CardOneTopThree,CardOneTopSeven,CardOneViewMap,CardOnePopMain)=>{
    document.getElementById(CardOneCalenderOne).style.display="block"
    document.getElementById(CardOneCalenderTwo).style.display="none"
    document.getElementById(CardOneTopThree).style.display="none"
    document.getElementById(CardOneTopSeven).style.display="none"
    document.getElementById(CardOneViewMap).style.display="none"
    document.getElementById(CardOnePopMain).style.width="100%"


}
const ShowCalenderTwoThree=(CardOneCalenderOne,CardOneCalenderTwo,CardOneTopThree,CardOneTopSeven,CardOneViewMap,CardOnePopMain,SectionOne,SectionTwo,SectionThree,SectionFour,SectionFive)=>{
    document.getElementById(CardOneCalenderOne).style.display="block"
    document.getElementById(CardOneCalenderTwo).style.display="none"
    document.getElementById(CardOneTopThree).style.display="none"
    document.getElementById(CardOneTopSeven).style.display="none"
    document.getElementById(CardOneViewMap).style.display="none"
    document.getElementById(CardOnePopMain).style.width="100%"
    document.getElementById(SectionOne).style.width="93%"
    document.getElementById(SectionTwo).style.width="93%"
    document.getElementById(SectionThree).style.width="93%"
    document.getElementById(SectionFour).style.width="93%"
    document.getElementById(SectionFive).style.width="93%"


}
const ShowCalenderTwo=(CardOneCalenderTwo,CardOneCalenderOne,CardOneTopThree,CardOneTopSeven,CardOneViewMap,CardOnePopMain)=>{
    document.getElementById(CardOneCalenderTwo).style.display="block"
    document.getElementById(CardOneCalenderOne).style.display="none"
    document.getElementById(CardOneTopThree).style.display="none"
    document.getElementById(CardOneTopSeven).style.display="none"
    document.getElementById(CardOneViewMap).style.display="none"
    document.getElementById(CardOnePopMain).style.width="100%"
}
const ShowCalenderTwoTwohree=(CardOneCalenderTwo,CardOneCalenderOne,CardOneTopThree,CardOneTopSeven,CardOneViewMap,CardOnePopMain,SectionOne,SectionTwo,SectionThree,SectionFour,SectionFive)=>{
    document.getElementById(CardOneCalenderTwo).style.display="block"
    document.getElementById(CardOneCalenderOne).style.display="none"
    document.getElementById(CardOneTopThree).style.display="none"
    document.getElementById(CardOneTopSeven).style.display="none"
    document.getElementById(CardOneViewMap).style.display="none"
    document.getElementById(CardOnePopMain).style.width="100%"
    document.getElementById(SectionOne).style.width="93%"
    document.getElementById(SectionTwo).style.width="93%"
    document.getElementById(SectionThree).style.width="93%"
    document.getElementById(SectionFour).style.width="93%"
    document.getElementById(SectionFive).style.width="93%"
}
const ShowTopThree=(CardOneTopThree,CardOneCalenderOne,CardOneCalenderTwo,CardOneMap,CardOnePopMain)=>{
    document.getElementById(CardOneTopThree).style.display="block"
    document.getElementById(CardOneCalenderOne).style.display="none"
    document.getElementById(CardOneCalenderTwo).style.display="none"
    document.getElementById(CardOneMap).style.display="none"
    document.getElementById(CardOnePopMain).style.width="100%"

}
const ShowTopThreeTwoThree=(CardOneTopThree,CardOneCalenderOne,CardOneCalenderTwo,CardOneMap,CardOnePopMain,SectionOne,SectionTwo,SectionThree,SectionFour,SectionFive)=>{
    document.getElementById(CardOneTopThree).style.display="block"
    document.getElementById(CardOneCalenderOne).style.display="none"
    document.getElementById(CardOneCalenderTwo).style.display="none"
    document.getElementById(CardOneMap).style.display="none"
    document.getElementById(CardOnePopMain).style.width="100%"
    document.getElementById(SectionOne).style.width="93%"
    document.getElementById(SectionTwo).style.width="93%"
    document.getElementById(SectionThree).style.width="93%"
    document.getElementById(SectionFour).style.width="93%"
    document.getElementById(SectionFive).style.width="93%"

}


const ShowTopSeven=(CardOneTopSeven)=>{
    if(document.getElementById(CardOneTopSeven).style.display=="block"){
        document.getElementById(CardOneTopSeven).style.display="none"
    }
    else{
        document.getElementById(CardOneTopSeven).style.display="block"
    }   
}
const ViewMap=(CardOneMap,CardOnePopMain,CardOneCalenderOne,CardOneCalenderTwo,CardOneTopThree,CardOneTopSeven)=>{
    document.getElementById(CardOneMap).style.display="block";
    document.getElementById(CardOnePopMain).style.width="761px"
    document.getElementById(CardOneCalenderOne).style.display="none"
    document.getElementById(CardOneCalenderTwo).style.display="none"
    document.getElementById(CardOneTopThree).style.display="none"
    document.getElementById(CardOneTopSeven).style.display="none"
    
}
const ViewMapTwoThree=(CardOneMap,CardOnePopMain,CardOneCalenderOne,CardOneCalenderTwo,CardOneTopThree,CardOneTopSeven,SectionOne,SectionTwo,SectionThree,SectionFour,SectionFive)=>{
    document.getElementById(CardOneMap).style.display="block";
    document.getElementById(CardOnePopMain).style.width="761px"
    document.getElementById(CardOneCalenderOne).style.display="none"
    document.getElementById(CardOneCalenderTwo).style.display="none"
    document.getElementById(CardOneTopThree).style.display="none"
    document.getElementById(CardOneTopSeven).style.display="none"
    document.getElementById(SectionOne).style.width="260px"
    document.getElementById(SectionTwo).style.width="260px"
    document.getElementById(SectionThree).style.width="260px"
    document.getElementById(SectionFour).style.width="260px"
    document.getElementById(SectionFive).style.width="260px"
    
}
const ViewMapFourFive=(CardOneMap,CardOnePopMain,CardOneCalenderOne,CardOneCalenderTwo,CardOneTopThree,CardOneTopSeven,SectionOne,SectionTwo,SectionThree,SectionFour,SectionFive,SectionSix)=>{
    document.getElementById(CardOneMap).style.display="block";
    document.getElementById(CardOnePopMain).style.width="761px"
    document.getElementById(CardOneCalenderOne).style.display="none"
    document.getElementById(CardOneCalenderTwo).style.display="none"
    document.getElementById(CardOneTopThree).style.display="none"
    document.getElementById(CardOneTopSeven).style.display="none"
    document.getElementById(SectionOne).style.width="260px"
    document.getElementById(SectionOne).style.marginLeft="auto"
    document.getElementById(SectionOne).style.marginRight="0"
    document.getElementById(SectionTwo).style.width="260px"
    document.getElementById(SectionTwo).style.marginLeft="auto"
    document.getElementById(SectionTwo).style.marginRight="0"
    document.getElementById(SectionThree).style.width="260px"
    document.getElementById(SectionThree).style.marginLeft="auto"
    document.getElementById(SectionThree).style.marginRight="0"
    document.getElementById(SectionFour).style.width="260px"
    document.getElementById(SectionFour).style.marginLeft="auto"
    document.getElementById(SectionFour).style.marginRight="0"
    document.getElementById(SectionFive).style.width="260px"
    document.getElementById(SectionFive).style.marginLeft="auto"
    document.getElementById(SectionFive).style.marginRight="0"
    document.getElementById(SectionSix).style.width="260px"
    document.getElementById(SectionSix).style.marginLeft="auto"
    document.getElementById(SectionSix).style.marginRight="0"
    
}


const CustomizeView=(CardOneCalenderOne,CardOneCalenderTwo,CardOneTopThree,CardOneViewMap,CardOnePopMain)=>{
    document.getElementById(CardOneCalenderOne).style.display="none"
    document.getElementById(CardOneCalenderTwo).style.display="none"
    document.getElementById(CardOneTopThree).style.display="none"
    document.getElementById(CardOneViewMap).style.display="none"
    document.getElementById(CardOnePopMain).style.width="100%"

}
const CustomizeViewTwoThree=(CardOneCalenderOne,CardOneCalenderTwo,CardOneTopThree,CardOneViewMap,CardOnePopMain,SectionOne,SectionTwo,SectionThree,SectionFour,SectionFive)=>{
    document.getElementById(CardOneCalenderOne).style.display="none"
    document.getElementById(CardOneCalenderTwo).style.display="none"
    document.getElementById(CardOneTopThree).style.display="none"
    document.getElementById(CardOneViewMap).style.display="none"
    document.getElementById(CardOnePopMain).style.width="100%"
    document.getElementById(SectionOne).style.width="93%"
    document.getElementById(SectionTwo).style.width="93%"
    document.getElementById(SectionThree).style.width="93%"
    document.getElementById(SectionFour).style.width="93%"
    document.getElementById(SectionFive).style.width="93%"

}

const OpenAlert=(AlertMsg,AlertMsg2,AlertMsg3,AlertMsg4,AlertMsg5)=>{
    document.getElementById(AlertMsg).style.display="block"
    document.getElementById(AlertMsg2).style.display="none"
    document.getElementById(AlertMsg3).style.display="none"
    document.getElementById(AlertMsg4).style.display="none"
    document.getElementById(AlertMsg5).style.display="none"
}
const OpenAlertCardTwo=(AlertMsg,AlertMsg2,AlertMsg3,AlertMsg4,AlertMsg5)=>{
    document.getElementById(AlertMsg).style.display="none"
    document.getElementById(AlertMsg2).style.display="block"
    document.getElementById(AlertMsg3).style.display="none"
    document.getElementById(AlertMsg4).style.display="none"
    document.getElementById(AlertMsg5).style.display="none"
}
const OpenAlertCardThree=(AlertMsg,AlertMsg2,AlertMsg3,AlertMsg4,AlertMsg5)=>{
    document.getElementById(AlertMsg).style.display="none"
    document.getElementById(AlertMsg2).style.display="none"
    document.getElementById(AlertMsg3).style.display="block"
    document.getElementById(AlertMsg4).style.display="none"
    document.getElementById(AlertMsg5).style.display="none"
}
const OpenAlertCardFour=(AlertMsg,AlertMsg2,AlertMsg3,AlertMsg4,AlertMsg5)=>{
    document.getElementById(AlertMsg).style.display="none"
    document.getElementById(AlertMsg2).style.display="none"
    document.getElementById(AlertMsg3).style.display="none"
    document.getElementById(AlertMsg4).style.display="block"
    document.getElementById(AlertMsg5).style.display="none"
}
const OpenAlertCardFive=(AlertMsg,AlertMsg2,AlertMsg3,AlertMsg4,AlertMsg5)=>{
    document.getElementById(AlertMsg).style.display="none"
    document.getElementById(AlertMsg2).style.display="none"
    document.getElementById(AlertMsg3).style.display="none"
    document.getElementById(AlertMsg4).style.display="none"
    document.getElementById(AlertMsg5).style.display="block"
}
const CloseAlert=(AlertMsg)=>{
    document.getElementById(AlertMsg).style.display="none"
}
// Calender JS //

var currentMonth = 0,
    currentYear = 2022,
    monthMap = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    $dayList = $('.days');

var addDayElement = function(date, $container) {
  var element = $(document.createElement('div')).addClass('date');
  if (date.getMonth() !== currentMonth) { element.addClass('out-of-scope'); }
  element.text(date.getDate());
  $container.append(element);
};

var getFirstLastDates = function(date) {
  var startDate, endDate;
  //First, find the first Monday prior to the beginning of the current month.
  startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  while (startDate.getDay() !== 1) { startDate.setDate(startDate.getDate() - 1); }
  //Now, find the Sunday nearest the last day of the current month.
  endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  while (endDate.getDay() !== 0) { endDate.setDate(endDate.getDate() + 1); }
  return [startDate, endDate];
};

var renderDays = function(dateRange) {
  $dayList.empty();
  var startDate = dateRange[0],
      endDate = dateRange[1],
      currentDate = startDate;
  
  while (currentDate <= endDate) {
    addDayElement(currentDate, $dayList);
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

var loadCalendar = function(date) {
  $('.headline .month').text(monthMap[currentMonth]);
  $('.headline .year').text(currentYear);
  renderDays(getFirstLastDates(date));
};

//start us off on the current month & date;
loadCalendar(new Date());

$('.days').on('click', '.date', function(e) {
  $('.date').removeClass('selected');
  $(this).addClass('selected');
});

$('.click-left').on('click', function(e) {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  loadCalendar(new Date(currentYear, currentMonth));
});

$('.click-right').on('click', function(e) {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  loadCalendar(new Date(currentYear, currentMonth));
});

// Calender end 

const OpenProgressBar=(ProgressBar)=>{

    if(document.getElementById(ProgressBar).style.display=="block"){
        document.getElementById(ProgressBar).style.display="none"
    }
    else{
        document.getElementById(ProgressBar).style.display="block"
    } 
}
 const OpenExtraContainer=(OpnContainer)=>{
    document.getElementById(OpnContainer).style.display="block"

 }
 const CloseExtraContainer=(CloseContainer)=>{
    document.getElementById(CloseContainer).style.display="none"

 }
 const OpenPopUpSuggestion=(OpenSuggestion)=>{
     document.getElementById(OpenSuggestion).style.display="block"

 }
 const ClosePopUpSuggestion=(CloseSuggestion)=>{
    document.getElementById(CloseSuggestion).style.display="none"

}


AOS.init();