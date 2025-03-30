import React, { useEffect, useState } from "react";

const Admin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this URL with your API endpoint
    const apiURL = "https://jsonplaceholder.typicode.com/posts"; 

    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        const result = await response.json();
        // Set only the required data (first 10 rows for example)
        setData(result.slice(0, 10)); // Adjust slice as per your requirements
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic Table</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
          marginBottom: "20px",
        }}
        border="1"
      >
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>

              <td>{index+1}</td>
              <td>{item.customerName}</td>
              <td>{item.contact}</td>
              <td>{item.buySale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
