import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Pagination from "./components/Pagination"
import SearchForm from "./components/SearchForm"
import UserList from "./components/UserList"
import CreateUserModal from "./components/CreateUserModal"


function App() {
  const [showCreateUser, setShowCreatUser] = useState(false)
  const [forceRefresh,setForceRefresh] = useState(true)

  function addUser() {

    setShowCreatUser(true);
    console.log('add user')
  }

  function removeModal() {
    setShowCreatUser(false)
  }

  function submitModal(event) {
    event.preventDefault();

    let data = new FormData(event.target)

    let finalData = Object.fromEntries(data)

    fetch('http://localhost:3030/jsonstore/users', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(finalData)
    })
      .then(res => res.json())
      .then(info => {
        console.log(info)
        setForceRefresh(state=>!state)
        removeModal()
      })
      .catch(info => {
        console.log(info)
      })
  }


  return (
    <main>
      <Header />

      <main className="main">
        <section className="card users-container">

          <SearchForm />

          <UserList forceRefresh={forceRefresh}/>

          <button className="btn-add btn" onClick={addUser}
          >Add new user</button>

          <Pagination />

        </section>

        {showCreateUser && <CreateUserModal onClose={removeModal} onSubmit={submitModal} />}
      </main>


      <Footer />
    </main>
  )
}

export default App
