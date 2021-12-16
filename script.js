let ruleDiv = document.createElement('div')

let main = document.querySelector('body');



ruleDiv.className = "class"



main.append(ruleDiv);



    for(let i = 0; i < 256; i++){


    

        let oneDiv = document.createElement('div');
    
        oneDiv.className = 'each'
        
        ruleDiv.append(oneDiv);
    
       
        
    
        // for(j = 0; j<= 16; j++){
        
        // }
        
    }

    
    

    let newEle = document.querySelectorAll('.each')

  

    for(let i = 0; i< newEle.length; i++){
        newEle[i].addEventListener('mouseover',()=>{
            newEle[i].style.backgroundColor = `rgba()`;
        })
    }









// let userInput = prompt("Enter a value between 1 and 64")




// pickr 



// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('change', (color, source, instance) => {
    let finalColor = color.toRGBA()
    
});
