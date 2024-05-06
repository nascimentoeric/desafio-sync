import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [profileImage, setProfileImage] = useState('profile.jpg');
  const [userInfo, setUserInfo] = useState({
    name: 'Nome',
    age: 'XX',
    street: 'Endereço',
    neighborhood: 'Bairro',
    city: 'Cidade',
    state: 'Estado',
    bio: 'Biografia',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserInfo = {
      name: e.target.name.value || userInfo.name,
      age: e.target.age.value || userInfo.age,
      street: e.target.street.value || userInfo.street,
      neighborhood: e.target.neighborhood.value || userInfo.neighborhood,
      city: e.target.city.value || userInfo.city,
      state: e.target.state.value || userInfo.state,
      bio: e.target.bio.value || userInfo.bio,
    };
    setUserInfo(updatedUserInfo);
    e.target.reset();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <section className="user-info">
            <div className="perfil">
              <img src={profileImage} alt="Profile" className="img-fluid rounded-circle profile-image" 
              style={{ width: "200px", height: "200px", borderRadius: "50%", marginBottom: "20px" }}/>
              <h2>{userInfo.name}</h2>
              <p>Idade: {userInfo.age} anos</p>
              <p>Rua: {userInfo.street}</p>
              <p>Bairro: {userInfo.neighborhood}</p>
              <p>Cidade: {userInfo.city}</p>
              <p>Estado: {userInfo.state}</p>
              <p>Biografia: {userInfo.bio}</p>
            </div>
          </section>
        </div>
        <div className="col-md-6">
          <form className="atualiza-form" onSubmit={handleSubmit}>
            <h3>Atualizar Informações</h3>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="age">Idade:</label>
              <input type="number" id="age" name="age" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="street">Rua:</label>
              <input type="text" id="street" name="street" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="neighborhood">Bairro:</label>
              <input type="text" id="neighborhood" name="neighborhood" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="city">Cidade:</label>
              <input type="text" id="city" name="city" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="state">Estado:</label>
              <input type="text" id="state" name="state" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="profileImage">Imagem de Perfil:</label>
                <input type="file" id="profileImage" name="profileImage" className="form-control-file" accept="image/*" onChange={handleImageChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="bio">Biografia:</label>
              <textarea id="bio" name="bio" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Atualizar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
