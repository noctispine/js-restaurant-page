import './styles/main.scss';
import loadInitial from './modules/initial_load';
import loadHome from './modules/home'

init();

function init() {
  loadInitial();
  loadHome();
}