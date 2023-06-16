import ParksList from "../ParksList"

export default function Parks() {

    
    return (
    <>
    <div className="App">
      <h3>Select Search Option</h3>

      <input type="radio" name="type" value="Location" id="location" />
      <label htmlFor="regular">By Location</label>

      <input type="radio" name="type" value="ParkType" id="parktype" />
      <label htmlFor="medium">By Park Type</label>
    </div>
    <div>
      <h1>National Parks List</h1>
      <ParksList></ParksList>
    </div>
    </>
   
)} 