const tasks = [
    {
        id: 1,
        title: 'reminder 1',
        content: 'do this task',
        reminder: true
    },
    {
        id: 2,
        title: 'reminder 2',
        content: 'do this task',
        reminder: true
    },
    {
        id: 3,
        title: 'reminder 3',
        content: 'do this task',
        reminder: true
    },
    {
        id: 4,
        title: 'reminder 4',
        content: 'do this task',
        reminder: true
    },
]
const Tasks = () => {
    return (
        <div className="tasks-container">
            {tasks.map((task) => {
                <h3>{task.title}</h3>
            })}
        </div>
    )
}