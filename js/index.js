const ShowPopupMain = (CardOnePupUpMain) => {
  document.getElementById(CardOnePupUpMain).style.display = "block";
  console.log(CardOnePupUpMain);
};

const CloseAll = (
  CardOnePupUpMain,
  CardTwoPupMain,
  CardThreePupMain,
  CardFourPupMain,
  CardFivePupMain
) => {
  document.getElementById(CardOnePupUpMain).style.display = "none";
  document.getElementById(CardTwoPupMain).style.display = "none";
  document.getElementById(CardThreePupMain).style.display = "none";
  document.getElementById(CardFourPupMain).style.display = "none";
  document.getElementById(CardFivePupMain).style.display = "none";
};
const ShowCalenderOne = (
  CardOneCalenderOne,
  CardOneCalenderTwo,
  CardOneTopThree,
  CardOneTopSeven,
  CardOneViewMap,
  CardOnePopMain
) => {
  document.getElementById(CardOneCalenderOne).style.display = "block";
  document.getElementById(CardOneCalenderTwo).style.display = "none";
  document.getElementById(CardOneTopThree).style.display = "none";
  document.getElementById(CardOneTopSeven).style.display = "none";
  document.getElementById(CardOneViewMap).style.display = "none";
  document.getElementById(CardOnePopMain).style.width = "100%";
};
const ShowCalenderTwoThree = (
  CardOneCalenderOne,
  CardOneCalenderTwo,
  CardOneTopThree,
  CardOneTopSeven,
  CardOneViewMap,
  CardOnePopMain,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive
) => {
  document.getElementById(CardOneCalenderOne).style.display = "block";
  document.getElementById(CardOneCalenderTwo).style.display = "none";
  document.getElementById(CardOneTopThree).style.display = "none";
  document.getElementById(CardOneTopSeven).style.display = "none";
  document.getElementById(CardOneViewMap).style.display = "none";
  document.getElementById(CardOnePopMain).style.width = "100%";
  document.getElementById(SectionOne).style.width = "93%";
  document.getElementById(SectionTwo).style.width = "93%";
  document.getElementById(SectionThree).style.width = "93%";
  document.getElementById(SectionFour).style.width = "93%";
  document.getElementById(SectionFive).style.width = "93%";
};
const ShowCalenderTwo = (
  CardOneCalenderTwo,
  CardOneCalenderOne,
  CardOneTopThree,
  CardOneTopSeven,
  CardOneViewMap,
  CardOnePopMain
) => {
  document.getElementById(CardOneCalenderTwo).style.display = "block";
  document.getElementById(CardOneCalenderOne).style.display = "none";
  document.getElementById(CardOneTopThree).style.display = "none";
  document.getElementById(CardOneTopSeven).style.display = "none";
  document.getElementById(CardOneViewMap).style.display = "none";
  document.getElementById(CardOnePopMain).style.width = "100%";
};
const ShowCalenderTwoTwohree = (
  CardOneCalenderTwo,
  CardOneCalenderOne,
  CardOneTopThree,
  CardOneTopSeven,
  CardOneViewMap,
  CardOnePopMain,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive
) => {
  document.getElementById(CardOneCalenderTwo).style.display = "block";
  document.getElementById(CardOneCalenderOne).style.display = "none";
  document.getElementById(CardOneTopThree).style.display = "none";
  document.getElementById(CardOneTopSeven).style.display = "none";
  document.getElementById(CardOneViewMap).style.display = "none";
  document.getElementById(CardOnePopMain).style.width = "100%";
  document.getElementById(SectionOne).style.width = "93%";
  document.getElementById(SectionTwo).style.width = "93%";
  document.getElementById(SectionThree).style.width = "93%";
  document.getElementById(SectionFour).style.width = "93%";
  document.getElementById(SectionFive).style.width = "93%";
};
const ShowTopThree = (
  CardOneTopThree,
  CardOneCalenderOne,
  CardOneCalenderTwo,
  CardOneMap,
  CardOnePopMain
) => {
  document.getElementById(CardOneTopThree).style.display = "block";
  document.getElementById(CardOneCalenderOne).style.display = "none";
  document.getElementById(CardOneCalenderTwo).style.display = "none";
  document.getElementById(CardOneMap).style.display = "none";
  document.getElementById(CardOnePopMain).style.width = "100%";
};
const ShowTopThreeTwoThree = (
  CardOneTopThree,
  CardOneCalenderOne,
  CardOneCalenderTwo,
  CardOneMap,
  CardOnePopMain,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive
) => {
  document.getElementById(CardOneTopThree).style.display = "block";
  document.getElementById(CardOneCalenderOne).style.display = "none";
  document.getElementById(CardOneCalenderTwo).style.display = "none";
  document.getElementById(CardOneMap).style.display = "none";
  document.getElementById(CardOnePopMain).style.width = "100%";
  document.getElementById(SectionOne).style.width = "93%";
  document.getElementById(SectionTwo).style.width = "93%";
  document.getElementById(SectionThree).style.width = "93%";
  document.getElementById(SectionFour).style.width = "93%";
  document.getElementById(SectionFive).style.width = "93%";
};

