const ShowPopupMain=(CardOnePupUpMain)=>{
    document.getElementById(CardOnePupUpMain).style.display="block"
}

const CloseAll=(CardOnePupUpMain)=>{
    document.getElementById(CardOnePupUpMain).style.display="none"

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