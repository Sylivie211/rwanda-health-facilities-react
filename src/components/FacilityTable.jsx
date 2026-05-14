function FacilityTable({facilities}) {
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th> 
                <th>TYPE</th>
                <th>DISTRICT</th>
                <th>SERVICES</th>
            </tr>
        </thead>
        <tbody>
            {facilities.map(facility =>{return(
            <tr key ={facility.id}>
                <td>{facility.id}</td>
                <td>{facility.name}</td>
                <td>{facility.type}</td>
                <td>{facility.district}</td>
                <td>{facility.services.join(",")}</td>
            </tr>
            )})}
        </tbody>
    </table>
  )
}

export default FacilityTable
