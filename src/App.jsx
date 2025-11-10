import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Pagination from "./components/Pagination"
import SearchForm from "./components/SearchForm"
import UserList from "./components/UserList"
import CreateUserModal from "./components/CreateUserModal"


function App() {
  const [showCreateUser, setShowCreatUser] = useState(false)

  function addUser() {

    setShowCreatUser(true);
    console.log('add user')
  }


  return (
    <main>
      <Header />

      <main className="main">
        <section className="card users-container">

          <SearchForm />

          <UserList />

          <button className="btn-add btn" onClick={addUser}

          >Add new user</button>

          <Pagination />

        </section>

        {showCreateUser && <CreateUserModal />}
      </main>


      <Footer />
    </main>
  )
}

export default App