const ShowTopSeven = (CardOneTopSeven) => {
  if (document.getElementById(CardOneTopSeven).style.display == "block") {
    document.getElementById(CardOneTopSeven).style.display = "none";
  } else {
    document.getElementById(CardOneTopSeven).style.display = "block";
  }
};
const ViewMap = (
  CardOneMap,
  CardOnePopMain,
  CardOneCalenderOne,
  CardOneCalenderTwo,
  CardOneTopThree,
  CardOneTopSeven
) => {
  document.getElementById(CardOneMap).style.display = "block";
  document.getElementById(CardOnePopMain).style.width = "761px";
  document.getElementById(CardOneCalenderOne).style.display = "none";
  document.getElementById(CardOneCalenderTwo).style.display = "none";
  document.getElementById(CardOneTopThree).style.display = "none";
  document.getElementById(CardOneTopSeven).style.display = "none";
};
const ViewMapTwoThree = (
  CardOneMap,
  CardOnePopMain,
  CardOneCalenderOne,
  CardOneCalenderTwo,
  CardOneTopThree,
  CardOneTopSeven,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive
) => {
  document.getElementById(CardOneMap).style.display = "block";
  document.getElementById(CardOnePopMain).style.width = "761px";
  document.getElementById(CardOneCalenderOne).style.display = "none";
  document.getElementById(CardOneCalenderTwo).style.display = "none";
  document.getElementById(CardOneTopThree).style.display = "none";
  document.getElementById(CardOneTopSeven).style.display = "none";
  document.getElementById(SectionOne).style.width = "260px";
  document.getElementById(SectionTwo).style.width = "260px";
  document.getElementById(SectionThree).style.width = "260px";
  document.getElementById(SectionFour).style.width = "260px";
  document.getElementById(SectionFive).style.width = "260px";
};
const ViewMapFourFive = (
  CardOneMap,
  CardOnePopMain,
  CardOneCalenderOne,
  CardOneCalenderTwo,
  CardOneTopThree,
  CardOneTopSeven,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix
) => {
  document.getElementById(CardOneMap).style.display = "block";
  document.getElementById(CardOnePopMain).style.width = "761px";
  document.getElementById(CardOneCalenderOne).style.display = "none";
  document.getElementById(CardOneCalenderTwo).style.display = "none";
  document.getElementById(CardOneTopThree).style.display = "none";
  document.getElementById(CardOneTopSeven).style.display = "none";
  document.getElementById(SectionOne).style.width = "260px";
  document.getElementById(SectionOne).style.marginLeft = "auto";
  document.getElementById(SectionOne).style.marginRight = "0";
  document.getElementById(SectionTwo).style.width = "260px";
  document.getElementById(SectionTwo).style.marginLeft = "auto";
  document.getElementById(SectionTwo).style.marginRight = "0";
  document.getElementById(SectionThree).style.width = "260px";
  document.getElementById(SectionThree).style.marginLeft = "auto";
  document.getElementById(SectionThree).style.marginRight = "0";
  document.getElementById(SectionFour).style.width = "260px";
  document.getElementById(SectionFour).style.marginLeft = "auto";
  document.getElementById(SectionFour).style.marginRight = "0";
  document.getElementById(SectionFive).style.width = "260px";
  document.getElementById(SectionFive).style.marginLeft = "auto";
  document.getElementById(SectionFive).style.marginRight = "0";
  document.getElementById(SectionSix).style.width = "260px";
  document.getElementById(SectionSix).style.marginLeft = "auto";
  document.getElementById(SectionSix).style.marginRight = "0";
};

