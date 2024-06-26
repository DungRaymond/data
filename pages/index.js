import { useRouter } from 'next/router'

export function HomePage() {
  const router = useRouter();

  return(
  <>
    <div className="btn-bar">
      <button type='button' className='pure-material-button-contained' onClick={() => {
        router.push("/45/0-1120-1151")
      }}>
        Mega
      </button>
      <button type='button' className='pure-material-button-contained' onClick={() => {
        router.push("/55/0-999-1039")
      }}>
        Power
      </button>
      <button type='button' className='pure-material-button-contained' onClick={() => {
        router.push("/56/0-999-1039")
      }}>
        Power 6
      </button>
    </div>
    <div className="btn-bar">
      <button type='button' className='pure-material-button-contained' onClick={() => {
        router.push("/combo/45")
      }}>
        Combo mega
      </button>
      <button type='button' className='pure-material-button-contained' onClick={() => {
        router.push("/combo/55")
      }}>
        Combo 55
      </button>
      {/* <button type='button' className='pure-material-button-contained' onClick={() => {
        router.push("/combo/56")
      }}>
        Combo 56
      </button> */}
    </div>
    
    <style jsx>{
      `
      .btn-bar {
        display: flex;
        justify-content: center;
      }
      /* Material style */
      button {
        border: none;
        cursor: pointer;
        color: white;
        padding: 15px 40px;
        border-radius: 2px;
        font-size: 22px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, .4);
        background: #2196F3;
      }
      
      /* Ripple magic */
      button{
        position: relative;
        overflow: hidden;
      }
      
      button:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        background: rgba(255, 255, 255, .5);
        opacity: 0;
        border-radius: 100%;
        transform: scale(1, 1) translate(-50%);
        transform-origin: 50% 50%;
      }
      
      @keyframes ripple {
        0% {
          transform: scale(0, 0);
          opacity: 1;
        }
        20% {
          transform: scale(25, 25);
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: scale(40, 40);
        }
      }
      
      button:focus:not(:active)::after {
        animation: ripple 1s ease-out;
      }
      
      `
    }</style>
  </>
  )
}



export default HomePage

