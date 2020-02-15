let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}



const render = () => {
    //JSX - JavaScript XML
    const jsx = (
      <div>
        <h1>Visibility Toggle</h1>   
        <button onClick={toggleVisibility}>
            {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && (
        <div>
            <p>Hey! There is some details you can now see!</p>
        </div>
        )}
      </div>
    );
  
    ReactDOM.render(jsx, document.getElementById("app"));
  };
  
  render();