// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");

// const element2 = React.createElement('div',null, 
//     React.createElement('h1',null,"Hello"), 
//     React.createElement('h2',null,"hi"));


// JSX: javascript XML: Look like HTML (Babel)
// JSX --> React.createELement() --> React Element(JS Object) --> Real DOM(HTML ELEMENT)
//     babel                    React                        RectDOM

// <h1 id="title">Hello Coder Army</h1> --> React.createElement('h1',{id:'title'},"Hello Coder Army") --> {type:"h1", props:{id:"title", children:"Hello Coder Army"}} --> <h1 id="title">Hello Coder Army</h1>
// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");

//This is react element

// const element = <h1 id="title">Hello coder army</h1>

// const element2 = (<div>
//     <h1>Hello</h1>
//     <h2>Hi</h2>
// </div>);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element2);
// root.render(element);

//React Compment

// function App(name){
//     return(
//         <h1>Hello World {name}</h1>
//     );
// }
// const a = App("Mani")
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(a);
//we are also call this function like this
// root.render(<App/>);

// const age  = 10;
// const ele = <h1>Hello Coder {age>12 ?"Adult":"Kid"} </h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ele);

// const course = ["HTML","CSS","JS","React"];
// /* <li>HTML</li>,<li>CSS</li>,<li>JS</li>,<li>React</li> */
// const element = (
//     <ul>
//         {course.map(course=><li>{course}</li>)}
//     </ul>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// function App(props){
//     return(
//         <h1>Hello World {props.name} {props.age} </h1>
//     )
// }
// const element = <App name="Mani" age = {21}></App>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// const ab = {backgroundColor:"orange", color:"White"}
// const element = <h1 id="title" className="First" style={ab}>Hello coder army</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


//mini project
function Header({name}){

    return (
        <h1>{name} Welcome to Indian Election Commission Website</h1>
    )
}

// const props = {
//     name:"Rohit"
// }

// const {name} = props;
function Main({user}){

    return (
        <>
        <h2>Hi {user.name}</h2>
        <h3>{user.age>18? "You are eligible for vote": "You are not eligible for vote"}</h3>
        <p>Your city is {user.city}</p>
        </>
        
    )
}

function Footer(){

    return (
        <h3>Thanks for visiting our website</h3>
    )
}

function App(){

    return (
        <>
       <Header name="Mani"></Header>
       <Main user={{name:"Mani",age:21,city:"Kolkata"}}></Main>
       <Footer />
       </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);