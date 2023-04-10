import './App.scss';

function TextBlock() {
    return (
      <div className="textblock">
        <div className="textblock-container">
          <p className="textblock-title">Features</p>
          <div className="d-flex justify-content-between textblock-content">
            <h1>WE make Things Secure</h1>
            <p>
              Welcome to the world of blockchain, a revolutionary technology
              that is changing the way we conduct transactions and store data.
              So, join us in this exciting world of blockchain and
              discover the endless possibilities it holds.
            </p>
          </div>
        </div>
      </div>
    );
}

export default TextBlock;