const CustomizeView = (
  CardOneCalenderOne,
  CardOneCalenderTwo,
  CardOneTopThree,
  CardOneViewMap,
  CardOnePopMain
) => {
  document.getElementById(CardOneCalenderOne).style.display = "none";
  document.getElementById(CardOneCalenderTwo).style.display = "none";
  document.getElementById(CardOneTopThree).style.display = "none";
  document.getElementById(CardOneViewMap).style.display = "none";
  document.getElementById(CardOnePopMain).style.width = "100%";
};
const CustomizeViewTwoThree = (
  CardOneCalenderOne,
  CardOneCalenderTwo,
  CardOneTopThree,
  CardOneViewMap,
  CardOnePopMain,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive
) => {
  document.getElementById(CardOneCalenderOne).style.display = "none";
  document.getElementById(CardOneCalenderTwo).style.display = "none";
  document.getElementById(CardOneTopThree).style.display = "none";
  document.getElementById(CardOneViewMap).style.display = "none";
  document.getElementById(CardOnePopMain).style.width = "100%";
  document.getElementById(SectionOne).style.width = "93%";
  document.getElementById(SectionTwo).style.width = "93%";
  document.getElementById(SectionThree).style.width = "93%";
  document.getElementById(SectionFour).style.width = "93%";
  document.getElementById(SectionFive).style.width = "93%";
};

const OpenAlert = (AlertMsg, AlertMsg2, AlertMsg3, AlertMsg4, AlertMsg5) => {
  document.getElementById(AlertMsg).style.display = "block";
  document.getElementById(AlertMsg2).style.display = "none";
  document.getElementById(AlertMsg3).style.display = "none";
  document.getElementById(AlertMsg4).style.display = "none";
  document.getElementById(AlertMsg5).style.display = "none";
};
const OpenAlertCardTwo = (
  AlertMsg,
  AlertMsg2,
  AlertMsg3,
  AlertMsg4,
  AlertMsg5
) => {
  document.getElementById(AlertMsg).style.display = "none";
  document.getElementById(AlertMsg2).style.display = "block";
  document.getElementById(AlertMsg3).style.display = "none";
  document.getElementById(AlertMsg4).style.display = "none";
  document.getElementById(AlertMsg5).style.display = "none";
};
const OpenAlertCardThree = (
  AlertMsg,
  AlertMsg2,
  AlertMsg3,
  AlertMsg4,
  AlertMsg5
) => {
  document.getElementById(AlertMsg).style.display = "none";
  document.getElementById(AlertMsg2).style.display = "none";
  document.getElementById(AlertMsg3).style.display = "block";
  document.getElementById(AlertMsg4).style.display = "none";
  document.getElementById(AlertMsg5).style.display = "none";
};
const OpenAlertCardFour = (
  AlertMsg,
  AlertMsg2,
  AlertMsg3,
  AlertMsg4,
  AlertMsg5
) => {
  document.getElementById(AlertMsg).style.display = "none";
  document.getElementById(AlertMsg2).style.display = "none";
  document.getElementById(AlertMsg3).style.display = "none";
  document.getElementById(AlertMsg4).style.display = "block";
  document.getElementById(AlertMsg5).style.display = "none";
};
const OpenAlertCardFive = (
  AlertMsg,
  AlertMsg2,
  AlertMsg3,
  AlertMsg4,
  AlertMsg5
) => {
  document.getElementById(AlertMsg).style.display = "none";
  document.getElementById(AlertMsg2).style.display = "none";
  document.getElementById(AlertMsg3).style.display = "none";
  document.getElementById(AlertMsg4).style.display = "none";
  document.getElementById(AlertMsg5).style.display = "block";
};
const CloseAlert = (AlertMsg) => {
  document.getElementById(AlertMsg).style.display = "none";
};

const OpenRightPopUp = (OpenRightPopUp) => {
  document.getElementById(OpenRightPopUp).style.display = "block";
};
const CloseRightPopUp = (CloseRightPopUp) => {
  document.getElementById(CloseRightPopUp).style.display = "none";
};
const OpenLeftPopup = (OpenLeftPopUp) => {
  document.getElementById(OpenLeftPopUp).style.display = "block";
};

const CloseLeftPopup = (CloseLeftPopUp) => {
  document.getElementById(CloseLeftPopUp).style.display = "none";
};
// Calender JS //

