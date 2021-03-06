//SETS FUNCTION brain() TO A TIMER
var brainTimer = setInterval(brain, 1000/1);

function brain(){
  
  //CYCLES THROUGH ALL NEURONS
  for(var i=1;i<neurons.length;i++){
    var stateWeight = 0;
    
    //CHECKS TO SEE IF NEURON ISN'T RESERVED FOR INPUT (I.E. HAS CONNECTIONS)
    if(neurons[i].con != undefined){
      
      //FINDS WEIGHT OF ALL ACTIVATED NEURONS CONNECTED TO CURRENT NEURON
      for(var a=0;a<neurons[i].con.length;a++){
        if(neurons[neurons[i].con[a].index].state == true){
         stateWeight = stateWeight + neurons[i].con[a].weight; 
        }
      }
      
      //DEBUG
      console.log(stateWeight);
      
      //ASSIGNS STATE OF NEURON TO TRUE OR FALSE BASED ON WEIGHT
      if(stateWeight >= neurons[i].act){
       neurons[i].state = true; 
      }else{
       neurons[i].state = false; 
      }
    }
    
  }
  
  //LOGS CURRENT STATE OF NEURONS
  console.log(neurons);
};
//END FUNCTION brain()
