function $advhover1() {
  let advh1 = document.querySelector('#divadv')
  advh1.insertAdjacentHTML('afterbegin', '<div class="adv_hover adv_f" onmouseleave="$advout1()"><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Бесплатная консультация</p><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Подбор тура под ваши предпочтения</p><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Самостоятельный расчёт стоимости</p><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Учитываются все нюансы</p></div>')
}
function $advout1() {
  let advo1 = document.querySelector('.adv_f')
  advo1.remove()
}

function $advhover2() {
  let advh2 = document.querySelector('#divadv')
  advh2.insertAdjacentHTML('afterbegin', '<div class="adv_hover adv_s" onmouseleave="$advout2()"><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Широкий выбор отелей, мест, ресторанов и др.</p><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Можете выбрать тур по любой стране мира.</p></div>')
}
function $advout2() {
  let advo2 = document.querySelector('.adv_s')
  advo2.remove()
}

function $advhover3() {
  let advh3 = document.querySelector('#divadv')
  advh3.insertAdjacentHTML('afterbegin', '<div class="adv_hover adv_t" onmouseleave="$advout3()"><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Дружелюбный персонал</p><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Высококвалифицированные работники</p></div>')
}
function $advout3() {
  let advo3 = document.querySelector('.adv_t')
  advo3.remove()
}

function $advhover4() {
  let advh4 = document.querySelector('#divadv')
  advh4.insertAdjacentHTML('afterbegin', '<div class="adv_hover adv_fo" onmouseleave="$advout4()"><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Готовы ответить в любое время суток</p><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Чёткое выполнение ваших просьб</p><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Отслеживание ваших отзывов</p></div>')
}
function $advout4() {
  let advo4 = document.querySelector('.adv_fo')
  advo4.remove()
}

function $advhover5() {
  let advh5 = document.querySelector('#divadv')
  advh5.insertAdjacentHTML('afterbegin', '<div class="adv_hover adv_fi" onmouseleave="$advout5()"><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Подбор только лучших и недорогих отелей</p><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Чёткое планирование до мелочеи</p><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Постоянное информирование вас</p></div>')
}
function $advout5() {
  let advo5 = document.querySelector('.adv_fi')
  advo5.remove()
}

function $advhover6() {
  let advh6 = document.querySelector('#divadv')
  advh6.insertAdjacentHTML('afterbegin', '<div class="adv_hover adv_si" onmouseleave="$advout6()"><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Предоставляем экономные туры</p><p class="adv_hover_text"><img src="../site2/img/check.png" alt="" height="15px" width="15px">Если вас что-то не устроило, мы готовы выплатить компенсацию</p></div>')
}
function $advout6() {
  let advo6 = document.querySelector('.adv_si')
  advo6.remove()
}