var currentMonth = 0,
  currentYear = 2022,
  monthMap = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
$dayList = $(".days");

var addDayElement = function (date, $container) {
  var element = $(document.createElement("div")).addClass("date");
  if (date.getMonth() !== currentMonth) {
    element.addClass("out-of-scope");
  }
  element.text(date.getDate());
  $container.append(element);
};

var getFirstLastDates = function (date) {
  var startDate, endDate;
  //First, find the first Monday prior to the beginning of the current month.
  startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  while (startDate.getDay() !== 1) {
    startDate.setDate(startDate.getDate() - 1);
  }
  //Now, find the Sunday nearest the last day of the current month.
  endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  while (endDate.getDay() !== 0) {
    endDate.setDate(endDate.getDate() + 1);
  }
  return [startDate, endDate];
};

var renderDays = function (dateRange) {
  $dayList.empty();
  var startDate = dateRange[0],
    endDate = dateRange[1],
    currentDate = startDate;

  while (currentDate <= endDate) {
    addDayElement(currentDate, $dayList);
    currentDate.setDate(currentDate.getDate() + 1);
  }
};

var loadCalendar = function (date) {
  $(".headline .month").text(monthMap[currentMonth]);
  $(".headline .year").text(currentYear);
  renderDays(getFirstLastDates(date));
};

//start us off on the current month & date;
loadCalendar(new Date());

$(".days").on("click", ".date", function (e) {
  $(".date").removeClass("selected");
  $(this).addClass("selected");
});

$(".click-left").on("click", function (e) {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  loadCalendar(new Date(currentYear, currentMonth));
});

$(".click-right").on("click", function (e) {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  loadCalendar(new Date(currentYear, currentMonth));
});

// Calender end

const OpenProgressBar = (ProgressBar) => {
  if (document.getElementById(ProgressBar).style.display == "block") {
    document.getElementById(ProgressBar).style.display = "none";
  } else {
    document.getElementById(ProgressBar).style.display = "block";
  }
};
const OpenExtraContainer = (OpnContainer) => {
  document.getElementById(OpnContainer).style.display = "block";
};
const CloseExtraContainer = (CloseContainer) => {
  document.getElementById(CloseContainer).style.display = "none";
};
const OpenPopUpSuggestion = (OpenSuggestion) => {
  document.getElementById(OpenSuggestion).style.display = "block";
};
const ClosePopUpSuggestion = (CloseSuggestion) => {
  document.getElementById(CloseSuggestion).style.display = "none";
};

// Responsive Card
const SowCardsOffCard = (id, id2) => {
  document.querySelector(id).style.display = "block";
  document.querySelector(id2).style.display = "none";
  console.log(id, id2);
};

const ShowPopupCardone = (CardOnePupUpMain) => {
  if (document.getElementById(CardOnePupUpMain).style.display == "block") {
    document.getElementById(CardOnePupUpMain).style.display = "none";
  } else {
    document.getElementById(CardOnePupUpMain).style.display = "block";
  }
};
const ShowPopuptwoCardOne = (CardOnePupUpMain) => {
  if (document.getElementById(CardOnePupUpMain).style.display == "block") {
    document.getElementById(CardOnePupUpMain).style.display = "none";
  } else {
    document.getElementById(CardOnePupUpMain).style.display = "block";
  }
};
const ShowSmallScreenCalenderOne = (
  SmallCardCalender,
  CalenderTwo,
  topThree,
  ViewMap,
  PeriodColor,
  PeriodDateColor,
  PeriodColorTwo,
  PeriodDateColorTwo
) => {
  document.getElementById(SmallCardCalender).style.display = "block";
  document.getElementById(CalenderTwo).style.display = "none";
  document.getElementById(topThree).style.display = "none";
  document.getElementById(ViewMap).style.display = "none";
  document.getElementById(PeriodColor).style.color = "#333";
  document.getElementById(PeriodDateColor).style.color = "#333";
  document.getElementById(PeriodColorTwo).style.color = "#fff";
  document.getElementById(PeriodDateColorTwo).style.color = "#fff";
};
const TopThreeSmallCard = (
  SmallCardCalender,
  CalenderTwo,
  topThree,
  ViewMap,
  PeriodColor,
  PeriodDateColor,
  PeriodColorTwo,
  PeriodDateColorTwo
) => {
  document.getElementById(SmallCardCalender).style.display = "block";
  document.getElementById(CalenderTwo).style.display = "none";
  document.getElementById(topThree).style.display = "none";
  document.getElementById(ViewMap).style.display = "none";
  document.getElementById(PeriodColor).style.color = "#fff";
  document.getElementById(PeriodDateColor).style.color = "#fff";
  document.getElementById(PeriodColorTwo).style.color = "#fff";
  document.getElementById(PeriodDateColorTwo).style.color = "#fff";
};
const ShowTopSevenSmallCard = (TopSeven) => {
  if (document.getElementById(TopSeven).style.display == "block") {
    document.getElementById(TopSeven).style.display = "none";
  } else {
    document.getElementById(TopSeven).style.display = "block";
  }
};
const CustomizeViewSmallCard = (
  CardOneCalenderOneCardOne,
  CardOneCalenderTwoCardOne,
  TopPerforper,
  ViewMapSmall,
  PeriodColor,
  PeriodDateColor,
  PeriodColorTwo,
  PeriodDateColorTwo
) => {
  document.getElementById(CardOneCalenderOneCardOne).style.display = "none";
  document.getElementById(CardOneCalenderTwoCardOne).style.display = "none";
  document.getElementById(TopPerforper).style.display = "none";
  document.getElementById(ViewMapSmall).style.display = "none";
  document.getElementById(PeriodColor).style.color = "#fff";
  document.getElementById(PeriodDateColor).style.color = "#fff";
  document.getElementById(PeriodColorTwo).style.color = "#fff";
  document.getElementById(PeriodDateColorTwo).style.color = "#fff";
};

