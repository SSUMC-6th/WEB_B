// BY HERO_ICONS
export const CartIcon = ({ quantity }) => {
    return (
      <div style={{ position: 'relative' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40" // 여기서 크기 조정
          height="40" // 여기서 크기 조정
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {quantity > 0 && (
          <span style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            background: 'red',
            borderRadius: '50%',
            color: 'white',
            padding: '4px',
            fontSize: '12px',
          }}>
            {quantity}
          </span>
        )}
      </div>
    );
  };
  
  export const ChevronDown = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width="16" // 여기서 크기 조정
        height="16" // 여기서 크기 조정
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    );
  };
  
  export const ChevronUp = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width="16" // 여기서 크기 조정
        height="16" // 여기서 크기 조정
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
      </svg>
    );
  };