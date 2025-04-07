// Modern, minimalist icon components
// Replace these with your actual icons later

interface IconProps {
  className?: string
}

export const PlaceholderIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    className={className}
  >
    <rect
      x="4"
      y="4"
      width="24"
      height="24"
      rx="8"
      className="fill-gray-100 stroke-gray-400 dark:fill-gray-800 dark:stroke-gray-600"
      strokeWidth="1.5"
    />
    <path
      d="M16 11v10M11 16h10"
      className="stroke-gray-400 dark:stroke-gray-500"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

export const OndaIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
  <rect 
  width="48" 
  height="48" 
  rx="12" 
  className="fill-gray-100 stroke-gray-400 dark:fill-gray-800 dark:stroke-gray-600"
  />
  <rect 
  x="1" 
  y="1" 
  width="46" 
  height="46" 
  rx="11" 
  className="fill-gray-100 stroke-gray-400 dark:fill-gray-800 dark:stroke-gray-600"
  />
    <g>
      <path d="M26.59 32.04c-2.386-.887-4.84-1.024-7.09-.41-1.569.41-3.069 1.227-4.432 2.25l-.955.818-.272.273.613.545c.068 0 .068.069.136.137.137.136.273.204.478.34l.409.273.409-.34c.068-.069.204-.205.34-.273 1.228-1.023 2.592-1.705 4.024-2.046 1.84-.477 3.818-.409 5.795.341 1.636.614 4.977 1.364 9-.34l.136-.069.205-.205c0-.068.068-.068.136-.136.34-.409.682-.818.955-1.295l1.363-2.114-2.182 1.227c-3.204 1.773-6.136 2.114-9.068 1.023" fill="#555555"/>
      
      <path d="M17.25 24.676c1.84-.477 3.818-.41 5.795.34 2.182.819 7.773 1.978 14.045-3.681l1.364-1.364-.136-.34c-.069-.273-.205-.614-.341-.955l-.341-.955-.682.682c-.068.137-.205.205-.34.341-3 3.068-7.637 6.204-12.955 4.296-2.386-.887-4.841-1.023-7.09-.41-2.183.614-4.092 1.773-5.864 3.41v-.069l-1.023 1.091c0 .068-.068.068-.137.136l-.204.205.068.273c.068.34.205.682.273 1.022l.409 1.091.682-.886c.068-.136.204-.204.272-.34 1.432-1.296 3.41-3.137 6.205-3.887" fill="#666666"/>
      
      <path d="M10.636 23.448c1.569-1.636 3.341-2.659 5.25-3.204 1.841-.477 3.818-.41 5.796.34 6.136 2.25 11.454-1.431 13.772-3.408l.886-.887.341-.272-.272-.41c-.205-.204-.341-.477-.546-.75l-.409-.545-.477.477-.273.273c-2.864 2.727-7.295 5.523-12.34 3.614-2.387-.887-4.841-1.023-7.091-.41-1.432.41-2.796 1.092-4.16 1.978l-1.431 1.159-.341.34-.136.137v.205c-.069.477-.069.954-.137 1.363L9 25.153l1.16-1.227c.135-.137.272-.341.476-.478" fill="#777777"/>
      
      <path d="M28.568 36.675c-.204-.068-.34-.136-.545-.204-2.387-.886-4.841-1.023-7.091-.41-.477.137-.955.273-1.432.478l-1.636.75-.41.205 1.364.477 1.227.409.205.068.205-.068c.204-.068.409-.205.613-.205.137 0 .273-.068.41-.136 1.636-.409 3.408-.409 5.317.205.205.068.341.136.546.204l.34.136.205-.068c.478-.136 1.023-.272 1.432-.477l1.91-.682-1.978-.477c-.205-.068-.477-.136-.682-.205" fill="#444444"/>
      
      <path d="m39 22.562-1.023 1.023-.409.409c-2.795 2.659-7.295 5.523-12.34 3.613-2.387-.886-4.841-1.022-7.091-.409-2.114.614-4.023 1.705-5.727 3.341l-.887.955-.272.34.272.41c.205.273.341.477.478.75l.409.613.477-.613.272-.273c1.637-1.773 3.41-2.864 5.455-3.409 1.84-.477 3.818-.41 5.795.34 1.705.614 3.478.82 5.25.614 3.137-.34 6.273-2.113 8.591-4.09.136-.137.273-.205.41-.341l.204-.205v-.204c0-.41.068-.887.068-1.296z" fill="#555555"/>
      
      <path d="M13.09 16.29c.41-.205.887-.341 1.296-.478 1.84-.477 3.818-.409 5.795.341 1.296.478 2.591.682 4.023.682 2.863 0 5.727-1.023 8.386-3l1.364-1.09-.614-.478a3 3 0 0 0-.75-.545l-.41-.273-.34.273c-.136.068-.205.204-.34.272-3.614 2.727-7.228 3.477-10.637 2.182-2.455-.886-4.91-1.09-7.364-.34-.204.067-.409.135-.681.204l-.137.068-.204.204c0 .069-.069.069-.137.137-.272.409-.613.75-.886 1.159l-1.296 1.977 2.114-1.09c.341 0 .614-.137.818-.205" fill="#666666"/>
      
      <path d="m18.682 11.653.204.068c.887.341 2.25.682 3.955.682 1.772 0 3.477-.409 5.181-1.09l2.114-1.023-1.432-.478c-.409-.136-.818-.272-1.295-.34h-.205L27 9.54c-.205.068-.41.204-.614.272-2.045.75-4.09.887-6.068.341l-.614-.204-.204-.069-.205.069c-.409.136-.818.272-1.227.477l-1.568.682 1.636.477c.137-.068.341 0 .546.068" fill="#777777"/>
    </g>
  </svg>
) 

