function format(value,lable){
    
    
    switch(lable){
        case "second": case "minute": case "hour": case "day":
            if (value != 1 ){
                return "Invalid";
            }
            else {
                return value;
            }
        case "seconds":
            if (value === 1 ){
                return "Invalid";
            }
            else {
                return value;
            }    
        case "minutes":
            if (value === 1 ){
                return "Invalid";
            }
            else {
                return value*60;
            }
        case "hours":
            if (value === 1 ){
                return "Invalid";
            }
            else {
                return value*60*60;
            }    
        case "days":               
            if (value === 1 ){
                return "Invalid";
            }
            else {
                return value*24*60*60;         
            }    
        default:
            return "Invalid";    
    }
}


function timeAdder(value1, label1, value2, label2){
    var seconds1 = format(value1, label1);
    var seconds2 = format(value2, label2);
    if (seconds1==="Invalid" || seconds2==="Invalid"){
        return ["Invalid","Invalid"];
    }
    var sec = seconds1 + seconds2;
    var value3 = sec;
    var label3 = (value3==1)? "second":"seconds"; 
    
    if (value3%60==0){
        value3 = value3/60;
        label3 = (value3==1)? "minute":"minutes";
    }    
    if (value3%60==0){
        value3 = value3/60;
        label3 = (value3==1)? "hour":"hours";
        
    }
    if (value3%24==0){
        value3 = value3/24;
        label3 = (value3==1)? "day":"days";
        
    }
    return [value3, label3];

}

console.log(timeAdder(20,"hours",4,"hours"));
console.log(timeAdder(20,"hours",5,"hours"));
