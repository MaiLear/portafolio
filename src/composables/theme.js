import {defineAsyncComponent} from 'vue'

const LIGHTiCON = defineAsyncComponent(()=>import('@/components/icons/SunIcon.vue'));
let DARKiCON = defineAsyncComponent(()=>import('@/components/icons/MoonIcon.vue'));



const colorParagraph = (options,theme)=>{
  let {classParagraph} = options;
    const $ELEMENT = document.querySelectorAll('p');
    $ELEMENT.forEach(el=>{
        if(theme == 'dark') el.classList.add(classParagraph);

        else el.classList.remove(classParagraph);
    })
}

const menuStyle = (options,theme)=>{
  let {idMenu,classMenuLight,classMenuDark} = options;
  const $MENU = document.getElementById(idMenu);

  if(theme == 'dark'){
    $MENU.classList.remove(classMenuLight);
    $MENU.classList.add(classMenuDark);
  }
  else{
    $MENU.classList.remove(classMenuDark);
    $MENU.classList.add(classMenuLight);
  }

}

const bodyStyle = (options,theme)=>{
  let {classBodyDark,classBodyLight} = options;
  console.log(options,theme);
  
  const $BODY = document.body;

  if(theme == 'dark'){
    $BODY.classList.remove(classBodyLight);
    $BODY.classList.add(classBodyDark);
  }
  else{
    $BODY.classList.remove(classBodyDark);
    $BODY.classList.add(classBodyLight);
  }
}


const currentTheme = (id,classDarkIcon) =>{
  const $ICON = document.getElementById(id);
  return $ICON.classList.contains(classDarkIcon) 
  ? 'dark' 
  : 'light';
}

const currentThemeSystem = ()=>{
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';
}

export const firstLoadParagraphStyle = (options)=>{
  const THEME = currentThemeSystem();
  colorParagraph(options,THEME);
}


export const firstLoadThemeMenu = (options)=>{
  const THEME = currentThemeSystem();
  
  menuStyle(options,THEME);
  
}

export const firstLoadThemeBtn = ()=>{
  return currentThemeSystem() == 'dark'
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
  let { bodyOptions,paragraphOptions,menuOptions,classDarkIcon,idIconComponent, } = options;

  const THEME = currentTheme(idIconComponent,classDarkIcon) == 'dark' ? 'light' : 'dark';
  
  
    bodyStyle(bodyOptions,THEME)
    colorParagraph(paragraphOptions,THEME);
    menuStyle(menuOptions,THEME)
  
  
};
