import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <button
        onClick={onClickHandler}
        style={{
          background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
          border: 'none',
          borderRadius: 50,
          padding: '16px 40px',
          color: '#fff',
          fontSize: 17,
          fontWeight: 600,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          transition: 'transform 0.2s, box-shadow 0.2s',
          boxShadow: '0 4px 30px rgba(108,99,255,0.3)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 8px 40px rgba(108,99,255,0.5)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 4px 30px rgba(108,99,255,0.3)'
        }}
      >
        <span>Generate Images</span>
        <span style={{ fontSize: 20 }}>✨</span>
      </button>
    </div>
  )
}

export default GenerateBtn
