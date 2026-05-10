// const h1 = document.createElement('h1');//tag h1
// h1.textContent = "Mani Sankar Pandit"; //childern
// h1.className = 'element';//attributes
// h1.id = 'first';//same
// h1.style.fontSize = "30px";//same
// h1.style.backgroundColor = "orange";
// h1.style.color = "white";

// const h2 = document.createElement('h2');
// h2.textContent = "Netaji Subhash Engineering College";
// h2.className = 'element';
// h2.id = 'second';
// h2.style.fontSize = "30px";
// h2.style.backgroundColor = "pink";
// h2.style.color = "green";

//we can solve this problem using function call we can not every time 

////how to create attributes and element
// attributes = {
//     classname:"element",
//     id:"first"
// }

// element={
//     tag:"h1",
//     textContent:"MANi SANKAR PANDIT"
// }

// const React ={ //in one word react is js object 
//     createElement :function (tag,attributes,children){
//     const element = document.createElement(tag);
//     element.textContent = children;
//     //pass the attribute using loop 
//     for(const key in attributes){
//         if(key==='style'){
//             Object.assign(element.style , attributes.style); 
//             //Object.assign ak object ka property ko dusre object mai copy korta hai
//         }
//         else{
//              element[key] = attributes[key];
//         }
//     }
//     return element;
// }
// }

// const ReactDOM = {
//     render:function(child,parent){
//         parent.append(child);
//     }
// }

// const h1 = React.createElement("h1",{className:"element",id:"first",style:{fontSize :"30px",backgroundColor : "orange",color : "white"}},"MANi SANKAR PANDIT")
// const h2 = React.createElement("h2",{className:"element",id:"second",style:{fontSize :"30px",backgroundColor : "pink",color : "green"}},"Netaji Subhash Engineering College")


// const root =document.getElementById('root');
// // root.append(h1);
// // root.append(h2);
// ReactDOM.render(h1,root);
// ReactDOM.render(h2,root);



//orginal react
 const mainroot =  document.getElementById('root');

const React ={
    createElement:function(type,props,children){
    return{
        type:type,
        props:{
            ...props,
            children:children
        }
    }
}
}

// const reacrEle = {
//     type : 'h1',
//     props:{
//         className:"element",
//         id:"first",
//         style:{fontSize :"30px",backgroundColor : "orange",color : "white"},
//         childern:"MANi SANKAR PANDIT"
//     }
// }

const ReactDOM = {
    render:function(reactEle,root){
        const ele  = document.createElement(reactEle.type);
        const {props} = reactEle;
        for(const key in props){
            if(key==='style'){
                Object.assign(ele.style,props.style)
            }
            else if(key==='children'){
                ele.textContent = props[key];
            }
            else{
                ele[key] = props[key];
            }
        }
        root.append(ele);
    }
}

const h1 = React.createElement("h1",{className:"element",id:"first",style:{fontSize :"30px",backgroundColor : "orange",color : "white"}},"MANi SANKAR PANDIT")
const h2 = React.createElement("h2",{className:"element",id:"second",style:{fontSize :"30px",backgroundColor : "pink",color : "green"}},"Netaji Subhash Engineering College")
  
ReactDOM.render(h1,mainroot);
ReactDOM.render(h2,mainroot);
