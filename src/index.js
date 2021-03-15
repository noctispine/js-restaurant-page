import './styles/main.scss';
import loadInitial from './modules/initial_load';
import loadHome from './modules/home'
import loadMenu from './modules/menu'


init();

function loads(){
  const homeBtn = document.getElementById('home');
  homeBtn.addEventListener('click', loadHome);

  const menuBtn = document.getElementById('menu');
  menuBtn.addEventListener('click', loadMenu );
}



function init() {
  loadInitial();
  loadHome();
  loads();


}