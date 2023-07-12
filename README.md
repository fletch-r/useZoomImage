# useZoomImage

### Expand images to full screen with cool animation

## Example

![BrowserExample](assets/browser_example.gif)

```jsx
import { useZoomImage } from 'useZoomImage';

function App() {
  const [showImage, setShowImage] = React.useState(false);

  const [ref, ExpandedImage] = useZoomImage(showImage, { backdrop: true });

  return (
    <div>

      <img ref={ref} src={PlaceholderImage} alt="Placeholder Image" onClick={() => setShowImage(true)} />
      {showImage && <ExpandedImage backdropOnClick={() => setShowImage(false)} />}

    </div>
  );
};
```