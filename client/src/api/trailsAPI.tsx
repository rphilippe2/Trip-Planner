const fetchTrailsByCity = async (city: string) => {
  const url = new URL(
    `prescriptiontrails.org/api/filter/?by=city&city=${city}&offset=0&count=6`
  );
  try {
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trail data:", error);
  }
};

export { fetchTrailsByCity };
