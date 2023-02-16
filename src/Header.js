import './App.css';

function Header() {
  return (
    <div>
      <header className='header'>
      <img src={require('../src/images/Aziz.JPG')} alt="person" className="profile-photo" />
      <div className='info'>
        <h1>Aziz Jatoi</h1>
        <p className='profession'>Frontend Deveoloper</p>
        <a className='github-link' href="https://github.com/AzizJatoi">github.com/AzizJatoi</a>
        <p className="email"><img src={require('../src/images/Mail.png')} alt="mail" className="mail-icon" /><a href="mailto:emailazizalij@gmail.com">Email</a></p>
        </div>
      </header>
    </div>
  );
}



export default Header;