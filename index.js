const formEl = document.querySelector('#findForm');
const findTextEl = document.querySelector('#textEl');
const resultEl = document.querySelector('#result');
const body = document.querySelector('body');
const questions = [
    {question: 'Для описания функции используется:', answer: '*Прямоугольник'},
   
    {question: 'Стрелка, концы которой связывают источник и потребителя, являющимися блоками одной', answer: '*Внутренняя стрелка'},
    
    {question: 'Стрелка, отображающая данные и материальные объекты, которые преобразуются функцией в выход ', answer: '*Входная стрелка'},
    
    {question: 'Стрелка, отображающая данные и материальные объекты, произведенные функцией', answer: '*Выходная стрелка'},
    
    {question: 'Разделение стрелки на два или большее число сегментов.', answer: '%%ветвление|Ветвление|ветвлением|Ветвлением'},
   
    {question: 'Список определений ключевых слов, фраз, связанных с узлами стрелками, блоками или моделью в целом.', answer: '%%глоссарий|Глоссарий|глоссарием|Глоссарием'},
   
    {question: 'Стрелка, один из концов которой связан с источником или потребителем, а другой не присоединен ни к какому блоку ', answer: '*Выходная стрелка'},
   
    {question: 'Разделение моделируемой функции на функции компоненты', answer: '%%декомпозиция|Декомпозиция|декомпозицией|Декомпозицией'},
   
    {question: 'Специальный вид диаграммы, состоящей из одного блока, описывающего функцию верхнего уровня', answer: '*A-0'},
   
    {question: 'Представление отношений между родительскими и дочерними диаграммами', answer: '%%дерево узлов|Дерево узлов|деревом узлов|Деревом узлов'},
   
    {question: 'Именем блока может быть', answer: '<br>+Глагол,<br> +Глагольный оборот,<br> +Отглагольное существительное,<br>+Словосочетание, содержащее отглагольное существительное,<br>-Неотглагольное существительное,<br>-Наречие с глаголом,<br>-Междометие'},
    
    {question: 'Диаграмма, детализирующая функцию', answer: '<br>+Дочерняя диаграмма,<br>+Диаграмма, содержащая дочерний блок,<br>-Диаграмма иллюстрация,<br>-Родительская диаграмма,<br>Диаграмма,содержащая родительский блок'},
   
    {question: 'Меткой стрелки может быть', answer: '<br>+Неотглагольное существительное,<br>+Оборот с неотглагольным существительным,<br>-Глагол,<br>-Глагольный оборот,<br>-Отглагольное существительное,<br>-Словосочетание, содержащее отглагольное существительное,<br>-Любое существительное с прилагательным,<br>-Наречие с глаголом,<br>-Междометие'},
    
    {question: 'Номер блока может быть следующим числом', answer: '+1,+2,+6,-8,-10'},
    
    {question: 'Количество блоков диаграммы должно быть меньше следующего целого числа', answer: '%%7|семь|семи|Семь|Семи'},
    
    {question: 'Объединение стрелок называется', answer: '*связыванием'},
    
    {question: 'Разделение стрелок называют', answer: '*развязывание'},
    
    {question: '>Направленная линия, состоящая из одного или нескольких сегментов. которая моделирует канал передачи данных или материальных потоков', answer: '%%стрелка|Стрелка|стрелкой|Стрелкой'},
    
    {question: 'Стрелки, изображающие средства, используемые для выполнения функций', answer: '*Стрелка механизма'},
    
    {question: 'Стрелки, дочерней диаграммы, отсутствующие на родительской диаграмме', answer: '%%Туннельная|туннельная|Туннельная стрелка|туннельная стрелка'},
    
    {question: 'Деятельность, процесс или преобразование', answer: '%%Функция|функция|Функцией|функцией'},
    
    {question: 'Стрелки, отображающие условия при которых выполняется функция (приказы, распоряжения, нормативно-справочная информация, и т.д.)', answer: '%%Управляющая|управляющая|Управляющая стрелка|управляющая стрелка'},
    
    {question: 'Укажите расположение стрелок блока', answer: '<br>Слева~входная <br>Сверху~управляющая<br>Справа~выходная<br>Снизу~стрелка механизма'},
    
    {question: 'Что описывает функцию?', answer: '*Блок'},
   
    {question: 'Что помещается внутри блока?', answer: '<br>+Имя,<br>+Номер,<br>-Механизм выполнения функции,<br>-Входные данные,<br>-Выходные данные,<br>-Исполнители'},
    
    {question: 'Стрелка может иметь', answer: '<br>+Один наконечник,<br>+Один отрезок прямой,<br>+Несколько отрезков прямых,<br>+Линии имеют вертикальное направление,<br>+Линии имеют горизонтальное направление,<br>+Используются сплошные линии,<br>+Хотя бы один конец стрелки должен касаться блока,<br>-Два наконечника,<br>-Линии имеют наклон в 45 градусов,<br>-Используются пунктирные линии,<br>-Все концы стрелок должны касаться блоков,<br>-Стрелки могут пересекать блок,<br>-Присоединение к блоку в углах допускается'},
    
    {question: 'Для связи стрелки с именем используется', answer: '<br> +Молнеобразная линия,<br>+Сплошная линия'},
    
    {question: 'Какие термины не должны использоваться в метках стрелок', answer: '<br>+функция,<br>+вход,<br>+управление,<br>+выход,<br>+механизм,<br>+вызов'},
   
    {question: 'В диаграмме A-0 допускаются следующие стрелки', answer: '<br>+Входная стрелка,<br>+Выходная стрелка,<br>+Граничная стрелка,<br>+Механизма,<br>+Управления'},
   
    {question: 'Какие виды направлений внутренних стрелок и их соединений возможны', answer: '<br>+Выход c входом,<br>+Выход c управлением,<br> +Выход с механизмом'},
   
    {question: 'Как должны располагаться блоки в диаграмме', answer: '*По диагонали'},
   
    {question: 'Блоки обязательно должны иметь', answer: '<br>+Управляющую стрелку,<br>+Входную стрелку'},
   
    {question: 'Обратные стрелки по управлению показываются как', answer: '*Вверх и над'},
   
    {question: 'Обратные стрелки по входу показываются как', answer: '*Вниз и под'},
   
    {question: 'Обратные стрелки по механизму показываются как', answer: '*Вниз и под'},
   
    {question: 'Стрелки объединяют, если они имеют', answer: '<br>+Общий источник,<br>+Общий приемник'},
    
    {question: '‘Составление расписания занятий’ не является названием для', answer: '<br>+Входной стрелки,<br>+Выходной стрелки,<br>+Внутренней стрелки,<br>+Граничной стрелки'},
   
    {question: '‘Расписание занятий’ может являться названием для', answer: '<br>+Входной стрелки,<br>+Выходной стрелки,<br>+Внутренней стрелки,<br>+Граничной стрелки'},
    
    {question: 'Какие название можно указывать в прямоугольнике', answer: '<br> +Выполнить задание,<br>+Изготовление детали,<br>+Сдача экзамена'},
   
    {question: 'Какие название можно указывать для информационного процесса', answer: '<br>+Ответить на вопросы экзамена,<br>+Трансляция программы'},
    
    {question: 'Диаграмма содержит два блока. Для составления расписания занятий используется нагрузка учителей и список аудиторий. А для получения нагрузки учителей используется учебный план и список учителей. Какие наименования не относятся к внутренней стрелке', answer: '<br>+Составление расписания занятий,<br>+Список аудиторий,<br>+Получение нагрузки учителей,<br>+Учебный план,<br>+Список учителей,<br>+Расписание занятий'},
    
    {question: '>Диаграмма содержит два блока. Для составления расписания занятий используется нагрузка учителей и список аудиторий. А для получения нагрузки учителей используется учебный план и список учителей. Какие наименования могут относиться к входной стрелке', answer: '<br> +Список аудиторий,<br>+Нагрузка учителей,<br>+Учебный план,<br>+Список учителей'},
   
   {question: 'Диаграмма содержит два блока. Для составления расписания занятий используется нагрузка учителей и список аудиторий. А для получения нагрузки учителей используется учебный план и список учителей. Какие наименования могут относиться к выходной стрелке', answer: '<br>+Нагрузка учителей,<br>+Расписание занятий'},
    
    {question: 'Стрелка разделяется на два сегмента. Какие случаи использования наименований допустимы', answer: '<br>+Стрелка и все сегменты имеют разные названия,<br>+Стрелка и один сегмент назван, а другой не назван,<br>+Стрелка названа, а все сегменты не названы'},
   
    {question: 'Глоссарий может включать определения ключевых слов со следующими наименованиями:', answer: '<br>+Деталь,<br>+Обработка детали,<br>+Работа двигателя,<br>+Запись в журнал,<br>+Расчет заработной платы'},
   
    {question: 'Диаграмма содержит два блока. Для составления расписания занятий используется нагрузка учителей и список аудиторий. А для получения нагрузки учителей используется учебный план и список учителей. Какие наименования могут относиться к граничным стрелкам', answer: '<br>+Список аудиторий,<br>+Учебный план,<br>+Список учителей,<br>+Расписание занятий'},
   
    {question: 'На какое количество компонент можно разделить моделируемую функцию', answer: '+3,+5'},
   
    {question: 'Укажите название стрелок и процессов', answer: '<br> Управляющая стрелка~График приобретения оборудования,<br>Входная стрелка~Приобретаемое оборудование,<br>Выходная стрелка~Приобретенное оборудование,<br>Стрелка механизма~Отдел главного технолога,<br>Блок~Приобретение оборудования'},
    
    {question: 'Укажите название стрелок и процессов', answer: '<br>Управляющая стрелка~Рекомендации по документированию программного обеспечения,<br>Входная стрелка~Задание на программирование,<br>Выходная стрелка~Разработанная и документированная программа,<br>Стрелка механизма~Бригада программистов,<br>Блок~Разработка программного обеспечения'},
    
    {question: 'Укажите, что отображается входными стрелками', answer: '<br>+Материальные потоки,<br> +Энергетические потоки,транзитивность,<br>+Финансовые потоки,<br>+Информационные потоки'},

    {question: 'Укажите, что отображается выходными стрелками', answer: '<br>+Нормативные акты,<br> +Материальные потоки,<br>+Ограничительная информация,<br>+Энергетические потоки,<br>+Предписывающая информация,<br>+Финансовые потоки,<br>+Оборудование,<br>+Информационные потоки'},

    {question: 'Укажите, что отображается управляющими стрелками', answer: '<br>+Нормативные акты,<br>+Ограничительная информация,<br>+Предписывающая информация'},

    {question: 'Укажите, что отображается стрелками механизма', answer: '<br>+Оборудование,<br> +Персонал'},

    {question: 'Укажите, что отображается блоками', answer: '+Деятельность'},
];

findTextEl.addEventListener('input', (evt)=>{
    const findText = findTextEl.value;
    if (findText.length < 1){
        return
    }
    let result = '';
    questions.map (question=> {
       if (question.question.toUpperCase().indexOf(findText.toUpperCase())+1){
           result += `<div style="margin-top: 1rem">Вопрос: ${question.question},<strong> ответ: ${question.answer}</strong></div>`
       }
    });

    resultEl.innerHTML = result
});

addEventListener("keydown", function(event) {
    if (event.which === 49) {
        if (body.className === 'invisible') {
            body.className = ''
        } else {
            body.className = 'invisible'
        }

    }
});


