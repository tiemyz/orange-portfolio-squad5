import AddProject from '../../components/AddProjectModal/AddProject';
//import Header from '../../components/Header/Header';
import LogoutButton from '../../components/LogoutButton/LogoutButton';

function Home() {
  return (
    <div>
      {/** <Header />*/}
      <AddProject/>
      <LogoutButton/>
    </div>
  )
}

export default Home;