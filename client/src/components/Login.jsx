import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'

const Login = () => {
  const [state, setState] = useState('Login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
        } else {
          alert(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
        } else {
          alert(data.message)
        }
      }
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        background: '#1c1c27',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        padding: '40px',
        width: '90%',
        maxWidth: 420,
        position: 'relative',
        animation: 'slideUp 0.3s ease',
      }}>
        {/* Close */}
        <button
          onClick={() => setShowLogin(false)}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            color: '#a0a0b8',
            width: 32,
            height: 32,
            borderRadius: '50%',
            fontSize: 18,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >×</button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>✨</div>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 6 }}>
            {state === 'Login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p style={{ color: '#a0a0b8', fontSize: 14 }}>
            {state === 'Login' ? 'Sign in to continue generating images' : 'Sign up to start generating images'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmitHandler} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {state !== 'Login' && (
            <div>
              <label style={{ fontSize: 13, color: '#a0a0b8', display: 'block', marginBottom: 6 }}>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  padding: '12px 16px',
                  color: '#fff',
                  fontSize: 14,
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          )}

          <div>
            <label style={{ fontSize: 13, color: '#a0a0b8', display: 'block', marginBottom: 6 }}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                padding: '12px 16px',
                color: '#fff',
                fontSize: 14,
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: 13, color: '#a0a0b8', display: 'block', marginBottom: 6 }}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                padding: '12px 16px',
                color: '#fff',
                fontSize: 14,
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {state === 'Login' && (
            <p style={{ fontSize: 13, color: '#6c63ff', cursor: 'pointer', textAlign: 'right', marginTop: -8 }}>
              Forgot password?
            </p>
          )}

          <button type="submit" style={{
            background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
            border: 'none',
            borderRadius: 10,
            padding: '13px',
            color: '#fff',
            fontSize: 15,
            fontWeight: 600,
            cursor: 'pointer',
            marginTop: 4,
          }}>
            {state === 'Login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {/* Toggle */}
        <p style={{ textAlign: 'center', marginTop: 20, color: '#a0a0b8', fontSize: 14 }}>
          {state === 'Login' ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={() => setState(state === 'Login' ? 'Sign Up' : 'Login')}
            style={{ color: '#6c63ff', cursor: 'pointer', fontWeight: 600 }}
          >
            {state === 'Login' ? 'Sign Up' : 'Sign In'}
          </span>
        </p>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Login
