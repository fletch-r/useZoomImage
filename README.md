# useZoomImage

### Expand images to full screen with smooth animation

## Example

![BrowserExample](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2h6MWxrdzUzYTgxcXM2ZnR3NTVsa20yeTRrOTJmNDFxajdhOWhkdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v6Lzq7UKqY316Yh5b0/giphy.gif)

```jsx
import { useZoomImage } from 'usezoomimage';

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
