import {defineAsyncComponent} from 'vue'

const LIGHTiCON = defineAsyncComponent(()=>import('@/components/icons/SunIcon.vue'));
let DARKiCON = defineAsyncComponent(()=>import('@/components/icons/MoonIcon.vue'));



const colorParagraph = (options,theme)=>{
  let {classParagraph} = options;
    const $ELEMENT = document.querySelectorAll('p');
    $ELEMENT.forEach(el=>{
        if(theme == 'dark') el.classList.remove(classParagraph);

        else el.classList.add(classParagraph);
    })
}

const menuStyle = (options,theme)=>{
  let {idMenu,classMenuLight,classMenuDark} = options;
  const $MENU = document.getElementById(idMenu);

  if(theme == 'dark'){
    $MENU.classList.remove(classMenuDark);
    $MENU.classList.add(classMenuLight);
  }
  else{
    $MENU.classList.remove(classMenuLight);
    $MENU.classList.add(classMenuDark);
  }

}

const bodyStyle = (options,theme)=>{
  let {classBodyDark,classBodyLight} = options;
  console.log(options,theme);
  
  const $BODY = document.body;

  if(theme == 'dark'){
    $BODY.classList.remove(classBodyDark);
    $BODY.classList.add(classBodyLight);
  }
  else{
    $BODY.classList.remove(classBodyLight);
    $BODY.classList.add(classBodyDark);
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


export const firstLoadThemeMenu = (options)=>{
  options.theme = currentThemeSystem();
  menuStyle(options);
  
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

  const theme = currentTheme(idIconComponent,classDarkIcon);
  
  
    bodyStyle(bodyOptions,theme)
    colorParagraph(paragraphOptions,theme);
    menuStyle(menuOptions,theme)
  
  
};
