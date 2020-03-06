import React, { useState } from 'react';

import { editComment } from '../actions/editComment';
import { connect } from 'react-redux';

const EditForm = (props) => {
console.log(props)
const [ edit, setEdit ] = useState(props.comment.comment_text)

const onChange = e => {
    setEdit(e.target.value)
}

const onSubmit = e => {
    e.preventDefault()
    console.log(edit)
    props.editComment(props.id, {
        ...props.comment,
        comment_text: edit
    })
}

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name='comment' value={edit} onChange={onChange}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}

const mapPropsToState = state => ({
    user: state.user
})

export default connect(mapPropsToState, {editComment})(EditForm);