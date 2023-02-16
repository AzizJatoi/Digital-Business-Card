import './App.css';

function Header() {
  return (
    <div>
      <header className='header'>
      <img src={require('../src/images/Aziz.JPG')} alt="person" className="profile-photo" />
      <div className='info'>
        <h1>Aziz Jatoi</h1>
        <p className='profession'>Frontend Deveoloper</p>
        <p className='github-link'>github.com/AzizJatoi</p>
        <button><img src={require('../src/images/Mail.png')} alt="person" className="mail-icon" />
         Email</button>
        </div>
      </header>
    </div>
  );
}



export default Header;