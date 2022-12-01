// <WishListForm />
//main layout and refractor our stuff in the components

//<h2>Hello Michelle</h2>
//YO LETS ADD TO YOUR WISHLISTTTTTT BEEETCHHH
//Your partner will be revealed on:

//submit calls  createWishlist()
//Displays your own wishlist getWishlistById()
//with edit button

//conditional later
//Get status - countdown?

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getWishlistByIdApi, updatedWishlistApi } from '../apiClient/guest'

export default function AddWishlist() {
  const initialState = { wishlist: '' }
  const [newWish, setNewWish] = useState(initialState)
  const { guest_code } = useParams()

  const dummy = {
    guest_code: 123,
    event_id: 987,
    name: 'Minnie Mouse',
    wishlist: '',
  }
  const partner = 'Mickey Mouse in da House'
  const partnerWishlist = 'cheese and more cheese'
  const completed = true

  console.log(newWish, 'newWish in AddWishlist with guest_code')

  useEffect(() => {
    getWishlistByIdApi()
      .then((wishlist) => {
        setNewWish(wishlist)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    console.log(name, value, 'name value')
    setNewWish((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    return updatedWishlistApi(guest_code, newWish).then(
      setNewWish(initialState)
    )
  }

  return (
    <>
      <h1>Welcome {dummy.name}. Add to your wishlist!</h1>
      {completed ? (
        <form className='form'>
          <label htmlFor='wishlist'>Wish List: </label>
          <input
            type='text'
            value={newWish.wishlist}
            name='wishlist'
            onChange={handleChange}
          />

          <button onClick={handleSubmit}>ADD TO YOUR WISHLIST!!!</button>
        </form>
      ) : (
        <>
          <p>Your assigned partner is {partner}</p>
          <p>Their wishlist: {partnerWishlist}</p>
        </>
      )}
    </>
  )
}
