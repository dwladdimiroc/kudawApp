//information
document.querySelector('#btn-information').addEventListener ('click', function () {
  document.querySelector('#information').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-information-back').addEventListener ('click', function () {
  document.querySelector('#information').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//view_need
document.querySelector('#btn-view_need').addEventListener ('click', function () {
  document.querySelector('#view_need').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-view_need-back').addEventListener ('click', function () {
  document.querySelector('#view_need').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//view_unknown
document.querySelector('#btn-view_unknown').addEventListener ('click', function () {
  document.querySelector('#view_unknown').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-view_unknown-back').addEventListener ('click', function () {
  document.querySelector('#view_unknown').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//view_alert
document.querySelector('#btn-view_alert').addEventListener ('click', function () {
  document.querySelector('#view_alert').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-view_alert-back').addEventListener ('click', function () {
  document.querySelector('#view_alert').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//information
document.querySelector('#btn-alert').addEventListener ('click', function () {
  document.querySelector('#form').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-form-back').addEventListener ('click', function () {
  document.querySelector('#form').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//form_need
document.querySelector('#btn-form_need').addEventListener ('click', function () {
  document.querySelector('#form_need').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-form_need-back').addEventListener ('click', function () {
  document.querySelector('#form_need').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//form_unknown
document.querySelector('#btn-form_unknown').addEventListener ('click', function () {
  document.querySelector('#form_unknown').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-form_unknown-back').addEventListener ('click', function () {
  document.querySelector('#form_unknown').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//form_alert
document.querySelector('#btn-form_alert').addEventListener ('click', function () {
  document.querySelector('#form_alert').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-form_alert-back').addEventListener ('click', function () {
  document.querySelector('#form_alert').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//contact
document.querySelector('#btn-help').addEventListener ('click', function () {
  document.querySelector('#contact').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-help-back').addEventListener ('click', function () {
  document.querySelector('#contact').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});