import React from 'react'
import useLogout from '../../hooks/useLogout'

const Dashboard: React.FC = () => {
  useLogout(5 * 60 * 1000)
  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
}
export default Dashboard