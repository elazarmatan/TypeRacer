export default function getLeaderboard(){
    const dataExist = JSON.parse(localStorage?.getItem("Leaderboard") ?? "[]");
    return dataExist.sort((a:{record:number},b:{record:number}) => b.record - a.record)
}