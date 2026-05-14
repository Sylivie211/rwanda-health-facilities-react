

function FacilityCard({ id, name, type, district, services }) {
    return (
        <div className="card">
            <div className="card-top">
                <span>🏥</span>
                <h3>{name}</h3>
            </div>
            <div className="card-details">
                <p><strong>Type:</strong> {type}</p>
                <p><strong>District:</strong> {district}</p>
                <p><strong>Services:</strong> {services.join(",")}</p>
            </div>
        </div>
    )
}

export default FacilityCard