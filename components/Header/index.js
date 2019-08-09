// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

function Header() {
    // define new elements
    const headerComponent = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerName = document.createElement('h1');
    const headerTemp = document.createElement('span');
    
    // Setup structure of elements
    headerComponent.appendChild(headerDate);
    headerComponent.appendChild(headerName);
    headerComponent.appendChild(headerTemp);
    
    // set class names
    headerComponent.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');
    
    // set text content
    headerDate.textContent = "SMARCH 28, 2019";
    headerName.textContent = "Lambda Times";
    headerTemp.textContent = "98°";
    
    // console.log(headerComponent);
    return headerComponent;
}

// Header();