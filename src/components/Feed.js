import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import CreateIcon from '@material-ui/icons/Create'
import EventNoteIcon from '@material-ui/icons/EventNote'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import firebase from 'firebase'
import React, { useEffect, useState } from 'react'
import FlipMove from 'react-flip-move'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { db } from '../firebase'
import '../styles/Feed.css'
import InputOption from './InputOption'
import Post from './Post'


const Feed = () => {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')
  const user = useSelector(selectUser)

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data(),
          }
        )))

      })
  }, [posts])

  const sendPost = (e) => {
    e.preventDefault()
    console.log("Add")
    // Methode POST pour envoyer dans la DB Firebase
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput('')
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={sendPost}>Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7fc15e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#e7a33e" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#fc9295" />
        </div>
      </div>

      {/* Posts */}

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl} />
        ))}
      </FlipMove>

    </div>
  )
}

export default Feed
