import React from 'react';

import HomeComponent from "./components/home/HomeComponent";
import AllLeagueComponent from "./components/all_leagues/AllLeagueComponent";
import PopularCompunent from "./components/popular/popular";
import GoalOfTheWeekComponent from "./components/goals_of_the_week/GoalOfTheWeekComponent"
import NewHighlightComponent from "./components/parts/NewHighlightComponent";


const routes = [
    { path: '/', exact: true, main: () => <HomeComponent/> },
    { path: '/all_leagues', exact: false, main: () => <AllLeagueComponent/> },
    { path: '/popular', exact: false, main: () => <PopularCompunent/> },
    { path: '/goal_of_the_week', exact: false, main: () => <GoalOfTheWeekComponent/> },
    { path: '/news', exact: false, main: () => <NewHighlightComponent/> },
]

export default routes;