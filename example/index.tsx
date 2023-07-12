import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PlaceholderImage from './assets/placeholder.png';
import { useZoomImage } from '../.';

const App = () => {
  const [showImage, setShowImage] = React.useState(false);

  const [ref, ExpandedImage] = useZoomImage(showImage, { backdrop: true });

  return (
    <div>
      <h1>Examples to use useZoomImage on:</h1>

      <br />

      <img ref={ref} src={PlaceholderImage} alt="Placeholder Image" onClick={() => setShowImage(true)} />
      {showImage && <ExpandedImage backdropOnClick={() => setShowImage(false)} />}

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
