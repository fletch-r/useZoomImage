export type ReferenceImageDimensions = {
  /** x position of the reference image on the page */
  x: number;
  /** y position of the reference image on the page */
  y: number;
  /** width of reference image */
  width: number;
  /** height of reference image */
  height: number;
};

export type Options = {
  scale?: number;
  duration?: number;
  backdrop?: boolean;
};

export type ReturnRef = React.RefObject<HTMLImageElement>;

export type ExpandedImageProps = React.FC<{ backdropOnClick?: () => void }>;

export type UseZoomImageReturn = [ReturnRef, ExpandedImageProps];
