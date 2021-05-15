import axios from "axios";

const localhost = "http:/127.0.0.2:8000/api/v1";

export async function getAllProperties(userId,jwt) {
  console.log(userId,jwt);
  const result = await fetch(`http://127.0.0.2:8000/api/v1/user/${userId}/property`,{
    method: "GET",
    headers:{
      "authorization":`Bearer ${jwt}`
    }
  });
  const data = await result.json();
  return data.data.properties; 
};

export async function getWholeProperty(userId){
  const result = await fetch("http://127.0.0.2:8000/api/v1/wholeproperty");
  const data = await result.json();
  return data.wholeProperty;
}
export async function getdailyProperty() {
  const result = await fetch("http://127.0.0.2:8000/api/v1/dailyproperty");
  const data = await result.json();
  
  return data.dailyProperties;
}