// Hamburger Menu

const OpenHamburger = (hamBurgerMenu) => {
  if (document.getElementById(hamBurgerMenu).style.display == "block") {
    document.getElementById(hamBurgerMenu).style.display = "none";
  } else {
    document.getElementById(hamBurgerMenu).style.display = "block";
  }
};
const ShowScteMenu = (ScteMenu) => {
  if (document.getElementById(ScteMenu).style.display == "block") {
    document.getElementById(ScteMenu).style.display = "none";
  } else {
    document.getElementById(ScteMenu).style.display = "block";
  }
};

// Section Utilization Start

let chartConfig = {
  graphset: [
    {
      type: "ring",
      backgroundColor: "none",
      legend: {
        item: {
          cursor: "pointer",
        },
        mediaRules: [
          {
            visible: false,
          },
        ],
      },
      plot: {
        valueBox: [
          {
            type: "all",
            text: "%t",
            placement: "out",
          },
          {
            visible: false,
          },
        ],
        animation: {
          effect: "ANIMATION_EXPAND_VERTICAL",
          sequence: "ANIMATION_BY_PLOT_AND_NODE",
        },
        borderWidth: "0px",
        slice: "50%",
      },
      plotarea: {
        margin: "70px 0px 10px 0px",
        backgroundColor: "transparent",
        borderRadius: "10px",
        borderWidth: "0px",
      },
      scaleR: {
        refAngle: 300,
      },
      series: [
        {
          text: "0.0%",
          values: [0],
          backgroundColor: "#079FCE",
        },
        {
          text: "7.1%",
          values: [1306],
          backgroundColor: "#079FCE",
        },
        {
          text: "1.0%",
          values: [189],
          backgroundColor: "#4EE2C0",
        },
        {
          text: "9.6%",
          values: [1763],
          backgroundColor: "#EF32FF",
        },
        {
          text: "0.4%",
          values: [75],
          backgroundColor: "#DCB337",
        },
        {
          text: "57.1%",
          values: [10497],
          backgroundColor: "#FF325E",
        },
        {
          text: "24.8%",
          values: [4554],
          backgroundColor: "#7FC2F9",
        },
      ],
    },
  ],
};
// Zinc chart
zingchart.render({
  id: "myChart",
  data: chartConfig,
  height: "350px",
  width: "350px",
});

