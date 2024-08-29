import './App.css';

function App() {
  return (
    <>
      <div className="textarea dark-color round">
        <form target="/" className='neechekicheeze dark-color round'>
          <textarea placeholder='type here...' className="text-area"></textarea>
          <label>
            <input type="submit"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="55" fill="currentColor" viewBox="0 0 16 16" className="send-btn">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
          </label>
        </form>
      </div>
    </>
  );
}

export default App;
