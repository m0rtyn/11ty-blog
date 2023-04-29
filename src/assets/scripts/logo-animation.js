// Константы для настройки анимации
const FULL_ROTATION_TIME = 10000; // время на полный оборот в миллисекундах
const stopIds = new Array(8).fill('')
  .map((el, i) => `stop${i + 1}`); // id элементов stop

// Выбираем элемент градиента и сохраняем ссылки на элементы stop в массиве stops
const gradient1 = document.getElementById('Gradient1');
const gradient2 = document.getElementById('Gradient2');
const stops = stopIds.map(id => document.getElementById(id));

// Функция для анимации градиента
function animateGradient() {
  // Вычисляем угол и радианы на основе текущего времени
  const angle = (Date.now() / FULL_ROTATION_TIME) * 360; // 5 секунд на полный оборот
  const radian = angle * Math.PI / 180;
  
  // Вычисляем координаты (x1, y1) и (x2, y2) для градиента
  const x1 = 50 - 50 * Math.cos(radian);
  const y1 = 50 - 50 * Math.sin(radian);
  const x2 = 50 + 50 * Math.cos(radian);
  const y2 = 50 + 50 * Math.sin(radian);
  
  // Устанавливаем атрибуты градиента для анимации смещения
  gradient1?.setAttribute('x1', x1 + '%');
  gradient1?.setAttribute('x2', x2 + '%');
  gradient1?.setAttribute('y1', y1 + '%');
  gradient1?.setAttribute('y2', y2 + '%');

  gradient2?.setAttribute('x1', y1 + '%');
  gradient2?.setAttribute('x2', y2 + '%');
  gradient2?.setAttribute('y1', x1 + '%');
  gradient2?.setAttribute('y2', x2 + '%');
  
  const STOP_TIME_FACTOR_BASE = 2000; // базовый множитель времени для элементов stop
  const STOP_TIME_FACTOR_STEP = 400; // шаг множителя времени между элементами stop
  const STOP_OFFSET_BASE_STEP = 25; // шаг базового смещения между элементами stop
  const STOP_OFFSET_AMPLITUDE = 10; // амплитуда смещения

  // Проходим по массиву stops, устанавливая смещения для каждого элемента
  stops.forEach((stop, index) => {
    const gradIndex = (index > 3 ? index - 3 : index)
    // Вычисляем параметры времени и базовое смещение для каждого элемента
    const timeFactor = STOP_TIME_FACTOR_BASE + (gradIndex * STOP_TIME_FACTOR_STEP);
    const offsetBase = 20 + gradIndex * STOP_OFFSET_BASE_STEP;

    // Вычисляем смещение на основе времени и базового смещения
    const offset = (Math.sin(Date.now() / timeFactor) * STOP_OFFSET_AMPLITUDE) + offsetBase;

    // Устанавливаем атрибут смещения для текущего элемента stop
    stop?.setAttribute('offset', offset + '%');
  });

  // Запрашиваем следующий кадр анимации
  requestAnimationFrame(animateGradient);
}

// Запускаем анимацию градиента
animateGradient();