var myConfigmobile = {
  backgroundColor: "transparent",
  type: "ring",
  plot: {
    slice: "55%",
    borderWidth: 0,
    animation: {
      effect: 2,
      sequence: 3,
    },
    "value-box": {
      placement: "out",
      "offset-r": "-10",
    },
  },
  series: [
    {
      text: "Courses",
      values: [10497],
      lineWidth: 1,
      backgroundColor: "#FF325E",
      fontWeight: "lighter",
    },
    {
      text: "Chapter",
      values: [4554],
      lineWidth: 1,
      backgroundColor: "#7FC2F9",
    },
    {
      text: "Foundation",
      values: [1],
      lineWidth: 1,
      backgroundColor: "#3D4760",
    },
    {
      text: "Certifications",
      values: [1306],
      lineWidth: 1,
      backgroundColor: "#079FCE",
    },
    {
      text: "Volunteers",
      values: [189],
      lineWidth: 1,
      backgroundColor: "#4EE2C0",
    },
    {
      text: "Websites",
      values: [1763],
      lineWidth: 1,
      backgroundColor: "#EF32FF",
    },
    {
      text: "EXPO",
      values: [75],
      lineWidth: 1,
      backgroundColor: "#DCB337",
    },
  ],
};

zingchart.render({
  id: "mymobileChart",
  data: {
    graphset: [myConfigmobile],
  },
  height: "335",
  width: "335",
});

// let mobileChartConfig = {
//   graphset: [
//     {
//       type: "ring",
//       backgroundColor: "none",
//       legend: {
//         item: {
//           cursor: "pointer",
//         },
//         mediaRules: [
//           {
//             visible: false,
//           },
//         ],
//       },
//       plot: {
//         valueBox: [
//           {
//             type: "all",
//             text: "%t",
//             placement: "out",
//           },
//           {
//             visible: false,
//           },
//         ],
//         animation: {
//           effect: "ANIMATION_EXPAND_VERTICAL",
//           sequence: "ANIMATION_BY_PLOT_AND_NODE",
//         },
//         borderWidth: "0px",
//         slice: "50%",
//       },
//       plotarea: {
//         margin: "70px 0px 10px 0px",
//         backgroundColor: "transparent",
//         borderRadius: "10px",
//         borderWidth: "0px",
//       },
//       scaleR: {
//         refAngle: 300,
//       },
//       series: [
//         {
//           text: "0.0%",
//           values: [0],
//           backgroundColor: "#079FCE",
//         },
//         {
//           text: "7.1%",
//           values: [1306],
//           backgroundColor: "#079FCE",
//         },
//         {
//           text: "1.0%",
//           values: [189],
//           backgroundColor: "#4EE2C0",
//         },
//         {
//           text: "9.6%",
//           values: [1763],
//           backgroundColor: "#EF32FF",
//         },
//         {
//           text: "0.4%",
//           values: [75],
//           backgroundColor: "#DCB337",
//         },
//         {
//           text: "57.1%",
//           values: [10497],
//           backgroundColor: "#FF325E",
//         },
//         {
//           text: "24.8%",
//           values: [4554],
//           backgroundColor: "#7FC2F9",
//         },
//       ],
//     },
//   ],
// };
// zingchart.render({
//   id: "myChart",
//   data: mobileChartConfig,
//   height: "350px",
//   width: "350px",
// });

//

