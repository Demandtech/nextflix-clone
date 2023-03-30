import styles from '@/styles/Home.module.css'
import GuessLayout from '@/components/GuessLayout'
import Header from '@/components/Header'
import { useState } from 'react'

let regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function Home() {
  const [value, setValue] = useState('')
  const [isFocus, setIsFocus] = useState({label: false, outline: false })
  const [inputError, setInputError] = useState({ show: false, msg: '', match:false })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleFocus = () => {
    setIsFocus({ label: true, outline: true })
  }

  const handleBlur = () => {
    if (!value) {
      setIsFocus({ label: false, outline: false })
      setInputError({ show: true, msg: 'Email is required', match: false })
    } else if(value) {
      setIsFocus({ label: true, outline: false })
    }

    if(value.toLowerCase().match(regex)){
      console.log('error')
      setInputError({ show: false, msg: '', match:true })
    }else{
      setInputError({ show: true, msg: 'Please enter a valid email', match: false })
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <GuessLayout>
      <div className={styles.hero}>
        <Header />
        <div className={styles.heroContent}>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>

          <form action='' className={styles.form} onSubmit={handleSubmit}>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className={styles['form-control']}>
              <div
                className={`${styles['input-control']} ${
                  isFocus.outline ? `${styles['input-control-focus']}` : ''
                } ${inputError.show ? `${styles['input-error']}` : ''} ${
                  inputError.match ? `${styles['input-match']}` : ''
                }`}
              >
                <div
                  className={`${styles['input-label']} ${
                    isFocus.label ? `${styles['input-focus']}` : ``
                  }`}
                >
                  <label htmlFor='email'>Email Address</label>
                </div>
                <input
                  value={value}
                  id='email'
                  type='text'
                  name='email'
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  autoComplete={'off'}
                />
              </div>

              <div className={styles['btn-wrapper']}>
                <button className='btn'>Get Started &gt;</button>
              </div>
            </div>
            {inputError.show && (
              <div className={styles['error-el']}>
               <span className=''>&times;</span> <span>{inputError.msg}</span>{' '}
              </div>
            )}
          </form>
        </div>
      </div>
    </GuessLayout>
  )
}
