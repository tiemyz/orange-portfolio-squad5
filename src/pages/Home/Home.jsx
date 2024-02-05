import Header from '../../components/Header/Header';
import Perfil from '../../components/Perfil/Perfil';
import SecaoMeusProjetos from '../../components/SecaoMeusProjetos/SecaoMeusProjetos';

function Home() {
  return (
    <div>
      <Header/>
      <Perfil/>
      <SecaoMeusProjetos />
    </div>
  );
}

export default Home;