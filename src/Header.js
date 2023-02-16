import './App.css';

function Header() {
  return (
    <div>
      <header className='header'>
      <img src={require('../src/images/Aziz.JPG')} alt="person" className="profile-photo" />
        <h1>Aziz Jatoi</h1>
        <p className='profession'>Front End Deveoloper</p>
        <p className='job-link'>github.com/AzizJatoi</p>
          <button> <span class="material-symbols-outlined">
          mail
          </span>Email</button>
        
      </header>
    </div>
  );
}



export default Header;