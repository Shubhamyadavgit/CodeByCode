import React from 'react'
import { useParams } from 'react-router-dom'
const Dashboard = () => {
    const params = useParams();
    const {name} = params;
  return (
    <div>This is {name+"'s"} Dashboard</div>
  )
}

export default Dashboard