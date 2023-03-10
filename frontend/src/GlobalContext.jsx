import { createContext, useState, useEffect } from 'react'

const GlobalContext = createContext(null)

export const GlobalProvider = ({ children }) => {
  // useState for all variables
  const [auth, setAuth] = useState({ loggedIn: false })
  const [concerts, setConcerts] = useState([])
  const [featuredEvents, setFeaturedEvents] = useState([])
  const [todaysEvents, setTodaysEvents] = useState([])
  const [recentlyAddedEvents, setRecentlyAddedEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // useEffect to run methods upon load
  useEffect(() => {
    void checkAuth()
    void loadConcerts()
  }, [])

  // methods, could be for on load, or just called from elsewhere

  const checkAuth = async () => {
    setIsLoading(true)
    const response = await fetch('/rest/login')
    console.log('loading auth')
    const result = await response.json()
    console.log('auth state: ', result)
    setAuth(result)
    setIsLoading(false)
  }

  const submitLogin = async (email, password) => {
    setIsLoading(true)
    const response = await fetch('/rest/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const result = await response.json()
    console.log(result)
    setIsLoading(false)
    void checkAuth()
  }

  const logout = async () => {
    setIsLoading(true)
    const response = await fetch('/rest/login', {
      method: 'delete',
    })
    const result = await response.json()
    console.log(result)
    setIsLoading(false)
    setAuth({ loggedIn: false })
  }

  const loadConcerts = async () => {
    setIsLoading(true)
    const response = await fetch('/rest/concerts')
    const result = await response.json()
    const tempSort = await result.sort(function (a, b) {
      if (a.datum !== b.datum) {
        return a.datum > b.datum ? 1 : -1
      }
      if (a.hour !== b.hour) {
        return a.hour > b.hour ? 1 : -1
      }
      if (a.minute !== b.minute) {
        return a.minute > b.minute ? 1 : -1
      }
    })
    tempSort.forEach((event) => {
      event.ticket = Math.floor(Math.random() * 2)
      event.info =
        'To ne cede malis, sed contra audentior ito Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, unde cupiditate iste quidem dolore possimus voluptates excepturi at esse, non quaerat, laborum voluptatem eius fugiat molestiae corrupti dolorem sit libero quibusdam placeat optio! Aliquid a beatae velit distinctio possimus architecto asperiores maiores eos facilis sit maxime, quam, quaerat, quas voluptatum!'
    })
    console.log(tempSort)
    todaysConcerts(tempSort)
    recentlyAddedConcerts(tempSort)
    featuredConcerts(tempSort)
    setConcerts(tempSort)
    setIsLoading(false)
  }

  async function todaysConcerts(arr) {
    let tempArray = []
    for (let i = 0; i < 6; i++) {
      tempArray.push(arr[Math.floor(Math.random() * arr.length)])
      let today = new Date()
      let date =
        today.getDate() +
        '-' +
        parseInt(today.getMonth() + 1) +
        '-' +
        today.getFullYear()
      tempArray[i].datum = date
    }
    setTodaysEvents([...tempArray])
  }

  async function recentlyAddedConcerts(arr) {
    let tempArray = []
    for (let i = 0; i < 6; i++) {
      tempArray.push(arr[Math.floor(Math.random() * arr.length)])
      let today = new Date()
      let date =
        today.getDate() +
        '-' +
        parseInt(today.getMonth() + 1) +
        '-' +
        today.getFullYear()
      tempArray[i].added = date
    }
    setRecentlyAddedEvents([...tempArray])
  }

  async function featuredConcerts(arr) {
    let tempArray = []
    for (let i = 0; i < 6; i++) {
      tempArray.push(arr[Math.floor(Math.random() * arr.length)])
    }
    setFeaturedEvents([...tempArray])
  }

  return (
    <GlobalContext.Provider
      value={{
        auth,
        concerts,
        isLoading,
        submitLogin,
        logout,
        todaysEvents,
        recentlyAddedEvents,
        featuredEvents,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
