import { useRouter } from 'next/router'

export function HomePage() {
  const router = useRouter();

  return(
  <>
    <div className="btn-bar">
      <button type='button' className='pure-material-button-contained' onClick={() => {
        router.push("/45/979-1006-1007")
      }}>
        Pick 1
      </button>
      <button type='button' className='pure-material-button-contained' onClick={() => {
        router.push("/55/700-825-840")
      }}>
        Pick 2
      </button>
    </div>
    
    <style jsx>{
      `
      .btn-bar {
        padding: 0 400px;
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