export const CapasIcon = ({ className }: IconProps) => (
  <svg 
  width="48" 
  height="48" 
  viewBox="0 0 48 48" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg">
    <rect 
    width="48" 
    height="48" 
    rx="12" 
    className="fill-gray-100 stroke-gray-400 dark:fill-gray-800 dark:stroke-gray-600"
    />
    <g fillRule="evenodd" clipRule="evenodd">
      <path opacity=".5" d="m34.94 12.3-7.264-1.946c-.502-.134-.909.178-.909.697v7.521c0 .52.407 1.05.909 1.184l7.265 1.946c.501.135.908-.177.908-.697v-7.52c0-.52-.407-1.05-.908-1.184m-7.264-4.767c-2.007-.537-3.633.71-3.633 2.788v7.521c0 2.077 1.626 4.197 3.633 4.734l7.265 1.947c2.006.537 3.632-.71 3.632-2.788v-7.52c0-2.078-1.626-4.197-3.632-4.735z" fill="#777777"/>
      <path opacity=".7" d="m29.235 18.428-9.081-2.433c-.502-.135-.908.177-.908.697v9.401c0 .52.407 1.05.908 1.184l9.081 2.433c.502.135.909-.177.909-.697v-9.401c0-.52-.407-1.05-.909-1.184m-9.081-5.254c-2.006-.537-3.633.71-3.633 2.788v9.401c0 2.077 1.627 4.197 3.633 4.734l9.081 2.434c2.007.537 3.633-.71 3.633-2.788v-9.401c0-2.077-1.626-4.197-3.633-4.734z" fill="#555555"/>
      <path d="m23.53 24.556-10.897-2.92c-.502-.135-.909.177-.909.697v11.282c0 .519.407 1.049.909 1.183l10.897 2.92c.502.134.908-.178.908-.697V25.74c0-.52-.406-1.049-.908-1.183m-10.897-5.74C10.626 18.277 9 19.525 9 21.602v11.282c0 2.077 1.626 4.196 3.633 4.734l10.897 2.92c2.006.537 3.633-.71 3.633-2.788V26.47c0-2.077-1.627-4.196-3.633-4.734z" fill="#333333"/>
    </g>
    <rect 
    x="1" 
    y="1" 
    width="46" 
    height="46" 
    rx="11" 
    className="stroke-gray-400 dark:stroke-gray-600"
    />
  </svg>
)