$(document).ready(function () {
  $(".close_icon").click(function () {
    $(".click_to_show").fadeOut();
  });
  $(".add_more").click(function () {
    $(".click_to_show").fadeIn();
  });

  $(".click-div").on("click", function () {
    // $('.upper_container').slideUp();
    $(this).parent().find(".upper_container").slideToggle();
  });
  $(".text_upper i").on("click", function () {
    $(".upper_container").slideUp();
  });

  $(".popup_dots ").on("click", function () {
    $(".popup_inner").fadeOut();
    $(this).parent().find(".popup_inner").fadeIn();
  });
  $(".icon_close i").on("click", function () {
    $(".popup_inner").fadeOut();
  });
  $(".graph_outer ").on("click", function () {
    $(".popup_graph_ex").fadeOut();
    $(this).parent().find(".popup_graph_ex").fadeIn();
  });
  $(".icon_close i").on("click", function () {
    $(".popup_graph_ex").fadeOut();
  });

  $(".alone_click ").on("click", function () {
    $(".alone_popup").fadeOut();
    $(this).parent().find(".alone_popup").fadeIn();
  });
  $(".icon_close i").on("click", function () {
    $(".popup_inner").fadeOut();
  });

  $(".color_txt ").on("click", function () {
    $(".popup_suggestion").fadeOut();
    $(this).parent().find(".popup_suggestion").fadeIn();
  });
  $(".head_primary .fa-close").on("click", function () {
    $(".popup_suggestion").fadeOut();
  });

  /* */
  $(".clicked_suggestion i").on("click", function () {
    $(".popup_suggestion").fadeOut();
  });
  $(".click-nav").on("click", function () {
    $(".nav-hide").toggle();
  });
  $(".image-click").on("click", function () {
    $(".image-show").toggle();
  });

  // Menu toggle
  $(".calender_container > div").click(function () {
    $(".click_calender").removeClass("head_tex");
    $(this).find(".click_calender").toggleClass("head_tex");
    if (!$(this).hasClass("ads")) {
      $(".calender_wrapper").slideUp();
      $(this).find(".calender_wrapper").slideToggle();
      $(".calender_container > div").removeClass("ads");
      $(this).addClass("ads");
    }
    if ($(this).data("view") === "yaba-daba") {
      $(this).closest(".upper_container").addClass("extra-width");
    } else {
      $(this).closest(".upper_container").removeClass("extra-width");
    }
    if ($(this).data("view") === "third") {
      $(this).addClass("set_bc");
    } else {
      $(".calender_container > div").removeClass("set_bc");
    }
  });
  $(".view_all").click(function () {
    $(".last_seven").slideToggle();
  });

  $(".open_close_div > div > div.wifi_container > div").on(
    "click",
    function () {
      $(this).parent().parent().find(".progress_section").slideToggle();
      $(this).toggleClass("clr_white");
    }
  );
  $("#myUpDiv").on("click", function () {
    let vheight = $(window).height();

    $("html, body").animate(
      {
        scrollTop: (Math.ceil($(window).scrollTop() / vheight) - 1) * vheight,
      },
      500
    );
  });
  $("#myBottomDiv").on("click", function () {
    let vheight = $(window).height();
    $("html, body").animate(
      {
        scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight,
      },
      500
    );
  });
  allAnimations();
  resanimationFirst();
  resanimationThird();
  resanimationSecond();
});

let val = 0,
  val2 = 0;
$(document).on("scroll", function () {
  allAnimations();
});
function allAnimations() {
  let viewportHeight = $(window).height();
  let cal = null;
  if ($(".comcast_section_u").length) {
    cal = $(".comcast_section_u").offset();
    if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
      if (val === 0) {
        animationFirst();
        animationSecond();
        $("#container_svg").show();
        val = 1;
      }
    }
    cal = $(".progress_image").offset();
    if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
      if (val2 === 0) {
        animationThird();
        val2 = 1;
      }
    }
  }

  // prog_1_1_1
  cal = $(".prog_1_1_1").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_1_1 .progress-bar").css(
      "width",
      $(".prog_1_1_1 .progress-bar").data("percentage") + "%"
    );
  }
  cal = $(".prog_1_1_2").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_1_2 .progress-bar").css(
      "width",
      $(".prog_1_1_2 .progress-bar").data("percentage") + "%"
    );
  }

  // prog_1_1_1
  cal = $(".prog_1_1_1").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_1_1 .progress-bar").css(
      "width",
      $(".prog_1_1_1 .progress-bar").data("percentage") + "%"
    );
  }

  // prog_1_1_2
  cal = $(".prog_1_1_2").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_1_2 .progress-bar").css(
      "width",
      $(".prog_1_1_2 .progress-bar").data("percentage") + "%"
    );
  }

  // prog_1_2_1
  cal = $(".prog_1_2_1").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_2_1 .progress-bar").css(
      "width",
      $(".prog_1_2_1 .progress-bar").data("percentage") + "%"
    );
  }
  // prog_1_2_2
  cal = $(".prog_1_2_2").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_2_2 .progress-bar").css(
      "width",
      $(".prog_1_2_2 .progress-bar").data("percentage") + "%"
    );
  }
  // prog_1_3_1
  cal = $(".prog_1_3_1").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_3_1 .progress-bar").css(
      "width",
      $(".prog_1_3_1 .progress-bar").data("percentage") + "%"
    );
  }

  // prog_1_3_2
  cal = $(".prog_1_3_2").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_3_2 .progress-bar").css(
      "width",
      $(".prog_1_3_2 .progress-bar").data("percentage") + "%"
    );
  }

  // prog_1_4_1
  cal = $(".prog_1_4_1").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_4_1 .progress-bar").css(
      "width",
      $(".prog_1_4_1 .progress-bar").data("percentage") + "%"
    );
  }
  // prog_1_3_2
  cal = $(".prog_1_4_2").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_4_2 .progress-bar").css(
      "width",
      $(".prog_1_4_2 .progress-bar").data("percentage") + "%"
    );
  }
  if ($(this).scrollTop() > 0) {
    $("#myUpDiv").addClass("teal_color");
  } else {
    $("#myUpDiv").removeClass("teal_color");
  }
  if ($(window).scrollTop() + $(window).height() != $(document).height()) {
    $("#myBottomDiv").addClass("teal_color");
  } else {
    $("#myBottomDiv").removeClass("teal_color");
  }
}

