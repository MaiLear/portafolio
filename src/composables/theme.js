import {defineAsyncComponent} from 'vue'

const LIGHTiCON = defineAsyncComponent(()=>import('@/components/icons/SunIcon.vue'));
let DARKiCON = defineAsyncComponent(()=>import('@/components/icons/MoonIcon.vue'));



const colorParagraph = (classValue,changeColor)=>{
    const $ELEMENT = document.querySelectorAll('p');
    $ELEMENT.forEach(el=>{
        if(changeColor) el.classList.add(classValue);

        else el.classList.remove(classValue);
    })
}

const currentTheme = (id,classDarkIcon) =>{
  const $ICON = document.getElementById(id);
  return $ICON.classList.contains(classDarkIcon) 
  ? 'dark' 
  : 'light';
}

export const firstLoadThemeBtn = ()=>{
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
  ? DARKiCON 
  : LIGHTiCON;
}

export const themeBtn = (options)=>{
  let {idIconComponent,classDarkIcon} = options;
  
  return currentTheme(idIconComponent,classDarkIcon) == 'dark' 
  ? LIGHTiCON 
  : DARKiCON;

}

export const theme = (options) => {
  let { classBodyLight, classBodyDark,classDarkIcon, idIconComponent,classParagraph } = options;
  const $BODY = document.body;
  
  if (currentTheme(idIconComponent,classDarkIcon) != 'dark') {
    $BODY.classList.remove(classBodyLight);
    $BODY.classList.add(classBodyDark);
    colorParagraph(classParagraph,true);
  } else {
    $BODY.classList.remove(classBodyDark);
    $BODY.classList.add(classBodyLight);
    colorParagraph(classParagraph,false);
  }
};
