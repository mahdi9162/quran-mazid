type WaveProps = {
  className?: string;
};

const LeftWave = ({ className = '' }: WaveProps) => {
  return (
    <svg width="760" height="220" viewBox="0 0 760 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M344 93.5C205.2 -39.3 -23.5 -2.50005 -120.5 32.5L-139 32.4999L-6 263.5L1010.5 277.5C1005 251.5 971.8 235.3 891 194.5C790 143.5 517.5 259.5 344 93.5Z"
        fill="url(#paint0_linear_2125_59273)"
      ></path>
      <defs>
        <linearGradient id="paint0_linear_2125_59273" x1="889.665" y1="189.67" x2="-407.019" y2="189.67" gradientUnits="userSpaceOnUse">
          <stop offset="0.151155" stopColor="currentColor"></stop>
          <stop offset="0.668158" stopColor="currentColor" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LeftWave;
