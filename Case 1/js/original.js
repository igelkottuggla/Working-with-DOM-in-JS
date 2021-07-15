'use strict';
const courses = document.querySelector('.cards');

const btnThemeLight = document.querySelector('.theme-button-light');
const btnThemeDark = document.querySelector('.theme-button-dark');
const btnThemeTexture = document.querySelector('.theme-button-texture');

const btnCardViewTile = document.querySelector('.card-view-button-tile');
const btnCardViewstandard = document.querySelector(
  '.card-view-button-standard'
);
const btnCardViewCompact = document.querySelector('.card-view-button-compact');

const btnThemeLightHandler = () => {
  document.documentElement.dataset['themeName'] = 'light';
};
const btnThemeDarkHandler = () => {
  document.documentElement.dataset['themeName'] = 'dark';
};
const btnThemeTextureHandler = () => {
  document.documentElement.dataset['themeName'] = 'texture';
};

const btnCardViewTileHandler = () => {
  courses.classList.remove('standard');
  courses.classList.remove('compact');
  courses.classList.add('tile');
};

const btnCardViewstandardHandler = () => {
  courses.classList.remove('compact');
  courses.classList.remove('tile');
  courses.classList.add('standard');
};

const btnCardViewCompactHandler = () => {
  courses.classList.remove('standard');
  courses.classList.remove('tile');
  courses.classList.add('compact');
};

const init = () => {
  btnThemeLight.addEventListener('click', btnThemeLightHandler);
  btnThemeDark.addEventListener('click', btnThemeDarkHandler);
  btnThemeTexture.addEventListener('click', btnThemeTextureHandler);
  btnCardViewTile.addEventListener('click', btnCardViewTileHandler);
  btnCardViewstandard.addEventListener('click', btnCardViewstandardHandler);
  btnCardViewCompact.addEventListener('click', btnCardViewCompactHandler);
};

init();
