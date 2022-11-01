


let report=new XMLHttpRequest();

report.open("Get","https://restcountries.com/v3.1/all",true);

report.send();

report.onload=()=>{

    var data=JSON.parse(report.response);

     //question 1:

    let country=data.filter((element)=>element.region=="Asia");
    console.log(country);
    //question 2:

    let country1=data.filter((element)=>element.population<2,00,000=="Asia")
    console.log(country1);
    // //question 3:

    let country3=data.filter((element)=>element.region=="Asia")
    country3.forEach(element => {
        element.name;
        element.flag;
        element.capital;
        console.log(element)
    });

    //question 4:

       let population=data.map((element)=>element.population)
       population.reduce((acc,cv)=>acc+cv)
       console.log(population)

     
         

         //question 5

        let country4=data.filter((element)=>{

            for(let key in element.currencies){
                if(element.currencies[key].USD="United States dollar")
                console.log(element.name)}}
        
                )
            }

          