export const VisionIcon = ({ className }: IconProps) => (
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" className="fill-gray-100 stroke-gray-400 dark:fill-gray-800 dark:stroke-gray-600"/>
  <g fillRule="evenodd" clipRule="evenodd">
    <path d="M25.6029 11.2749C23.2598 8.93179 19.4608 8.93179 17.1176 11.2749L8.63236 19.7602C6.28921 22.1034 6.28921 25.9024 8.63236 28.2455L17.1176 36.7308C19.4608 39.0739 23.2598 39.0739 25.6029 36.7308L29.6516 32.6821C26.2812 31.3818 23.8901 28.1113 23.8901 24.2823C23.8901 20.3007 26.4755 16.9231 30.0591 15.7366C29.9891 15.6629 29.9179 15.5899 29.8456 15.5176L25.6029 11.2749Z" fill="#555555"/>
    <path opacity="0.7" d="M29.6523 32.6848C30.6571 33.0724 31.7489 33.2849 32.8904 33.2849C37.8609 33.2849 41.8904 29.2555 41.8904 24.2849C41.8904 19.3143 37.8609 15.2849 32.8904 15.2849C31.9015 15.2849 30.9499 15.4444 30.0599 15.739C34.5316 20.4401 34.4605 27.8767 29.8464 32.4907L29.6523 32.6848Z" fill="#777777"/>
  </g>
    <rect x="1" y="1" width="46" height="46" rx="11" className="stroke-gray-400 dark:stroke-gray-600"/>
</svg>
)

export const VoltioIcon = ({ className }: IconProps) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" className="fill-gray-100 stroke-gray-400 dark:fill-gray-800 dark:stroke-gray-600"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39ZM28.6795 15.9876C28.9073 15.1785 28.1221 14.7001 27.405 15.211L17.3948 22.3422C16.6172 22.8962 16.7395 24 17.5786 24H20.2145V23.9796H25.3519L21.1659 25.4566L19.3205 32.0124C19.0928 32.8215 19.8779 33.2999 20.595 32.789L30.6052 25.6579C31.3829 25.1038 31.2605 24 30.4214 24H26.4241L28.6795 15.9876Z" fill="#555555"/>
    <rect x="1" y="1" width="46" height="46" rx="11" className="stroke-gray-400 dark:stroke-gray-600"/>
  </svg>
)

export const TerminalIcon = ({ className }: IconProps) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><g clip-path="url(#b)"><rect width="48" height="48" rx="12" fill="#22262F"/><path fill="url(#c)" d="M0 0h48v48H0z"/><g filter="url(#d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.672 9.75a6.75 6.75 0 0 0-5.846 3.375l-4.33 7.5a6.75 6.75 0 0 0 0 6.75l4.33 7.5a6.75 6.75 0 0 0 5.846 3.375h8.66a6.75 6.75 0 0 0 5.846-3.375l4.33-7.5a6.75 6.75 0 0 0 0-6.75l-4.33-7.5a6.75 6.75 0 0 0-5.846-3.375zm8.66 4.5H22.92c-.866 0-1.407.937-.973 1.687 1.338 2.313 2.68 4.624 4.015 6.938a2.25 2.25 0 0 1 0 2.25q-2.006 3.47-4.015 6.938c-.434.75.107 1.687.973 1.687h5.413a2.25 2.25 0 0 0 1.949-1.125l4.33-7.5a2.25 2.25 0 0 0 0-2.25l-4.33-7.5a2.25 2.25 0 0 0-1.949-1.125" fill="url(#e)"/></g></g><rect x="1" y="1" width="46" height="46" rx="11" stroke="url(#f)" stroke-width="2"/></g><defs><linearGradient id="c" x1="24" y1="0" x2="26" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".12"/></linearGradient><linearGradient id="e" x1="24.002" y1="9.75" x2="24.002" y2="38.25" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity=".5"/></linearGradient><linearGradient id="f" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".12"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="a" x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="-3"/><feGaussianBlur stdDeviation="1.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend in2="shape" result="effect1_innerShadow_3051_46887"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3"/><feGaussianBlur stdDeviation="1.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend in2="effect1_innerShadow_3051_46887" result="effect2_innerShadow_3051_46887"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="1" in="SourceAlpha" result="effect3_innerShadow_3051_46887"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend in2="effect2_innerShadow_3051_46887" result="effect3_innerShadow_3051_46887"/></filter><filter id="d" x="5.25" y="5.25" width="37.5" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="1.5" in="SourceAlpha" result="effect1_dropShadow_3051_46887"/><feOffset dy="2.25"/><feGaussianBlur stdDeviation="2.25"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3051_46887"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_3051_46887" result="shape"/></filter><clipPath id="b"><rect width="48" height="48" rx="12" className="fill-white"/></clipPath></defs></svg>
)
