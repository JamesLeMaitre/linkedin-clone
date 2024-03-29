import { Avatar } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined'
import React,{forwardRef} from 'react'
import '../styles/Post.css'
import InputOption from './InputOption'



const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {

  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbDownAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" />
        <InputOption Icon={SendOutlinedIcon} title="Send" />
      </div>
    </div>
  )
})

export default Post
