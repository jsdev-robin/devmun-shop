import React from 'react';
import { cn } from '../libs/utils';

const SellerBadgeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      height={30}
      width={30}
      aria-hidden="true"
      focusable="false"
      className={cn(className)}
    >
      <style>
        {`
          @keyframes badge-left-move {
            0%, 80% { transform: translate(1.4px, 10.4px); }
            90%, 100% { transform: translate(1.2px, 10.4px); }
          }
          @keyframes badge-left-fade {
            0%, 80% { opacity: 0; }
            90%, 100% { opacity: 1; }
          }
          @keyframes badge-right-move {
            0%, 80% { transform: translate(18.6px, 10.4px); }
            90%, 100% { transform: translate(18.8px, 10.4px); }
          }
          @keyframes badge-right-fade {
            0%, 80% { opacity: 0; }
            90%, 100% { opacity: 1; }
          }
          @keyframes star-rotate {
            0% { transform: translate(10px, 10px) rotate(-145deg); }
            20%, 100% { transform: translate(10px, 10px) rotate(0deg); }
          }
          .badge-animation {
            animation-iteration-count: infinite;
            animation-duration: 5s;
          }
        `}
      </style>

      <g
        className="badge-animation"
        style={{
          transform: 'translate(1.4px, 10.4px)',
          animationName: 'badge-left-move',
        }}
      >
        <g
          className="badge-animation"
          style={{
            transform: 'translate(-1.4px, -10.4px)',
            opacity: 0,
            animationName: 'badge-left-fade',
          }}
        >
          <g>
            <g>
              <polygon
                points="0.5,13.8 0,11.9 2.5,11.8 2.8,12.7"
                fill="#654B77"
                stroke="none"
                strokeWidth={1}
                strokeMiterlimit={1}
              />
            </g>
            <g>
              <polygon
                points="2.8,8.1 2.5,9.1 0,8.9 0.5,7"
                fill="#654B77"
                stroke="none"
                strokeWidth={1}
                strokeMiterlimit={1}
              />
            </g>
          </g>
        </g>
      </g>

      <g
        className="badge-animation"
        style={{
          transform: 'translate(18.6px, 10.4px)',
          animationName: 'badge-right-move',
        }}
      >
        <g
          className="badge-animation"
          style={{
            transform: 'translate(-18.6px, -10.4px)',
            opacity: 0,
            animationName: 'badge-right-fade',
          }}
        >
          <g>
            <polygon
              points="17.5,9.1 17.2,8.1 19.5,7 20,8.9"
              fill="#654B77"
              stroke="none"
              strokeWidth={1}
              strokeMiterlimit={1}
            />
          </g>
          <g>
            <polygon
              points="20,11.9 19.5,13.8 17.2,12.7 17.5,11.8"
              fill="#654B77"
              stroke="none"
              strokeWidth={1}
              strokeMiterlimit={1}
            />
          </g>
        </g>
      </g>

      <g
        className="badge-animation"
        style={{
          transform: 'translate(10px, 10px) rotate(-145deg)',
          animationName: 'star-rotate',
        }}
      >
        <g style={{ transform: 'translate(-10px, -10px)' }}>
          <path
            d="M15.6,6.8L14.1,5.9L13.2,4.4L11.5,4.4L10,3.5L8.5,4.4L6.7,4.4L5.9,5.9L4.4,6.8L4.4,8.5L3.5,10L4.4,11.5L4.4,13.2L5.9,14.1L6.8,15.6L8.5,15.6L10,16.5L11.5,15.6L13.2,15.6L14.1,14.1L15.6,13.2L15.6,11.5L16.5,10L15.6,8.5L15.6,6.8ZM11.7,10.7L12.2,12.9C12.1,13,12.1,13,11.9,13.1L10,12L8.1,13.2C8,13.1,8,13.1,7.8,13L8.3,10.8L6.6,9.3C6.7,9.1,6.7,9.1,6.7,9L9,8.8L9.9,6.7C10.1,6.7,10.1,6.7,10.2,6.7L11.1,8.8L13.4,9C13.5,9.2,13.5,9.2,13.5,9.3L11.7,10.7Z"
            fill="#9560B8"
            stroke="none"
            strokeWidth={1}
            strokeMiterlimit={1}
          />
        </g>
      </g>
    </svg>
  );
};

export default SellerBadgeIcon;
