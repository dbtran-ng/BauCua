import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addComment} from '../redux/actions/actions'
export default function DemoReduxApp(props) {
  //useSelector instead of mapStateToProps and connect
  let comments = useSelector((state) => state.DemoReduxReducers.comments);
  //useDispatch to send userComments to reducers
  let dispatch = useDispatch();

  let [userComments, setUserComments] = useState({
    name: '',
    content: '',
    avatar: '',
  })

  console.log(userComments)

  const handleChange = (e) => {
    let {value,name} = e.target;

    setUserComments({
      ...userComments,
      [name]: value
    })
  }

  const handleComment = (e) => {
    e.preventDefault();
    let userCommentsUpdate = {...userComments, avatar:`https://i.pravatar.cc/150?u=${userComments.name}`}

    dispatch(addComment(userCommentsUpdate))
  }

  return (
    <div className="container">
      <h3>Chatting App</h3>
      <div className="card text-left">
        <div className="card-header">
          {comments.map((comment, index) => {
            return (
              <div className="row mb-2" key={index}>
                <div className="col-1">
                  <img style={{ width: 75 }} src={comment.avatar} alt="avatar" />
                </div>
                <div className="col-11">
                  <h6 className="text-danger">{comment.name}</h6>
                  <p>{comment.content}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form className="card-body" onSubmit={handleComment}>
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input className="form-control" name="name" onChange={handleChange} />
          </div>
          <div className="form-group">
            <h4 className="card-title">Content</h4>
            <input className="form-control" name="content" onChange={handleChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
