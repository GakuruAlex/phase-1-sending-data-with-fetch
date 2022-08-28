// Add your code here

const submitData =(userName,userEmail)=>{
    let dataSubmitted={
        name:userName,
        email:userEmail

            };
            let userData=  JSON.stringify(dataSubmitted);



        let fetchRes=fetch(`http://localhost:3000/users`,{
            method:"POST",
            headers:{
            "Content-Type":"application/json",
            Accept:"application/json"
            },
            body:userData,
            });

        fetchRes.then((response)=> response.json())
        .then((data)=>{

            document.body.innerHTML=data[`id`];

        })
        .catch(function (error) {

            document.body.innerHtml=error.message

          });


          return fetchRes;
}

