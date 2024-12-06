import React, { useContext } from 'react'
import { userContextProvider } from '../FormContextProvider/FormContextProvider'
import Friend from '../Friend/Friend'
export default function FriendList() {
  let { friends, selectedFriend, handleSelection } = useContext(userContextProvider);
  console.log(friends)
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
      ))}
    </ul>
  )
}
