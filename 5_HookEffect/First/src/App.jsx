import { useEffect, useState } from "react";

export default App;

function App(){

  const [users,setUser] = useState([]);
  // const [name,setName] = useState("");
  const [count,setCount] = useState(10);

  //without useEfffect hook // multipal function call
  // async function githubProfile() {

  //   const responce = await fetch("https://api.github.com/users");
  //   const data = await responce.json();
  //   setUser(data);
  // }
  // githubProfile(); 

  // with useEfffect hook -> single fuction call
  useEffect(()=>{
    async function githubProfile(count = 10) {

    const responce = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await responce.json();
    setUser(data);
    }
    githubProfile(); 
  },[count]);

  // function handleChange(e){
  // setName(e.target.value.toUpperCase());
  // }
 

  return(
    <>
    <h1>Github User</h1>
    {/* <input type="text" value={name} onChange={handleChange}></input> */}
    <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}></input> 
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"10px"}}>
      {
        users.map(user=>(
          <img src={user.image} height={"100px"} width={"100px"}  key={user.id}/>
        ))
      }
      </div>
    </>
  )
}-21

















