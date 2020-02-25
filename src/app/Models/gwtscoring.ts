export class GWTScoring { // Individual/per player
    goldpoints: number; // 5 Gold = 1 point (rounded down)
    buildingspoints: number;
    deliveriespoints: number;
    trainstationspoints: number;
    hazardspoints: number;
    cowspoints: number;
    goalspoints: number;
    stationmastertilespoints: number;
    hiredpeoplepoints: number;
    playerboardunlockpoints: boolean; // 3 points if unlocked.
    gamefinisherpoints: boolean; // 2 points if player triggered game end.
    totalpoints: number;
}
