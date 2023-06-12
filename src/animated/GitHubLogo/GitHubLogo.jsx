import styles from './GitHubLogo.module.css';

export const GitHubLogo = () => {
  return (
    <div className={styles.container}>
      <a
        href={'https://github.com/RimbiBimbi1'}
        target={'_blank'}
        rel={'noreferrer'}
        title={'Naciśnij, aby przejść do mojego profilu na GitHubie'}
        className={styles.highlight}
      >
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 400,400">
          <g id="svgg">
            <path
              id="path0"
              d="M182.813 5.161 C 169.896 6.696,165.560 7.358,157.097 9.085 C 114.512 17.777,72.449 43.624,44.507 78.270 C -41.400 184.788,1.377 344.092,128.817 392.247 C 148.468 399.672,150.781 397.074,150.781 367.567 L 150.781 347.479 148.242 347.966 C 141.111 349.335,123.494 349.401,115.537 348.089 C 98.085 345.211,90.556 339.277,82.138 321.761 C 75.941 308.868,71.277 302.148,65.440 297.701 C 63.178 295.978,60.058 293.593,58.506 292.401 C 52.276 287.618,52.091 284.453,57.992 283.626 C 70.160 281.918,83.168 290.148,94.373 306.641 C 103.575 320.185,112.322 325.300,126.172 325.236 C 138.353 325.180,151.563 321.862,151.563 318.858 C 151.563 313.304,156.197 302.448,161.021 296.702 C 164.600 292.440,165.057 292.812,154.557 291.441 C 101.061 284.457,73.458 252.392,73.150 196.875 C 73.032 175.684,77.262 161.976,88.451 147.283 C 93.191 141.058,93.196 141.048,92.289 137.908 C 87.708 122.055,88.991 98.395,94.923 89.341 C 98.437 83.979,122.674 91.777,144.343 105.241 L 150.015 108.765 156.843 107.115 C 184.395 100.456,215.605 100.456,243.157 107.115 L 249.985 108.765 255.657 105.287 C 277.407 91.948,300.774 83.908,304.514 88.477 C 310.648 95.970,312.355 121.448,307.800 137.531 L 306.795 141.077 311.299 146.906 C 323.934 163.259,328.880 182.615,326.641 206.943 C 321.995 257.428,296.235 284.295,245.703 291.363 C 234.881 292.877,235.440 292.379,239.266 297.085 C 248.180 308.049,249.219 314.071,249.219 354.781 C 249.219 398.482,250.210 400.172,271.183 392.247 C 430.710 331.968,445.445 109.603,295.298 28.337 C 263.050 10.883,216.086 1.207,182.813 5.161 "
            />
          </g>
        </svg>
      </a>
    </div>
  );
};
