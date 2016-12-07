var fs=require('fs'); 

fs.readFile('lol.csv',"utf8",function(err,data){  
    if(err)  
        throw err;  
          
    
    var arr=[];
    arr=data.split('\r');

    var myData=[];
    var myJson={};

    for(var i=0;i<arr.length;i++){
		var val=arr[i].split(',');
		myJson={
			[i+1]:{
				"name":val[0],
				"fullname":val[1],
				"enname":val[2],
				"nickname":val[3],
				"img":val[2]+".png"
			}
		}

		myData.push(myJson);
    }
    console.log(myData);

    fs.writeFile('LOLHero.json',JSON.stringify(myData),function(err){  
        if(err) throw err;  
        console.log('write JSON into JSON');  
    });  
}); 