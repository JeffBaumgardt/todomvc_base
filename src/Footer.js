import React from 'react'

const Footer = ({todos, chooseData, filter, clearCompleted}) => {
    let todosLeftToComplete = todos.filter(todo => {
        return !todo.completed
    })

    let todosCompleted = todos.filter(todo => {
        return todo.completed
    })

    let all = 'active',
        active = '',
        completed = ''

    if (filter === 'All') {
        all = 'active'
        active = ''
        completed = ''
    } else if (filter === 'Active') {
        all = ''
        active = 'active'
        completed = ''
    } else if (filter === 'Completed') {
        all = ''
        active = ''
        completed = 'active'
    }
    let completedButtonClass = todosCompleted.length > 0 ? 'clear-complete' : 'clear-complete hide'

    let phrasing = todosLeftToComplete.length === 1 ? 'todo' : 'todos'

    if (todos.length === 0) return ''

    return (
        <div className="Footer">
            <div className="todos-left">
                {todosLeftToComplete.length} <span className="mobile-hide">{phrasing}</span> left
            </div>
            <div className="nav-buttons">
                <div className={`all ${all}`} onClick={() => chooseData('All')}>
                    All
                </div>
                <div className={`active-elements ${active}`} onClick={() => chooseData('Active')}>
                    Active
                </div>
                <div className={`completed ${completed}`} onClick={() => chooseData('Completed')}>
                    Completed
                </div>
            </div>
            <button className={completedButtonClass} onClick={clearCompleted}>
                Clear completed
            </button>
        </div>
    )
}

export default Footer
