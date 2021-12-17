let ruleDiv = document.createElement('div')

let main = document.querySelector('body');




let gridNeeded = prompt("Enter desired grid size")


let clear = document.querySelector('.clear')

let givenColor ;

let randomNumberOne = 0;
let randomNumberTwo = 0;
let randomNumberThree = 0;
let num = 0;



gridNeeded = parseInt(gridNeeded)

grid = gridNeeded * gridNeeded

ruleDiv.className = "class"





main.append(ruleDiv);



    for(let i = 0; i < grid; i++){


    

        let oneDiv = document.createElement('div');
    
        oneDiv.className = 'each'
        
        ruleDiv.append(oneDiv);
    
        
    }

    let newEle = document.querySelectorAll('.each')


    function color(){
        for(let i = 0; i < newEle.length ; i++){
            newEle[i].style.backgroundColor = 'lightgoldenrodyellow';
            
        }
    }


    clear.addEventListener('click',()=>{
        gridNeeded = prompt ("Enter desired grid size")
        color();
    })



    let randColor = document.querySelector('.random')


        function truthyOrFalsey(){
            randColor.addEventListener('click',()=>{
                num++;
            })
        }
        
    


    for(let i = 0; i< newEle.length; i++){
        let heightAndWidth = 500 / gridNeeded 
        let parse = parseFloat(heightAndWidth)
        newEle[i].style.height = `${parse}px`;
        newEle[i].style.width = `${parse}px`;
        
        newEle[i].addEventListener('mouseover',()=>{
            truthyOrFalsey();
            console.log(num);
            if (num > 0) {
                randomNumberOne = Math.floor(Math.random() * 255);
                randomNumberTwo = Math.floor(Math.random() * 255);
                randomNumberThree = Math.floor(Math.random() * 255);
            }
            else {
                randomNumberOne = 0;
                randomNumberTwo = 0;
                randomNumberThree = 0;
            }
            newEle[i].style.backgroundColor = `rgba(${randomNumberOne},${randomNumberTwo},${randomNumberThree},100)`;
        })
    }
    
    
    

    

    
   

 

  

    