function animationFirst() {
  let circle1 = document.querySelector("svg .circle1");
  let percentageElement1 = document.querySelector(".percentage__num1");
  let i = 1;
  let percentageValue1 = percentageElement1.getAttribute("data-percentage");
  let totalLegth1 = 282.2865905761719 || circle1.getTotalLength();
  let counter;
  circle1.style.strokeDashoffset =
    totalLegth1 - (totalLegth1 * percentageValue1) / 100;
  // counter = setInterval(function() {
  //     (i <= percentageValue1) ? percentageElement1.innerHTML = i++ : clearInterval(counter);
  // }, 1000 / percentageValue1);
  let circle11 = document.querySelector("svg .circle11");
  let percentageElement11 = document.querySelector(".percentage__num11");
  let a = 0;
  let percentageValue11 = percentageElement11.getAttribute("data-percentage");
  let totalLegth11 = 282.2865905761719 || circle11.getTotalLength();
  let counter1;
  circle11.style.strokeDashoffset =
    totalLegth11 - (totalLegth11 * percentageValue11) / 100;
  let percentageElement121 = document.querySelector(".percentage__num121");
  let percentageValue121 = percentageElement121.getAttribute("data-percentage");
  counter1 = setInterval(function () {
    a = a + 89;
    if (a <= percentageValue121) {
      percentageElement121.innerHTML = a;
    } else {
      percentageElement121.innerHTML = percentageValue121;
      clearInterval(counter1);
    }
  }, 1000 / percentageValue121);
}

function animationSecond() {
  let circle2 = document.querySelector("svg .circle2");
  let percentageElement1 = document.querySelector(".percentage__num2");
  let i = 1;
  let percentageValue1 = percentageElement1.getAttribute("data-percentage");
  let totalLegth1 = 282.2865905761719 || circle2.getTotalLength();
  let counter;
  circle2.style.strokeDashoffset =
    totalLegth1 - (totalLegth1 * percentageValue1) / 100;
  counter = setInterval(function () {
    i <= percentageValue1
      ? (percentageElement1.innerHTML = i++)
      : clearInterval(counter);
  }, 1000 / percentageValue1);
}

function animationThird() {
  let percentageElement1 = document.querySelector(".percentage__num3");
  let i = 1;
  let percentageValue1 = percentageElement1.getAttribute("data-percentage");
  let counter;
  counter = setInterval(function () {
    i <= percentageValue1
      ? (percentageElement1.innerHTML = i++)
      : clearInterval(counter);
  }, 1000 / percentageValue1);
}

// Slider

$(".slider").each(function () {
  var $this = $(this);
  var $group = $this.find(".slide_group");
  var $slides = $this.find(".slide");
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;

  function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(":animated") || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass("active");
    bulletArray[newIndex].addClass("active");

    if (newIndex > currentIndex) {
      slideLeft = "100%";
      animateLeft = "-100%";
    } else {
      slideLeft = "-100%";
      animateLeft = "100%";
    }

    $slides.eq(newIndex).css({
      display: "block",
      left: slideLeft,
    });
    $group.animate(
      {
        left: animateLeft,
      },
      function () {
        $slides.eq(currentIndex).css({
          display: "none",
        });
        $slides.eq(newIndex).css({
          left: 0,
        });
        $group.css({
          left: 0,
        });
        currentIndex = newIndex;
      }
    );
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (currentIndex < $slides.length - 1) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 6000);
  }

  $(".next_btn").on("click", function () {
    if (currentIndex < $slides.length - 1) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  $(".previous_btn").on("click", function () {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  $.each($slides, function (index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass("active");
    }
    $button
      .on("click", function () {
        move(index);
      })
      .appendTo(".slide_buttons");
    bulletArray.push($button);
  });

  advance();
});

AOS.init();
