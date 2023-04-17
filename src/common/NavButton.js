// NavButton.js

export function NavButton(text, componentFn, classes = [], useInnerHTML = false) {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('btn');
  button.classList.add(...classes);

  if (useInnerHTML) {
    button.innerHTML = text;
  } else {
    button.innerText = text;
  }


  button.addEventListener('click', () => {
    const navigationEvent = new CustomEvent('navigate', {
      detail: componentFn
    });

    document.body.dispatchEvent(navigationEvent);
  });

  return button;
}
