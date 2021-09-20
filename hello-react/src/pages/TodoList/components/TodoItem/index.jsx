import React, { Component } from 'react'
import styles from './index.module.css'
export default class TodoItem extends Component {
    static props = {
        content: '',
        id: -1,
        choose: false,
        chooseItem: null,
    }
    state = {

    }
    clickItem = (id) => {
        return () => {
            this.props.chooseItem(id);
        }
    }
    render() {
        const { content, id, choose } = this.props;
        return (
            <div className={styles.itemContainer} data-id={id} onClick={this.clickItem(id)}>
                <div className={[styles.itemIcon, choose ? styles.active : ''].join(' ')}></div>
                <span className={styles.itemContent}>{content}</span>
            </div>
        )
    }
}
