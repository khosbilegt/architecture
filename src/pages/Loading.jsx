import React from 'react';
import './Loading.css';

function Loading() {

  return (
    <div className='loading'>
     <svg id="logo" width="615" height="114" viewBox="0 0 615 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-outside-1_1_5" maskUnits="userSpaceOnUse" x="-0.682617" y="0.335999" width="616" height="113" fill="black">
               <rect fill="#ededed" x="-0.682617" y="0.335999" width="616" height="113"/>
               <path d="M40.0214 108.008C33.3974 108.008 27.4454 106.856 22.1654 104.552C16.9814 102.152 12.9014 98.888 9.92538 94.76C6.94938 90.536 5.41338 85.688 5.31738 80.216H19.2854C19.7654 84.92 21.6854 88.904 25.0454 92.168C28.5014 95.336 33.4934 96.92 40.0214 96.92C46.2614 96.92 51.1574 95.384 54.7094 92.312C58.3574 89.144 60.1814 85.112 60.1814 80.216C60.1814 76.376 59.1254 73.256 57.0134 70.856C54.9014 68.456 52.2614 66.632 49.0934 65.384C45.9254 64.136 41.6534 62.792 36.2774 61.352C29.6534 59.624 24.3254 57.896 20.2934 56.168C16.3574 54.44 12.9494 51.752 10.0694 48.104C7.28538 44.36 5.89339 39.368 5.89339 33.128C5.89339 27.656 7.28538 22.808 10.0694 18.584C12.8534 14.36 16.7414 11.096 21.7334 8.79199C26.8214 6.48799 32.6294 5.336 39.1574 5.336C48.5654 5.336 56.2454 7.688 62.1974 12.392C68.2454 17.096 71.6534 23.336 72.4214 31.112H58.0214C57.5414 27.272 55.5254 23.912 51.9734 21.032C48.4214 18.056 43.7174 16.568 37.8614 16.568C32.3894 16.568 27.9254 18.008 24.4694 20.888C21.0134 23.672 19.2854 27.608 19.2854 32.696C19.2854 36.344 20.2934 39.32 22.3094 41.624C24.4214 43.928 26.9654 45.704 29.9414 46.952C33.0134 48.104 37.2854 49.448 42.7574 50.984C49.3814 52.808 54.7094 54.632 58.7414 56.456C62.7734 58.184 66.2294 60.92 69.1094 64.664C71.9894 68.312 73.4294 73.304 73.4294 79.64C73.4294 84.536 72.1334 89.144 69.5414 93.464C66.9494 97.784 63.1094 101.288 58.0214 103.976C52.9334 106.664 46.9334 108.008 40.0214 108.008Z"/>
               <path d="M152.041 84.68H108.265L100.201 107H86.377L122.665 7.208H137.785L173.929 107H160.105L152.041 84.68ZM148.297 74.024L130.153 23.336L112.009 74.024H148.297Z"/>
               <path d="M268.656 107H255.552L202.848 27.08V107H189.744V6.488H202.848L255.552 86.264V6.488H268.656V107Z"/>
               <path d="M286.098 56.744C286.098 46.952 288.306 38.168 292.722 30.392C297.138 22.52 303.138 16.376 310.722 11.96C318.402 7.544 326.898 5.336 336.21 5.336C347.154 5.336 356.706 7.976 364.866 13.256C373.026 18.536 378.978 26.024 382.722 35.72H367.026C364.242 29.672 360.21 25.016 354.93 21.752C349.746 18.488 343.506 16.856 336.21 16.856C329.202 16.856 322.914 18.488 317.346 21.752C311.778 25.016 307.41 29.672 304.242 35.72C301.074 41.672 299.49 48.68 299.49 56.744C299.49 64.712 301.074 71.72 304.242 77.768C307.41 83.72 311.778 88.328 317.346 91.592C322.914 94.856 329.202 96.488 336.21 96.488C343.506 96.488 349.746 94.904 354.93 91.736C360.21 88.472 364.242 83.816 367.026 77.768H382.722C378.978 87.368 373.026 94.808 364.866 100.088C356.706 105.272 347.154 107.864 336.21 107.864C326.898 107.864 318.402 105.704 310.722 101.384C303.138 96.968 297.138 90.872 292.722 83.096C288.306 75.32 286.098 66.536 286.098 56.744Z"/>
               <path d="M479.557 6.632V107H466.453V61.496H415.333V107H402.229V6.632H415.333V50.696H466.453V6.632H479.557Z"/>
               <path d="M515.036 6.632V107H501.932V6.632H515.036Z"/>
               <path d="M590.217 107L566.313 65.96H550.473V107H537.369V6.632H569.769C577.353 6.632 583.737 7.928 588.921 10.52C594.201 13.112 598.137 16.616 600.729 21.032C603.321 25.448 604.617 30.488 604.617 36.152C604.617 43.064 602.601 49.16 598.569 54.44C594.633 59.72 588.681 63.224 580.713 64.952L605.913 107H590.217ZM550.473 55.448H569.769C576.873 55.448 582.201 53.72 585.753 50.264C589.305 46.712 591.081 42.008 591.081 36.152C591.081 30.2 589.305 25.592 585.753 22.328C582.297 19.064 576.969 17.432 569.769 17.432H550.473V55.448Z"/>
          </mask>
          <path d="M40.0214 108.008C33.3974 108.008 27.4454 106.856 22.1654 104.552C16.9814 102.152 12.9014 98.888 9.92538 94.76C6.94938 90.536 5.41338 85.688 5.31738 80.216H19.2854C19.7654 84.92 21.6854 88.904 25.0454 92.168C28.5014 95.336 33.4934 96.92 40.0214 96.92C46.2614 96.92 51.1574 95.384 54.7094 92.312C58.3574 89.144 60.1814 85.112 60.1814 80.216C60.1814 76.376 59.1254 73.256 57.0134 70.856C54.9014 68.456 52.2614 66.632 49.0934 65.384C45.9254 64.136 41.6534 62.792 36.2774 61.352C29.6534 59.624 24.3254 57.896 20.2934 56.168C16.3574 54.44 12.9494 51.752 10.0694 48.104C7.28538 44.36 5.89339 39.368 5.89339 33.128C5.89339 27.656 7.28538 22.808 10.0694 18.584C12.8534 14.36 16.7414 11.096 21.7334 8.79199C26.8214 6.48799 32.6294 5.336 39.1574 5.336C48.5654 5.336 56.2454 7.688 62.1974 12.392C68.2454 17.096 71.6534 23.336 72.4214 31.112H58.0214C57.5414 27.272 55.5254 23.912 51.9734 21.032C48.4214 18.056 43.7174 16.568 37.8614 16.568C32.3894 16.568 27.9254 18.008 24.4694 20.888C21.0134 23.672 19.2854 27.608 19.2854 32.696C19.2854 36.344 20.2934 39.32 22.3094 41.624C24.4214 43.928 26.9654 45.704 29.9414 46.952C33.0134 48.104 37.2854 49.448 42.7574 50.984C49.3814 52.808 54.7094 54.632 58.7414 56.456C62.7734 58.184 66.2294 60.92 69.1094 64.664C71.9894 68.312 73.4294 73.304 73.4294 79.64C73.4294 84.536 72.1334 89.144 69.5414 93.464C66.9494 97.784 63.1094 101.288 58.0214 103.976C52.9334 106.664 46.9334 108.008 40.0214 108.008Z" stroke="#ededed" strokeWidth="10" mask="url(#path-1-outside-1_1_5)"/>
          <path d="M152.041 84.68H108.265L100.201 107H86.377L122.665 7.208H137.785L173.929 107H160.105L152.041 84.68ZM148.297 74.024L130.153 23.336L112.009 74.024H148.297Z" stroke="#ededed" strokeWidth="10" mask="url(#path-1-outside-1_1_5)"/>
          <path d="M268.656 107H255.552L202.848 27.08V107H189.744V6.488H202.848L255.552 86.264V6.488H268.656V107Z" stroke="#ededed" strokeWidth="10" mask="url(#path-1-outside-1_1_5)"/>
          <path d="M286.098 56.744C286.098 46.952 288.306 38.168 292.722 30.392C297.138 22.52 303.138 16.376 310.722 11.96C318.402 7.544 326.898 5.336 336.21 5.336C347.154 5.336 356.706 7.976 364.866 13.256C373.026 18.536 378.978 26.024 382.722 35.72H367.026C364.242 29.672 360.21 25.016 354.93 21.752C349.746 18.488 343.506 16.856 336.21 16.856C329.202 16.856 322.914 18.488 317.346 21.752C311.778 25.016 307.41 29.672 304.242 35.72C301.074 41.672 299.49 48.68 299.49 56.744C299.49 64.712 301.074 71.72 304.242 77.768C307.41 83.72 311.778 88.328 317.346 91.592C322.914 94.856 329.202 96.488 336.21 96.488C343.506 96.488 349.746 94.904 354.93 91.736C360.21 88.472 364.242 83.816 367.026 77.768H382.722C378.978 87.368 373.026 94.808 364.866 100.088C356.706 105.272 347.154 107.864 336.21 107.864C326.898 107.864 318.402 105.704 310.722 101.384C303.138 96.968 297.138 90.872 292.722 83.096C288.306 75.32 286.098 66.536 286.098 56.744Z" stroke="#ededed" strokeWidth="10" mask="url(#path-1-outside-1_1_5)"/>
          <path d="M479.557 6.632V107H466.453V61.496H415.333V107H402.229V6.632H415.333V50.696H466.453V6.632H479.557Z" stroke="#ededed" strokeWidth="10" mask="url(#path-1-outside-1_1_5)"/>
          <path d="M515.036 6.632V107H501.932V6.632H515.036Z" stroke="#ededed" strokeWidth="10" mask="url(#path-1-outside-1_1_5)"/>
          <path d="M590.217 107L566.313 65.96H550.473V107H537.369V6.632H569.769C577.353 6.632 583.737 7.928 588.921 10.52C594.201 13.112 598.137 16.616 600.729 21.032C603.321 25.448 604.617 30.488 604.617 36.152C604.617 43.064 602.601 49.16 598.569 54.44C594.633 59.72 588.681 63.224 580.713 64.952L605.913 107H590.217ZM550.473 55.448H569.769C576.873 55.448 582.201 53.72 585.753 50.264C589.305 46.712 591.081 42.008 591.081 36.152C591.081 30.2 589.305 25.592 585.753 22.328C582.297 19.064 576.969 17.432 569.769 17.432H550.473V55.448Z" stroke="#ededed" strokeWidth="10" mask="url(#path-1-outside-1_1_5)"/>
     </svg>


    </div>
  )
}

export default Loading;