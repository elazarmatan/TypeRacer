export default function keepLeaderboard(record:number,name:string){
    const user = {name:name,record:record}
    let dataExist
    try {
    dataExist = JSON.parse(localStorage?.getItem("Leaderboard") ?? "[]");
  } catch (error) {
    dataExist = [];
  }
  const filterData = dataExist.filter((leader:{name:string}) => leader.name === user.name)
  let newData
  if(filterData.length){
    if(filterData[0].record < user.record){
        newData = dataExist.map((leader:{name:string,record:number}) => {
        return leader.name !== filterData[0].name ? leader : user
    })
    }
    else{
        newData = dataExist
    }
  }
  else{
    newData = dataExist
    newData.push(user)
  }
  localStorage.setItem("Leaderboard", JSON.stringify(newData));
}