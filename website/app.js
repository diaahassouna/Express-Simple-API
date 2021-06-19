const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: "POST", 
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json",
      },       
      body: JSON.stringify(data), 
    });

    //console.log(response);
      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

postData('/add', {answer:42, name: "Ali"});
postData('/add', {answer:50, name: "Alaa"});