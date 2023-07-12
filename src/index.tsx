import React from 'react';
import { ExpandedImageProps, Options, ReferenceImageDimensions, UseZoomImageReturn } from './types';

/**
 * Add this ref to an image. When clicking the image a larger expanded will animate
 *
 * @param {boolean} show When to show the expanded image.
 * @param {Options} options Set the scale value about you want your expanded image to grow by. Defaulted to 1.2.
 */
export function useZoomImage(show: boolean, options?: Options): UseZoomImageReturn {
  const ref = React.useRef<HTMLImageElement>(null);
  const expandedImgRef = React.useRef<HTMLImageElement>(null);
  const backdropRef = React.useRef<HTMLDivElement>(null);

  const [refSrc, setRefSrc] = React.useState('');
  const [refAlt, setRefAlt] = React.useState('');
  const [refDimensions, setRefDimensions] = React.useState<ReferenceImageDimensions>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  // Get reference images values.
  React.useEffect(() => {
    if (ref.current) {
      setRefSrc(ref.current.src);
      setRefAlt(ref.current.alt);
      const refBoundingClient = ref.current.getBoundingClientRect();
      setRefDimensions(refBoundingClient);
    }
  }, [ref.current, show]);

  // Set custom zoom animation to ExpandImage
  React.useEffect(() => {
    if (expandedImgRef.current) {
      expandedImgRef.current.animate(
        [
          {
            top: `${refDimensions.y}px`,
            left: `${refDimensions.x}px`,
            transform: 'scale(1)',
          },
          {
            top: `50%`,
            left: '50%',
            transform: `translate(-50%, -50%) scale(${options?.scale || 1.2})`,
          },
        ],
        { duration: options?.duration || 200 }
      );
    }
    if (backdropRef.current) {
      backdropRef.current.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 100,
          },
        ],
        { duration: options?.duration || 200 }
      );
    }
  }, [expandedImgRef.current, backdropRef.current]);

  const ExpandedImage: ExpandedImageProps = ({ backdropOnClick }) => (
    <>
      <img
        ref={expandedImgRef}
        src={refSrc}
        alt={refAlt}
        // className="rounded shadow-md fixed z-50 transition-[top] ease-in-out top-1/2 left-1/2"
        style={{
          width: `${refDimensions.width}px`,
          height: `${refDimensions.height}px`,
          transform: `translate(-50%, -50%) scale(${options?.scale || 1.2})`,
          position: 'fixed',
          zIndex: 50,
          transition: 'all',
          top: '50%',
          left: '50%',
        }}
      />
      {options?.backdrop && (
        <div
          ref={backdropRef}
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            opacity: 100,
          }}
          onClick={() => {
            if (backdropOnClick) {
              backdropOnClick();
            }
          }}
        />
      )}
    </>
  );

  return [ref, ExpandedImage];
}
