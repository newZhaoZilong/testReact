import React, { Component } from 'react';
import styles from './index.module.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoOption from './components/TodoOption';
export default class TodoList extends Component {
    state = {
        list: [
            {
                id: 0,
                content: "今天要健身半小时"
            },
            {
                id: 1,
                content: "今天要把react学会"
            }
        ]
    }
    chooseItem = (e) => {
        debugger
        const { id } = e.currentTarget.dataset;
        let { list } = this.state;
        const idx = list.findIndex((item) => item.id === Number(id));
        if (idx !== -1) {
            list[idx].choose = true;
            this.setState({
                list
            });
        }
    }
    render() {
        const { list } = this.state;
        return (
            <div className={styles.todoWrap}>
                <div className={styles.todoList}>
                    <TodoInput />
                    {
                        list.map((item, index) => {
                            return (<TodoItem key={item.id} {...item} chooseItem={this.chooseItem} />);
                        })
                    }
                    <TodoOption />
                </div>
            </div>
        )
    }
}
