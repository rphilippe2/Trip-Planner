const fetchTrailsByCity = async (city: string) => {
  console.log("you are inside the trail ");
  try {
    
    const response = await fetch(`api/trails/${city}`, 
      {
      //mode: "no-cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(city),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // const data = await response.json();
    // return data.trails;
    console.log(response);
  } catch (err) {
    console.log("Error fetching trail data:", err);
  }
};

export { fetchTrailsByCity };


// trying diff code


// const fetchTrailsByCity = async (city: string, offset: number = 0, count: number=6) => {
//   const url = `https://prescriptiontrails.org/api/filter/?by=city&city=${city}&offset=${offset}&count=${count}`;

//   try {
//     const response = await fetch(url, {
//       mode: "no-cors",
//       headers: {
//         "Content-Type": "application/json",
//     }
//   });
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log("Error fetching trail data:", err);
//   }
// };

// export { fetchTrailsByCity };