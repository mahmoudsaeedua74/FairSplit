import React, { useContext, useState } from 'react'
import Button from '../Button/Button'
import { userContextProvider } from '../FormContextProvider/FormContextProvider'

export default function FormBill() {
  let { selectedFriend, handleSplitBill }= useContext(userContextProvider)

  const [bill, setBill] = useState("")
  const [paidByUser, setpaidByUser] = useState("")
  const [whoIsPaying, setwhoIsPaying] = useState("me")
  const paidByFriend = bill ? bill - paidByUser : ""

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill) return
    handleSplitBill(whoIsPaying === "me" ? paidByFriend : -paidByUser);
  }
  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="">   💰 bill value</label>
      <input type="text" value={bill} onChange={e => setBill(Number(e.target.value))} />
      <label htmlFor=""> 🧍‍♀️your expence</label>
      <input type="text"
        value={paidByUser}
        onChange={e => setpaidByUser(
          Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
        )}
      />
      <label htmlFor=""  > 👫{selectedFriend.name}s` expence</label>
      <input type="text" disabled value={paidByFriend} />
      <label htmlFor="">💰Who is paying the bill</label>
      <select value={whoIsPaying}
        onChange={e => setwhoIsPaying(e.target.value)}>
        <option value="me">Me</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  )
}
