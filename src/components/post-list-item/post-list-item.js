import React, {Component} from 'react';
import './post-list-item.scss';

export default class PostListItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: false
    //     };
    //     this.onImportant = this.onImportant.bind(this);
    //     this.onLike = this.onLike.bind(this);
    // } //мы убираем данный конструктор, потому что наши лайки и важные работаю чисто локально, они немогут достучаться до хэдэра, где написано количество понравившегося и важного 

    // onImportant() {
    //     this.setState(({important}) => ({
    //         important: !important
    //     }))
    // }

    // onLike() {
    //     this.setState(({like}) => ({
    //         like: !like
    //     }))
    // } //эти функции прописаны в app.js

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        // const {important, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        
        if (important) {
            classNames +=' important'; // add class important (отмечаем понравившуюся запись)
        }

        if (like) {
            classNames +=' like';
        }

        return (
            <div className={classNames}>
                <span 
                className="app-list-item-label"
                onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    type="button"
                    className="btn-star btn-sm"
                    onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
