import Header from './components/Header'
import Footer from './components/Footer'
import FacilityCard from './components/FacilityCard'
import FacilityTable from './components/FacilityTable'

// hard coded facilities
const facilities = [
  {
    id: 1,
    name: "Kigali University Teaching Hospital",
    type: "hospital",
    district: "Gasabo",
    services: ["emergency", "surgery", "maternity", "pediatrics"]
  },
  {
    id: 2,
    name: "Kibagabaga District Hospital",
    type: "hospital",
    district: "Gasabo",
    services: ["emergency", "maternity", "general"]
  },
  {
    id: 3,
    name: "Remera Health Center",
    type: "health_center",
    district: "Gasabo",
    services: ["consultation", "vaccination", "maternity"]
  },
  {
    id: 4,
    name: "Kicukiro Health Center",
    type: "health_center",
    district: "Kicukiro",
    services: ["consultation", "vaccination", "family planning"]
  },
  {
    id: 5,
    name: "Nyamirambo Clinic",
    type: "clinic",
    district: "Nyarugenge",
    services: ["consultation", "pharmacy"]
  }
];

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className='cards-container'>
          {facilities.map(facility =>{
          return(
          <FacilityCard 
            key = {facility.id}
            id = {facility.id}
            name = {facility.name}
            type = {facility.type}
            district = {facility.district}
            services = {facility.services}
          />);})}
        </section>
        <FacilityTable facilities= {facilities} />
      </main>
      <Footer />
    </div>

  )
}


export default App



