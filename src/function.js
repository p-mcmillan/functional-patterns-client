import ReactGA from 'react-ga4'
//const googleId = 'G-K8LNPTWM80'

//ReactGA.initialize(`${googleId}`)

export const getServerData = async () => {
  const response = await fetch('')
  const data = await response.json()

  return data
}

export const AnalyticsEvent = (category, action) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  })
}
