'use strict';
const SettingTypes = {
  ATTRIBUTE: 'attribute',
  CLASS: 'class',
};

const btnsContainers = document.querySelectorAll('.js-buttons-container');
const settingBtns = document.querySelectorAll('[data-setting-name');

const setDataAttribute = ({ settingTarget }, params) => {
  const element = document.querySelector(settingTarget);
  for (const [key, value] of Object.entries(params)) {
    element.dataset[key] = value;
  }
};

const setClass = ({ settingTarget }, params) => {
  const element = document.querySelector(settingTarget);
  for (const [key, value] of Object.entries(params)) {
    const elements = Array.from(settingBtns).filter(
      (element) => element.dataset['settingName'] === key
    );
    // delet classes with name matching the value of the 'setting-value' attribute for all elements with the 'setting-name' equal to the key
    elements.forEach((item) =>
      element.classList.remove(item.dataset.settingValue)
    );
    element.classList.add(value);
  }
};

const setBtnActive = (params) => {
  for (const [key, value] of Object.entries(params)) {
    //find active button
    const activeBtn = Array.from(settingBtns).find(
      (element) =>
        element.dataset['settingName'] === key &&
        element.classList.contains('active')
    );
    // remove 'active'class for the button that was 'active' before
    activeBtn.classList.remove('active');

    // find the button that we are setting for configuration
    const setBtn = Array.from(settingBtns).find(
      (element) =>
        element.dataset['settingName'] === key &&
        element.dataset['settingValue'] === value
    );

    // add 'active' class
    setBtn.classList.add('active');
  }
};

const applySetting = (setting, params) => {
  if (setting.settingType === SettingTypes.CLASS) {
    setClass(setting, params);
  } else if (setting.settingType === SettingTypes.ATTRIBUTE) {
    setDataAttribute(setting, params);
  }
  setBtnActive(params);
};

const settingButtonClickHandler = (evt, setting) => {
  const btn = evt.target.closest('button');

  if (!btn) {
    return;
  }

  const params = {};

  const { settingName, settingValue } = btn.dataset;
  params[settingName] = settingValue;

  applySetting(setting, params);

  console.log(btn.dataset);
  console.log(params);
};

const init = () => {
  btnsContainers.forEach((container) => {
    const setting = container.dataset;

    container.addEventListener('click', (evt) => {
      settingButtonClickHandler(evt, setting);
    });
  });
};

init();
