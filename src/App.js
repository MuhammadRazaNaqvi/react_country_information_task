import './App.css';
import './Page1.js';

function App(props) {





  return (
    <>
    <div className="App">
      <header className="App-header">
      <form>
      <div>
      <label className="form-label">Last name</label>
      <input  type="text" className="form-control" id="country" placeholder="Raza" required />
    </div>

  <button onClick={props.input}>Add Country</button>
  <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Common Name</th>
      <th scope="col">Official Name</th>
      <th scope="col">Languages</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
</table>

</form>

        
      </header>
    </div>

    <div>
      <Page1/>

    </div>

 </>

  );
}

export default App;
