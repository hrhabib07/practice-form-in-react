import './App.css'
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SatefulForm from './Components/SatefulForm/SatefulForm'

function App() {
  const handleSignInSubmit = data =>{
    console.log("sign in data : ", data);
  }
  const handleUpdateSubmit = data =>{
    console.log("Update data: ", data);
  }

  return (
    <>
    
      <h1>Vite + React</h1>
     {/* <SubmitForm></SubmitForm> */}
     {/* <SatefulForm></SatefulForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     <ReuseableForm btnText="Sign In" handleSubmit={handleSignInSubmit}>
     <div>
        <h2>Sign In form</h2>
        <p>Please sign in from here</p>
      </div>
     </ReuseableForm>
     <ReuseableForm btnText="Update" handleSubmit={handleUpdateSubmit}>
      <div>
        <h2>Update form</h2>
        <p>You can now update anything from here</p>
      </div>
     </ReuseableForm>
    </>
  )
}

export default App
