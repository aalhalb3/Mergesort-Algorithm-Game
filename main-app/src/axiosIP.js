const ip = window.location.href;
module.exports = {
    getIP : function() {
        if(window.location.href == "http://localhost:3000/"){
            //console.log("ip");
            let iptemp = ip.split(":3000")[0]; 
            iptemp += ":3001/"
            console.log(iptemp)
            return iptemp; 
        }else {
            let iptemp = ip.split("/build")[0];
            iptemp += ":3001/"
            console.log(iptemp)
            return iptemp; 
        }
        
    },
}
    