import React from 'react'
import { asyncloadmovie } from '../store/actions/MovieActions'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'

const Moviedetails = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(()=>{
      dispatch(asyncloadmovie(id))
  },[])
  return (
     
    <div>
      Moviedetails
      </div>
  )
}

export default Moviedetails