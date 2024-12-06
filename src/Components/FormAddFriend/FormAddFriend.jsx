import React, { useContext, useState } from 'react'
import Button from '../Button/Button'
import { userContextProvider } from '../FormContextProvider/FormContextProvider'

export default function FormAddFriend() {
  let { handleAddFriend } = useContext(userContextProvider);

  const [name, setfriendNmae] = useState("")
  const [image, setimageUrl] = useState("https://i.pravatar.cc/48")
  function handleSumbit(e) {
    e.preventDefault();
    if (!name || !image) return
    const id = crypto.randomUUID()
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,  // Ensure this is set to 0 for new friends
    };
    handleAddFriend(newFriend)
    setfriendNmae("")
    setimageUrl("https://i.pravatar.cc/48")

  }
  return (
    <form className='form-split-bill' onSubmit={handleSumbit}>
      <label htmlFor=""> 👨🏾‍🤝‍👨🏼Friend Name</label>
      <input
        value={name}
        onChange={(e) => setfriendNmae(e.target.value)}
        type="text" />
      <label htmlFor="">🖼 Iage Url</label>
      <input
        value={image}
        onChange={(e) => setimageUrl(e.target.value)}
        type="text" />
      <Button>add</Button>
    </form>
  )
}
