const fontPreviw = document.getElementById("fontTxtField");
const fontSizeSelectBox = document.getElementById("fontSizeSelectBox");
const fontsSelectBox = document.getElementById("fontsSelectBox");
const chekboxList = document.getElementsByClassName("checkbox-label");
const fakeFontBox = document.getElementsByClassName("font__list")[0];
const fakeFontSelected = document.getElementsByClassName("font__selected")[0];
const fakeFontBoxLiList = fakeFontBox.children;

const fontarr = [];
for (let i = 0; i < fontsSelectBox.children.length; i++) {
  fontarr.push(fontsSelectBox.children[i].value);
}
console.log(fontarr);

const fontarr2 = [...fontsSelectBox.children].map((item) => item.value);
console.log(fontarr2);

const fontList = ["openSans", "oswald", "anton", "kaushanScript", "rochester", "sacramento", "Ole"];

const fontSizeList = ["font-size-16", "font-size-20", "font-size-40", "font-size-72", "font-size-92"];

const fontTransformList = ["uppercase-text", "lowercase-text", "capitalize-text"];

const handleFakeFontSelected = () => {
  fakeFontBox.style.display === "block" ? (fakeFontBox.style.display = "none") : (fakeFontBox.style.display = "block");
};

const handleFakeFontChange = (item) => {
  const { value } = item.dataset;
  fontsSelectBox.value = value;
  const selectedFont = value;
  fakeFontSelected.innerText = value;
  fontPreviw.classList.remove(...fontList);
  fontPreviw.classList.add(selectedFont);

  for (let i of fakeFontBoxLiList) {
    i.classList.remove("font__itemActive");
  }
  item.classList.add("font__itemActive");
  fakeFontBox.style.display = "none";
};

const handleFontChange = (e) => {
  const selectedFont = e.target.value;
  fakeFontSelected.innerText = e.target.value;
  fontPreviw.classList.remove(...fontList);
  fontPreviw.classList.add(selectedFont);
};

const handleFontSizeChange = (e) => {
  const selectedFontSize = e.target.value;
  fontPreviw.classList.remove(...fontSizeList);
  fontPreviw.classList.add(selectedFontSize);
};

const handleFontTransform = (e) => {
  const selectedFontTransform = e.target.value;
  let selectedFontTransformClassName = "normal";
  fontPreviw.classList.remove(...fontTransformList);

  switch (selectedFontTransform) {
    case "nomal":
      break;
    case "uppercase":
      selectedFontTransformClassName = "uppercase-text";
      break;
    case "lowercase":
      selectedFontTransformClassName = "lowercase-text";
      break;
    case "capitalize":
      selectedFontTransformClassName = "capitalize-text";
      break;
    default:
      break;
  }

  selectedFontTransformClassName === "normal" ? null : fontPreviw.classList.add(selectedFontTransformClassName);
};

fakeFontSelected.addEventListener("click", handleFakeFontSelected);

fakeFontBox.addEventListener("click", (e) => {
  handleFakeFontChange(e.target);
});

for (let i = 0; i < chekboxList.length; i++) {
  chekboxList[i].addEventListener("click", handleFontTransform);
}

fontsSelectBox.addEventListener("change", handleFontChange);

fontSizeSelectBox.addEventListener("change", handleFontSizeChange);

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
