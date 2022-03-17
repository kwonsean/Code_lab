const fontPreviw = document.getElementById('fontTxtField');
const fontSizeSelectBox = document.getElementById('fontSizeSelectBox');
const fontsSelectBox = document.getElementById('fontsSelectBox');
const chekboxList = document.getElementsByClassName('checkbox-label');

const fontList = [
  'openSans',
  'oswald',
  'anton',
  'kaushanScript',
  'rochester',
  'sacramento',
];

const fontSizeList = [
  'font-size-16',
  'font-size-20',
  'font-size-40',
  'font-size-72',
  'font-size-92',
];

const fontTransformList = [
  'uppercase-text',
  'lowercase-text',
  'capitalize-text',
];

const handleFontChange = e => {
  const selectedFont = e.target.value;
  fontPreviw.classList.remove(...fontList);
  fontPreviw.classList.add(selectedFont);
};

const handleFontSizeChange = e => {
  const selectedFontSize = e.target.value;
  fontPreviw.classList.remove(...fontSizeList);
  fontPreviw.classList.add(selectedFontSize);
};

const handleFontTransform = e => {
  const selectedFontTransform = e.target.value;
  let selectedFontTransformClassName = 'normal';
  fontPreviw.classList.remove(...fontTransformList);

  switch (selectedFontTransform) {
    case 'nomal':
      break;
    case 'uppercase':
      selectedFontTransformClassName = 'uppercase-text';
      break;
    case 'lowercase':
      selectedFontTransformClassName = 'lowercase-text';
      break;
    case 'capitalize':
      selectedFontTransformClassName = 'capitalize-text';
      break;
    default:
      break;
  }

  selectedFontTransformClassName === 'normal'
    ? null
    : fontPreviw.classList.add(selectedFontTransformClassName);
};

for (let i = 0; i < chekboxList.length; i++) {
  chekboxList[i].addEventListener('click', handleFontTransform);
}

fontsSelectBox.addEventListener('change', handleFontChange);

fontSizeSelectBox.addEventListener('change', handleFontSizeChange);

// (function ($) {
//   var fontTxt = $('#fontTxt'); // font
//   var fontTxtField = $('#fontTxtField');
//   var fontsSelectBox = $('#fontsSelectBox');
//   var fontSizeSelectBox = $('#fontSizeSelectBox');

//   $(fontSizeSelectBox).selectmenu({
//     change: function (event, data) {
//       fontTxtField
//         .removeClass('font-size-16')
//         .removeClass('font-size-20')
//         .removeClass('font-size-40')
//         .removeClass('font-size-72')
//         .removeClass('font-size-92')
//         .addClass(data.item.value);
//     },
//   });

//   $(fontsSelectBox).selectmenu({
//     change: function (event, data) {
//       fontTxtField
//         .removeClass('openSans')
//         .removeClass('oswald')
//         .removeClass('anton')
//         .removeClass('kaushanScript')
//         .removeClass('rochester')
//         .removeClass('sacramento')
//         .addClass(data.item.value);
//     },
//     icons: { button: 'ui-icon-circle-triangle-s' },
//   });

//   $('#uppercase, #lowercase, #capitalize, #normal').change(function () {
//     var value = this.value;
//     switch (value) {
//       case 'uppercase':
//         fontTxtField
//           .addClass('uppercase-text')
//           .removeClass('lowercase-text')
//           .removeClass('capitalize-text');
//         break;
//       case 'lowercase':
//         fontTxtField
//           .addClass('lowercase-text')
//           .removeClass('uppercase-text')
//           .removeClass('capitalize-text');
//         break;
//       case 'capitalize':
//         fontTxtField
//           .addClass('capitalize-text')
//           .removeClass('uppercase-text')
//           .removeClass('lowercase-text');
//         break;
//       case 'normal':
//       default:
//         fontTxtField
//           .removeClass('uppercase-text')
//           .removeClass('lowercase-text')
//           .removeClass('capitalize-text');
//         break;
//     }
//   });
// })(jQuery);
