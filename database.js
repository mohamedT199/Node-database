const fs = require('fs')




const path = './database_file.txt'


module.exports.add = (e_mail)=>{
    if(!fs.existsSync(path)){
        fs.writeFileSync(path , ',')
    }


    fs.readFile('/home/kali/nodeProject/database_file.txt', (err, data) => {
        if (err) {
            throw err ; 
        };
        //console.log(data.toString());
        const arrayy = data.toString().split(",") ; 
        var flag = 0 ; 
        arrayy.forEach(e=>{
            if(e.match(e_mail)){
                flag = 1 ; 
            }
        });
        console.log(flag) ; 
        if(flag != 1 ){
            fs.appendFileSync(path , e_mail+',')
            console.log('email added')

        }
        else{
            console.log("email already exist")
        }
      });
  

        
} 
    

